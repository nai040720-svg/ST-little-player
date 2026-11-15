<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import Icon from './Icon.vue';
import { usePlayerStore, usePlaylistStore, useSettingsStore } from '@/stores';
import { NetEaseProvider, getNeteaseWorkerURL } from '@/provider';
const player = usePlayerStore();
const playlist = usePlaylistStore();
const settings = useSettingsStore();
const confirmed = ref<string[]>([]);
const pending = ref('');
let generation = 0;
// Track the audio that is actually loaded, not the queue selection resolving next.
const id = computed(() => player.currentTrack?.source === 'netease' ? player.currentTrack.providerTrackId ?? '' : '');
const liked = computed(() => confirmed.value.includes(id.value));
const label = computed(() => pending.value === id.value && pending.value ? (liked.value ? '正在取消喜欢' : '正在添加喜欢') : liked.value ? '取消网易云喜欢' : '添加到网易云喜欢列表');
watch(() => [settings.settings.neteaseCookie, getNeteaseWorkerURL(settings.settings)], () => {
  generation++;
  confirmed.value = [];
  pending.value = '';
});
async function like(): Promise<void> {
  if (!id.value || pending.value) return;
  const trackId = id.value;
  const nextLiked = !liked.value;
  const requestGeneration = generation;
  pending.value = trackId;
  playlist.heartError = '';
  try {
    await new NetEaseProvider({ workerURL: getNeteaseWorkerURL(settings.settings), cookie: settings.settings.neteaseCookie }).likeSong(trackId, nextLiked);
    if (generation === requestGeneration) {
      confirmed.value = confirmed.value.filter(value => value !== trackId);
      if (nextLiked) confirmed.value.push(trackId);
    }
  } catch (error) {
    if (generation === requestGeneration) playlist.heartError = error instanceof Error ? error.message : '更新喜欢状态失败';
  } finally {
    if (generation === requestGeneration) pending.value = '';
  }
}
</script>
<template>
  <button v-if="playlist.heartActive" type="button" class="stmp-like-btn" :class="{ liked }"
    :disabled="!id || !!pending" :aria-pressed="liked" :title="label" :aria-label="label"
    :aria-busy="!!pending" @click.stop="like">
    <Icon :name="liked ? 'heart' : 'heart-outline'" :size="18" />
  </button>
</template>
<style scoped>
.stmp-like-btn { display: flex; align-items: center; justify-content: center; flex-shrink: 0; padding: 5px; border: none; border-radius: 8px; background: none; color: var(--stmp-text); cursor: pointer; opacity: 0.7; }
.stmp-like-btn:hover { background: var(--stmp-hover); opacity: 1; }
.stmp-like-btn:disabled { cursor: default; opacity: 0.4; }
.stmp-like-btn.liked { color: var(--stmp-accent); opacity: 1; }
.stmp-like-btn:focus-visible { outline: 2px solid var(--stmp-accent); outline-offset: 2px; }
</style>
