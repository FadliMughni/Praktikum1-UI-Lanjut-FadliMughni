<script setup>
import { useAppStateStore } from '@/stores/appState'
const appStore = useAppStateStore()
</script>

<template>
  <div class="category-page">
    <h2 class="section-title">{{ appStore.t.category.title }}</h2>
    <div class="category-grid">
      <div class="category-card" v-for="(cat, index) in appStore.t.category.items" :key="index">
        <div class="cat-icon">{{ cat.icon }}</div>
        <h3>{{ cat.name }}</h3>
        <p>{{ cat.count }} {{ appStore.t.category.eventsLabel }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section-title {
  font-size: 1.8rem;
  color: var(--text-main);
  margin-bottom: 2rem;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
}

.category-card {
  background: var(--bg-card);
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: var(--shadow-sm);
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
  border-color: var(--primary);
}

.cat-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.category-card h3 {
  color: var(--text-main);
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.category-card p {
  color: var(--text-muted);
  font-size: 0.9rem;
}
</style>
