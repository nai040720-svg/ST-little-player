<script setup lang="ts">
import { computed } from 'vue';
import Icon from './Icon.vue';
import { usePlaylistStore } from '@/stores/playlist';
defineProps<{ compact?: boolean }>();
const playlist = usePlaylistStore();
const label = computed(() => playlist.heartLoading ? '加载中 · 点击取消' : playlist.heartActive ? '关闭心动推荐' : '开启心动推荐');
</script>
<template>
  <div class="stmp-heart" :class="{ compact }">
    <button type="button" :aria-pressed="playlist.heartActive" @click.stop="playlist.toggleHeart()"
      :class="{ active: playlist.heartActive }" :title="label" :aria-label="label">
      <Icon v-if="compact" name="heart" :size="18" :class="{ loading: playlist.heartLoading }" />
      <template v-else>♥ {{ label }}</template>
    </button>
    <span v-if="!compact && playlist.heartError" role="status">{{ playlist.heartError }}</span>
  </div>
</template>
<style scoped>
.stmp-heart { display: flex; flex-direction: column; gap: 4px; }
button { cursor: pointer; padding: 6px 10px; border: 1px solid var(--stmp-border); border-radius: 8px; background: transparent; color: var(--stmp-text); }
button.active { color: var(--stmp-accent); border-color: var(--stmp-accent); }
span { font-size: 12px; color: var(--stmp-text-dim); overflow-wrap: anywhere; }
.compact { flex: 0 0 auto; }
.compact button { display: flex; align-items: center; justify-content: center; padding: 5px; border: none; background: none; opacity: 0.7; transition: background 0.15s, opacity 0.15s; }
.compact button:hover { background: var(--stmp-hover); opacity: 1; }
.compact button.active { opacity: 1; color: var(--stmp-accent); }
.compact button:focus-visible { outline: 2px solid var(--stmp-accent); outline-offset: 2px; }
.loading { animation: heart-pulse 1s ease-in-out infinite; }
@keyframes heart-pulse { 50% { opacity: 0.35; } }
@media (prefers-reduced-motion: reduce) { .loading { animation: none; } }
</style>
