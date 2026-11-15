<script setup lang="ts">
import { usePlaylistStore } from '@/stores/playlist';
const playlist = usePlaylistStore();
</script>
<template>
  <div class="stmp-heart">
    <button type="button" :aria-pressed="playlist.heartActive" @click="playlist.toggleHeart()"
      :class="{ active: playlist.heartActive }" title="按网易云登录账号推荐（私人 FM）">
      ♥ {{ playlist.heartLoading ? '加载中 · 点击取消' : playlist.heartActive ? '关闭心动推荐' : '开启心动推荐' }}
    </button>
    <span v-if="playlist.heartError" role="status">{{ playlist.heartError }}</span>
  </div>
</template>
<style scoped>
.stmp-heart { display: flex; flex-direction: column; gap: 4px; }
button { cursor: pointer; padding: 6px 10px; border: 1px solid var(--stmp-border); border-radius: 8px; background: transparent; color: var(--stmp-text); }
button.active { color: var(--stmp-accent); border-color: var(--stmp-accent); }
span { font-size: 12px; color: var(--stmp-text-dim); overflow-wrap: anywhere; }
</style>
