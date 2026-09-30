<script setup>
import { useAppStateStore } from '@/stores/appState'
const appStore = useAppStateStore()
</script>

<template>
  <div class="event-list-page">
    <div class="header-section">
      <h2 class="section-title">{{ appStore.t.eventList.title }}</h2>
      <p class="section-desc">{{ appStore.t.eventList.subtitle }}</p>
    </div>

    <div class="event-grid">
      <div class="event-card" v-for="i in 6" :key="i">
        <div class="event-body">
          <div class="event-meta">
            <span class="event-date">{{ appStore.t.eventList.datePrefix }} {{ 10 + i }}, 2026</span>
            <span class="event-category">{{ appStore.t.eventList.categoryTag }}</span>
          </div>
          <h3>{{ appStore.t.eventList.eventTitlePrefix }} {{ i }}</h3>
          <p class="event-loc">{{ appStore.t.eventList.location }}</p>
          <p class="event-desc">{{ appStore.t.eventList.desc }}</p>
          <div class="card-footer">
            <router-link :to="`/browse/events/${i}`" class="btn-link">
              {{ appStore.t.eventList.viewDetails }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header-section {
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2.2rem;
  color: var(--text-main);
  margin-bottom: 0.5rem;
}

.section-desc {
  color: var(--text-secondary);
  font-size: 1.1rem;
}

.event-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
}

.event-card {
  background: var(--bg-card);
  border-radius: 16px;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-color);
  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.event-card:hover {
  transform: translateY(-5px);
  border-color: var(--border-hover);
  box-shadow: var(--shadow-md);
}

.event-body {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.event-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.event-date {
  background: var(--primary-light);
  color: var(--primary);
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.85rem;
}

.event-category {
  color: var(--text-muted);
  font-size: 0.85rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.event-body h3 {
  color: var(--text-main);
  margin-bottom: 0.8rem;
  font-size: 1.4rem;
}

.event-loc {
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
}

.event-desc {
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 0.95rem;
  margin-bottom: 2rem;
  flex-grow: 1;
}

.card-footer {
  border-top: 1px solid var(--border-color);
  padding-top: 1.5rem;
}

.btn-link {
  display: inline-block;
  color: var(--text-main);
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s;
}

.btn-link:hover {
  color: var(--primary);
}
</style>
