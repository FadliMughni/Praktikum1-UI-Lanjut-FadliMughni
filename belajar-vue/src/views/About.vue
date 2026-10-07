<script setup>
import { useAppStateStore } from '@/stores/appState'
const appStore = useAppStateStore()
</script>

<template>
  <div class="about-page">
    <div class="about-header">
      <h1>{{ appStore.t.about.title }}</h1>
      <p>{{ appStore.t.about.subtitle }}</p>
    </div>

    <div class="about-content">
      <div class="text-block">
        <h2>{{ appStore.t.about.missionTitle }}</h2>
        <p>{{ appStore.t.about.missionDesc }}</p>
      </div>

      <div class="text-block">
        <h2>{{ appStore.t.about.visionTitle }}</h2>
        <p>{{ appStore.t.about.visionDesc }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-page {
  animation: fadeIn 0.5s ease;
  max-width: 800px;
  margin: 0 auto;
}

.about-header {
  text-align: center;
  margin-bottom: 4rem;
  padding: 4rem 2rem;
  background: var(--bg-card);
  border-radius: 20px;
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
}

.about-header h1 {
  font-size: 3rem;
  color: var(--text-main);
  margin-bottom: 1rem;
}

.about-header p {
  font-size: 1.2rem;
  color: var(--text-secondary);
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 0 1rem;
}

.text-block h2 {
  color: var(--text-main);
  font-size: 1.8rem;
  margin-bottom: 1.2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.text-block h2::before {
  content: '';
  display: block;
  width: 24px;
  height: 4px;
  background: var(--primary);
  border-radius: 2px;
}

.text-block p {
  color: var(--text-secondary);
  line-height: 1.8;
  font-size: 1.1rem;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
