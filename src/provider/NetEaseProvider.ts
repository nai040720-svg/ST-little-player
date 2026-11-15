import type { MusicProvider, SearchResult, ResolvedTrack } from '../types';
import { logger } from '@/utils/logger';
import { eapiEncrypt, buildCoverUrl } from '@/utils/netease-crypto';

export interface NetEaseConfig {
  workerURL?: string;
  cookie?: string;
}

export interface NetEasePlaylistSummary {
  id: string;
  name: string;
  trackCount: number;
  cover: string;
  specialType: number;
}

export interface NetEasePlaylistDetail {
  name: string;
  cover: string;
  songs: SearchResult[];
}

export class NetEaseProvider implements MusicProvider {
  id = 'netease';
  name = '网易云';
  private workerURL: string;
  private cookie: string;

  constructor(config?: NetEaseConfig) {
    this.workerURL = config?.workerURL?.trim() || '';
    this.cookie = config?.cookie?.trim() || '';
  }

  private async fetchJson(
    url: string,
    options?: RequestInit,
    timeoutMs = 5000,
    retries = 2,
  ): Promise<any | null> {
    let lastErr: unknown;
    for (let attempt = 0; attempt <= retries; attempt++) {
      try {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), timeoutMs);
        const res = await fetch(url, { ...options, signal: controller.signal });
        clearTimeout(timer);
        if (!res.ok) {
          logger.warn(`NetEase: HTTP ${res.status} from ${url}`);
          if (res.status >= 500 && attempt < retries) continue;
          return null;
        }
        const json = await res.json();
        if (json && json.success === false) {
          logger.warn('NetEase: API error: ' + (json.error ?? 'unknown'));
          return null;
        }
        return json;
      } catch (err) {
        lastErr = err;
        if (attempt < retries) continue;
      }
    }
    logger.warn('NetEase: fetchJson failed after ' + (retries + 1) + ' attempts: ' + url, lastErr);
    return null;
  }

  probeAudio(url: string, timeoutMs = 3000): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      const audio = new Audio();
      let settled = false;
      const cleanup = (): void => {
        audio.removeEventListener('loadedmetadata', onMeta);
        audio.removeEventListener('error', onError);
        clearTimeout(timer);
        audio.src = '';
      };
      const onMeta = (): void => {
        if (settled) return;
        settled = true;
        cleanup();
        resolve(true);
      };
      const onError = (): void => {
        if (settled) return;
        settled = true;
        cleanup();
        resolve(false);
      };
      const timer = setTimeout(() => {
        if (settled) return;
        settled = true;
        cleanup();
        resolve(false);
      }, timeoutMs);
      audio.preload = 'metadata';
      audio.addEventListener('loadedmetadata', onMeta);
      audio.addEventListener('error', onError);
      audio.src = url;
    });
  }

  async search(keyword: string): Promise<SearchResult[]> {
    if (!this.workerURL) {
      logger.warn('NetEase: worker URL not configured');
      return [];
    }

    const data = await this.fetchJson(
      `${this.workerURL}/search?keyword=${encodeURIComponent(keyword)}&limit=20`,
    );
    const songs = data?.data;
    if (!Array.isArray(songs)) return [];

    return songs.map((item: any) => ({
      id: String(item.id ?? ''),
      name: String(item.name ?? ''),
      artist: String(item.artist ?? ''),
      duration: item.duration ?? undefined,
      provider: this.id,
      picId: item.picId ? String(item.picId) : undefined,
    }));
  }

  async resolve(id: string, _picId?: string): Promise<ResolvedTrack | null> {
    if (!this.workerURL) {
      logger.warn('NetEase: worker URL not configured');
      return null;
    }
    if (!this.cookie) {
      logger.warn('NetEase: cookie not set, cannot resolve URL');
      return null;
    }

    const urlPath = '/api/song/enhance/player/url/v1';
    const payload = {
      ids: [Number(id)],
      level: 'exhigh',
      encodeType: 'flac',
      header: JSON.stringify({
        os: 'pc',
        appver: '',
        osver: '',
        deviceId: 'pyncm!',
        requestId: String(
          Math.floor(Math.random() * 10000000) + 20000000,
        ),
      }),
    };
    const encryptedParams = eapiEncrypt(urlPath, payload);

    const headers: Record<string, string> = {
      'X-Netease-Params': encryptedParams,
      'X-Netease-Cookie': this.cookie,
    };

    const [urlData, lyricData, detailData] = await Promise.all([
      this.fetchJson(`${this.workerURL}/resolve?id=${encodeURIComponent(id)}`, { headers }),
      this.fetchJson(`${this.workerURL}/lyric?id=${encodeURIComponent(id)}`),
      this.fetchJson(`${this.workerURL}/detail?id=${encodeURIComponent(id)}`, { headers }),
    ]);

    const url = urlData?.data?.url;
    if (!url) {
      logger.warn('NetEase: no URL returned for id=' + id);
      return null;
    }

    const detail = detailData?.data;
    const cover = detail?.cover || (_picId ? buildCoverUrl(_picId) : undefined);

    return {
      providerTrackId: id,
      url: String(url),
      lyric: lyricData?.data?.lyric ? String(lyricData.data.lyric) : undefined,
      cover: cover || undefined,
      name: detail?.name ? String(detail.name) : '',
      artist: detail?.artist ? String(detail.artist) : '',
      source: this.id,
    };
  }

  async searchAndResolve(
    keyword: string,
    artist?: string,
  ): Promise<ResolvedTrack | null> {
    const query = artist ? `${keyword} ${artist}` : keyword;
    const results = await this.search(query);
    if (results.length === 0) return null;

    for (const result of results) {
      const track = await this.resolve(result.id, result.picId);
      if (!track) continue;

      const playable = await this.probeAudio(track.url);
      if (!playable) {
        logger.warn('NetEase: audio probe failed for id=' + result.id + ', trying next');
        continue;
      }

      track.name = result.name;
      track.artist = result.artist;
      return track;
    }

    logger.warn('NetEase: no playable result for "' + query + '"');
    return null;
  }

  /** Add the song to the authenticated account; never toggle an existing like off. */
  async likeSong(id: string): Promise<void> {
    if (!this.workerURL || !this.cookie) throw new Error('请先配置网易云 Cookie 和新版 Worker');
    if (!/^\d+$/.test(id)) throw new Error('当前歌曲没有有效的网易云 ID');
    const response = await fetch(`${this.workerURL}/like`, {
      method: 'POST',
      headers: {
        'X-Netease-Cookie': this.cookie,
        'X-Netease-Params': eapiEncrypt('/api/radio/like', {
          alg: 'itembased', trackId: id, like: true, time: '3',
        }),
      },
      signal: AbortSignal.timeout(15000),
      cache: 'no-store',
    });
    if (response.status === 404) throw new Error('当前 Worker 不支持喜欢歌曲，请更新部署后重试');
    if (response.status === 401) throw new Error('网易云登录已失效，请更新 Cookie');
    if (!response.ok) throw new Error('添加喜欢未成功，请稍后重试');
    const result = await response.json();
    if (result.success !== true) throw new Error('网易云未确认添加喜欢，请稍后重试');
  }

  async fetchPersonalFM(): Promise<SearchResult[]> {
    if (!this.workerURL || !this.cookie) throw new Error('请先配置网易云 Cookie 和新版 Worker');
    const response = await fetch(`${this.workerURL}/personal-fm`, {
      headers: {
        'X-Netease-Cookie': this.cookie,
        'X-Netease-Params': eapiEncrypt('/api/v1/radio/get', {}),
      },
      signal: AbortSignal.timeout(15000),
      cache: 'no-store',
    });
    if (response.status === 404) throw new Error('当前 Worker 不支持心动推荐，请部署本仓库新版 Worker 并选择自建模式');
    if (response.status === 401) throw new Error('网易云登录已失效，请更新 Cookie');
    if (!response.ok) throw new Error('心动推荐请求失败，请稍后重试');
    const result = await response.json();
    if (!result.success || !Array.isArray(result.data)) throw new Error('心动推荐响应无效');
    return result.data.filter((song: any) => song.id && song.name).map((song: any) => ({
      id: String(song.id), name: String(song.name), artist: String(song.artist ?? ''),
      duration: song.duration, picId: song.picId, provider: this.id,
    }));
  }

  async fetchPlaylists(): Promise<NetEasePlaylistSummary[] | null> {
    if (!this.workerURL || !this.cookie) {
      logger.warn('NetEase: worker URL or cookie not configured for fetchPlaylists');
      return null;
    }
    const data = await this.fetchJson(
      `${this.workerURL}/playlists?limit=100`,
      { headers: { 'X-Netease-Cookie': this.cookie } },
      15000,
      1,
    );
    if (!data || data.success === false) {
      logger.warn('NetEase: fetchPlaylists failed', data?.error);
      return null;
    }
    return Array.isArray(data.data) ? data.data : [];
  }

  async fetchPlaylist(playlistId: string): Promise<NetEasePlaylistDetail | null> {
    if (!this.workerURL || !this.cookie) {
      logger.warn('NetEase: worker URL or cookie not configured for fetchPlaylist');
      return null;
    }
    const data = await this.fetchJson(
      `${this.workerURL}/playlist?id=${encodeURIComponent(playlistId)}`,
      { headers: { 'X-Netease-Cookie': this.cookie } },
      30000,
      1,
    );
    if (!data || data.success === false) {
      logger.warn('NetEase: fetchPlaylist failed', data?.error);
      return null;
    }
    const d = data.data;
    if (!d || !Array.isArray(d.songs)) return null;
    const songs: SearchResult[] = d.songs.map((item: any) => ({
      id: String(item.id ?? ''),
      name: String(item.name ?? ''),
      artist: String(item.artist ?? ''),
      duration: item.duration ?? undefined,
      provider: this.id,
      picId: item.picId ? String(item.picId) : undefined,
    }));
    return {
      name: String(d.name ?? ''),
      cover: String(d.cover ?? ''),
      songs,
    };
  }
}
