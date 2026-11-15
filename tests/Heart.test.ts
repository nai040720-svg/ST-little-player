import { beforeEach, describe, expect, it, vi } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';
import { usePlaylistStore } from '../src/stores/playlist';
import { useSettingsStore } from '../src/stores/settings';
import { NetEaseProvider } from '../src/provider/NetEaseProvider';

const song = (id: string) => ({ id, name: id, artist: 'artist', provider: 'netease' });
beforeEach(() => { setActivePinia(createPinia()); vi.restoreAllMocks(); });
describe('account recommendation queue', () => {
  it('loads account recommendations, advances past the batch, and restores the original queue', async () => {
    const s = usePlaylistStore();
    const original = { items: [], currentIndex: -1 };
    s.queue = original;
    vi.spyOn(NetEaseProvider.prototype, 'fetchPersonalFM').mockResolvedValueOnce([song('1'), song('2')]).mockResolvedValueOnce([song('2'), song('3')]);
    const play = vi.spyOn(s, 'resolveAndPlay').mockResolvedValue(true);
    await s.toggleHeart();
    expect(s.heartActive).toBe(true);
    expect(s.queue.currentIndex).toBe(0);
    await s.nextHeart();
    await s.nextHeart();
    expect(s.queue.items.map(x => x.providerTrackId)).toEqual(['1', '2', '3']);
    expect(play).toHaveBeenLastCalledWith(2);
    s.stopHeart();
    expect(s.queue).toEqual(original);
  });
  it('discards a response after cancellation', async () => {
    let finish!: (songs: ReturnType<typeof song>[]) => void;
    vi.spyOn(NetEaseProvider.prototype, 'fetchPersonalFM').mockImplementation(() => new Promise(resolve => { finish = resolve; }));
    const s = usePlaylistStore();
    const play = vi.spyOn(s, 'resolveAndPlay').mockResolvedValue(true);
    const start = s.toggleHeart();
    s.stopHeart();
    finish([song('late')]);
    await start;
    expect(s.queue.items).toEqual([]);
    expect(play).not.toHaveBeenCalled();
  });
  it('restores the queue and shows upstream failures without remaining in loading state', async () => {
    vi.spyOn(NetEaseProvider.prototype, 'fetchPersonalFM').mockRejectedValue(new Error('Cookie expired'));
    const s = usePlaylistStore();
    await s.toggleHeart();
    expect(s.heartActive).toBe(false);
    expect(s.heartLoading).toBe(false);
    expect(s.heartError).toBe('Cookie expired');
  });
  it('does not loop an exhausted recommendation batch or honor single repeat', async () => {
    const s = usePlaylistStore();
    useSettingsStore().settings.playMode = 'single';
    vi.spyOn(NetEaseProvider.prototype, 'fetchPersonalFM').mockResolvedValue([song('1')]);
    vi.spyOn(s, 'resolveAndPlay').mockResolvedValue(true);
    await s.toggleHeart();
    expect(s.peekNextIndex()).toBe(-1);
    await s.nextHeart();
    expect(s.queue.currentIndex).toBe(0);
    expect(s.heartError).toContain('没有新的推荐');
  });
  it('bounds unplayable retries and prevents AI from interrupting FM', async () => {
    const s = usePlaylistStore();
    vi.spyOn(NetEaseProvider.prototype, 'fetchPersonalFM').mockResolvedValue(Array.from({length: 8}, (_, i) => song(String(i))));
    const play = vi.spyOn(s, 'resolveAndPlay').mockResolvedValue(false);
    await s.toggleHeart();
    expect(play).toHaveBeenCalledTimes(5);
    const index = s.queue.currentIndex;
    s.addFromAi(song('AI'));
    expect(s.queue.currentIndex).toBe(index);
    expect(s.queue.items).toHaveLength(8);
  });
});
