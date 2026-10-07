<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useAppStateStore } from '@/stores/appState'

const route = useRoute()
const appStore = useAppStateStore()

const getBreadcrumbLabel = (metaBreadcrumb) => {
  if (!metaBreadcrumb) return ''
  switch (metaBreadcrumb) {
    case 'Home':
      return appStore.t.nav.home
    case 'About':
      return appStore.t.nav.about
    case 'Browse':
      return appStore.t.nav.browse
    case 'Event List':
      return appStore.t.nav.events
    case 'Event Detail':
      return appStore.t.nav.eventDetail
    case 'Category':
      return appStore.t.nav.category
    case 'Contact':
      return appStore.t.nav.contact
    default:
      return metaBreadcrumb
  }
}

const breadcrumbs = computed(() => {
  const matched = route.matched
  let crumbs = matched
    .map((m) => {
      let path = m.path
      if (path.includes(':')) {
        path = route.path
      }
      return {
        name: m.name,
        path: path,
        meta: m.meta,
      }
    })
    .filter((m) => m.meta && m.meta.breadcrumb)

  if (route.name === 'event-detail') {
    crumbs.splice(crumbs.length - 1, 0, {
      path: '/browse/events',
      meta: { breadcrumb: 'Event List' },
    })
  }

  // Prepend Home if not present
  if (crumbs.length === 0 || crumbs[0].meta.breadcrumb !== 'Home') {
    crumbs.unshift({
      path: '/',
      meta: { breadcrumb: 'Home' },
    })
  }

  return crumbs
})
</script>

<template>
  <nav class="breadcrumb" v-if="breadcrumbs.length > 0">
    <ul>
      <li v-for="(crumb, index) in breadcrumbs" :key="index">
        <span v-if="index > 0" class="separator">/</span>
        <router-link v-if="index < breadcrumbs.length - 1" :to="crumb.path">
          {{ getBreadcrumbLabel(crumb.meta.breadcrumb) }}
        </router-link>
        <span v-else class="active-crumb">{{ getBreadcrumbLabel(crumb.meta.breadcrumb) }}</span>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.breadcrumb {
  margin-bottom: 2rem;
  padding: 0.85rem 1.25rem;
  background: var(--breadcrumb-bg);
  border-radius: 10px;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.breadcrumb ul {
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  align-items: center;
  gap: 0.5rem;
}

.breadcrumb a {
  text-decoration: none;
  color: var(--primary);
  font-weight: 500;
  transition: color 0.2s;
}

.breadcrumb a:hover {
  text-decoration: underline;
  color: var(--primary-hover);
}

.separator {
  color: var(--text-light);
  margin: 0 0.4rem;
}

.active-crumb {
  color: var(--text-main);
  font-weight: 600;
}
</style>
