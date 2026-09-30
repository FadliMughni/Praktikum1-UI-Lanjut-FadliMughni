<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useAppStateStore } from '@/stores/appState'

const isScrolled = ref(false)
const isLangOpen = ref(false)
const route = useRoute()
const appStore = useAppStateStore()

const menus = computed(() => [
  { name: appStore.t.nav.home, path: '/' },
  { name: appStore.t.nav.about, path: '/about' },
  {
    name: appStore.t.nav.browse,
    path: '/browse',
    children: [
      {
        name: appStore.t.nav.events,
        path: '/browse/events',
        children: [{ name: appStore.t.nav.eventDetailSample, path: '/browse/events/1' }],
      },
      { name: appStore.t.nav.category, path: '/browse/category' },
    ],
  },
  { name: appStore.t.nav.contact, path: '/contact' },
])

const toggleLangDropdown = () => {
  isLangOpen.value = !isLangOpen.value
}

const selectLang = (lang) => {
  appStore.setLocale(lang)
  isLangOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

const handleClickOutside = (e) => {
  if (!e.target.closest('.lang-selector-wrapper')) {
    isLangOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="navbar-container">
      <router-link to="/" class="logo">
        <svg
          width="28"
          height="32"
          viewBox="0 0 24 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="logo-icon"
        >
          <path d="M12 0L22.3923 6V18L12 24L1.6077 18V6L12 0Z" fill="white" />
          <path
            d="M15 9.5 C15 9.5 14 8 12 8 C9.5 8 8 10 8 12.5 C8 15 9.5 17 12 17 C14 17 15 16 15.5 14.5 V 12.5 H 12.5"
            stroke="#1A1643"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span class="logo-text">Gatherly</span>
      </router-link>

      <ul class="nav-menu">
        <li class="nav-item" v-for="menu in menus" :key="menu.path">
          <router-link
            :to="menu.path"
            class="nav-link"
            :class="{
              active:
                route.path === menu.path ||
                (menu.path !== '/' && route.path.startsWith(menu.path)),
            }"
          >
            {{ menu.name }}
            <svg
              v-if="menu.children"
              class="dropdown-indicator"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </router-link>

          <!-- First Level Dropdown -->
          <ul v-if="menu.children" class="dropdown-menu">
            <li v-for="child in menu.children" :key="child.path" class="dropdown-item">
              <router-link :to="child.path" class="dropdown-link">
                {{ child.name }}
                <svg
                  v-if="child.children"
                  class="submenu-indicator"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </router-link>

              <!-- Second Level Dropdown (Submenu) -->
              <ul v-if="child.children" class="submenu">
                <li
                  v-for="subchild in child.children"
                  :key="subchild.path"
                  class="submenu-item"
                >
                  <router-link :to="subchild.path" class="dropdown-link">
                    {{ subchild.name }}
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      <div class="nav-right">
        <!-- Theme Toggle Button -->
        <button
          class="theme-toggle-btn"
          @click="appStore.toggleTheme()"
          :title="appStore.isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
        >
          <svg
            v-if="appStore.isDark"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
          <svg
            v-else
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </button>

        <!-- Language Selector Dropdown Wrapper -->
        <div class="lang-selector-wrapper">
          <button class="lang-selector" @click.stop="toggleLangDropdown">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path
                d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
              ></path>
            </svg>
            <span class="lang-text">{{ appStore.locale }}</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="chevron"
              :class="{ open: isLangOpen }"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>

          <ul v-if="isLangOpen" class="lang-dropdown">
            <li :class="{ active: appStore.locale === 'EN' }" @click="selectLang('EN')">
              🇬🇧 English (EN)
            </li>
            <li :class="{ active: appStore.locale === 'ID' }" @click="selectLang('ID')">
              🇮🇩 Indonesia (ID)
            </li>
          </ul>
        </div>

        <button class="hamburger-btn">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="4" y1="12" x2="20" y2="12"></line>
            <line x1="4" y1="6" x2="20" y2="6"></line>
            <line x1="4" y1="18" x2="20" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* NAVBAR FULL-WIDTH menyatu dengan bagian atas layar */
.navbar {
  width: 100%;
  background: var(--nav-bg, #1c1948);
  border-bottom: 1px solid var(--border-color, #333);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  position: sticky;
  top: 0;
  z-index: 999;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0.85rem 2rem;
}

.navbar.scrolled {
  background: var(--nav-bg, rgba(28, 25, 72, 0.95));
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: var(--nav-text, #fff);
  padding-right: 2rem;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: translateY(-2px);
}

.logo-icon {
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.logo:hover .logo-icon {
  transform: rotate(15deg) scale(1.1);
}

.logo-text {
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 2.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
  flex: 1;
  justify-content: center;
}

.nav-item {
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 1rem 0;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: var(--nav-text, #fff);
  font-size: 0.95rem;
  font-weight: 500;
  padding: 0.5rem 1.25rem;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.nav-link.active {
  background-color: var(--primary, #6644ff);
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(102, 68, 255, 0.3);
}

.nav-link.active:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 68, 255, 0.5);
}

.nav-link:not(.active):hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.dropdown-indicator {
  transition: transform 0.3s ease;
}

.nav-item:hover .dropdown-indicator {
  transform: rotate(180deg);
}

/* DROPDOWN & SUBMENU STYLES */
.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: var(--dropdown-bg, #d8d8d8);
  min-width: 200px;
  list-style: none;
  padding: 0;
  margin: 0;
  box-shadow: var(--shadow-md);
  border-radius: 8px;
  border: 1px solid var(--border-color);
  overflow: hidden;
}

.nav-item:hover .dropdown-menu {
  display: block;
  animation: fadeIn 0.2s ease-out;
}

.dropdown-item {
  position: relative;
}

.dropdown-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  text-decoration: none;
  color: var(--dropdown-text, #333);
  font-size: 0.95rem;
  transition:
    background-color 0.2s,
    color 0.2s;
  border-bottom: 1px solid var(--border-color);
}

.dropdown-link:hover {
  background-color: var(--dropdown-hover, #c4c4c4);
  color: var(--primary);
}

.dropdown-item:last-child .dropdown-link {
  border-bottom: none;
}

/* Submenu (Level 2) */
.submenu {
  display: none;
  position: absolute;
  top: 0;
  left: 100%;
  background-color: var(--dropdown-bg, #d8d8d8);
  min-width: 220px;
  list-style: none;
  padding: 0;
  margin: 0;
  box-shadow: var(--shadow-md);
  border-radius: 8px;
  border: 1px solid var(--border-color);
  overflow: hidden;
}

.dropdown-item:hover .submenu {
  display: block;
  animation: fadeIn 0.2s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* RIGHT SECTION */
.nav-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.theme-toggle-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--nav-text, #fff);
  cursor: pointer;
  transition: all 0.3s ease;
}

.theme-toggle-btn:hover {
  background: rgba(255, 255, 255, 0.18);
  transform: translateY(-2px);
}

.lang-selector-wrapper {
  position: relative;
}

.lang-selector {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--nav-text, #fff);
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0.5rem 0.8rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.lang-selector:hover {
  background: rgba(255, 255, 255, 0.18);
}

.chevron {
  transition: transform 0.3s ease;
}

.chevron.open {
  transform: rotate(180deg);
}

.lang-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background: var(--dropdown-bg, #ffffff);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-md);
  border-radius: 8px;
  list-style: none;
  padding: 6px 0;
  margin: 0;
  min-width: 150px;
  z-index: 1000;
  animation: fadeIn 0.2s ease-out;
}

.lang-dropdown li {
  padding: 10px 16px;
  font-size: 0.9rem;
  color: var(--dropdown-text);
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  gap: 8px;
}

.lang-dropdown li:hover {
  background: var(--dropdown-hover);
}

.lang-dropdown li.active {
  color: var(--primary);
  font-weight: 700;
}

.hamburger-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  color: var(--nav-text, #fff);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.hamburger-btn:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: scale(1.05);
}

@media (max-width: 900px) {
  .nav-menu {
    gap: 1rem;
  }
}

@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }
}
</style>
