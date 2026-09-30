<script setup>
import { useAppStateStore } from '@/stores/appState'
const appStore = useAppStateStore()
</script>

<template>
  <div class="browse-page">
    <div class="browse-header">
      <h1>{{ appStore.t.browse.title }}</h1>
      <p>{{ appStore.t.browse.subtitle }}</p>
    </div>
    <div class="browse-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.browse-page {
  animation: fadeIn 0.4s ease;
}

.browse-header {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-color);
}

.browse-header h1 {
  font-size: 2.5rem;
  color: var(--text-main);
  margin-bottom: 0.5rem;
}

.browse-header p {
  color: var(--text-secondary);
  font-size: 1.1rem;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
