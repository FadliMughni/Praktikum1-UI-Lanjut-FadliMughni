<script setup>
import { useAppStateStore } from '@/stores/appState'
const appStore = useAppStateStore()
</script>

<template>
  <div class="home-page">
    <section class="hero">
      <div class="hero-content">
        <span class="badge">{{ appStore.t.home.badge }}</span>
        <h1 class="hero-title">{{ appStore.t.home.title }}</h1>
        <p class="hero-subtitle">{{ appStore.t.home.subtitle }}</p>
        <div class="hero-actions">
          <router-link to="/browse/events" class="btn btn-primary">
            {{ appStore.t.home.discoverBtn }}
          </router-link>
          <router-link to="/about" class="btn btn-secondary">
            {{ appStore.t.home.learnMoreBtn }}
          </router-link>
        </div>
      </div>
    </section>

    <section class="features">
      <div class="feature-card">
        <div class="feature-icon">🎯</div>
        <h3>{{ appStore.t.home.feat1Title }}</h3>
        <p>{{ appStore.t.home.feat1Desc }}</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">🌐</div>
        <h3>{{ appStore.t.home.feat2Title }}</h3>
        <p>{{ appStore.t.home.feat2Desc }}</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">👥</div>
        <h3>{{ appStore.t.home.feat3Title }}</h3>
        <p>{{ appStore.t.home.feat3Desc }}</p>
      </div>
    </section>

    <section class="sitemap-visual">
      <h2>{{ appStore.t.home.sitemapTitle }}</h2>
      <p class="sitemap-desc">{{ appStore.t.home.sitemapDesc }}</p>
      <ul class="tree">
        <li>
          <router-link to="/">{{ appStore.t.nav.home }}</router-link>
          <ul>
            <li><router-link to="/about">{{ appStore.t.nav.about }}</router-link></li>
            <li>
              <router-link to="/browse">{{ appStore.t.nav.browse }}</router-link>
              <ul>
                <li>
                  <router-link to="/browse/events">{{ appStore.t.nav.events }}</router-link>
                  <ul>
                    <li>
                      <router-link to="/browse/events/1">
                        {{ appStore.t.nav.eventDetailSample }}
                      </router-link>
                    </li>
                  </ul>
                </li>
                <li><router-link to="/browse/category">{{ appStore.t.nav.category }}</router-link></li>
              </ul>
            </li>
            <li><router-link to="/contact">{{ appStore.t.nav.contact }}</router-link></li>
          </ul>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  animation: fadeIn 0.5s ease;
}

.hero {
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 5rem 2rem;
  background: var(--bg-card);
  border-radius: 24px;
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
}

.hero-content {
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.badge {
  display: inline-block;
  padding: 0.5rem 1.2rem;
  background: var(--primary-light);
  color: var(--primary);
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 2rem;
  letter-spacing: 0.5px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.2;
  color: var(--text-main);
  margin-bottom: 1.5rem;
}

.hero-subtitle {
  font-size: 1.15rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 2.5rem;
  max-width: 600px;
}

.hero-actions {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 0.8rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-primary {
  background: var(--primary);
  color: white;
  box-shadow: 0 4px 15px rgba(102, 68, 255, 0.2);
}

.btn-primary:hover {
  background: var(--primary-hover);
  transform: translateY(-2px);
}

.btn-secondary {
  background: var(--bg-card);
  color: var(--text-main);
  border: 1px solid var(--border-color);
}

.btn-secondary:hover {
  border-color: var(--primary);
  color: var(--primary);
  transform: translateY(-2px);
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: var(--bg-card);
  padding: 2.5rem;
  border-radius: 16px;
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
  text-align: center;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
  border-color: var(--border-hover);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.feature-card h3 {
  color: var(--text-main);
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.feature-card p {
  color: var(--text-secondary);
  line-height: 1.6;
}

.sitemap-visual {
  padding: 3rem;
  background: var(--bg-card);
  border-radius: 16px;
  border: 1px solid var(--border-color);
}

.sitemap-visual h2 {
  color: var(--text-main);
  margin-bottom: 0.5rem;
}

.sitemap-desc {
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
}

.tree,
.tree ul {
  list-style: none;
  padding-left: 20px;
}

.tree li {
  margin: 12px 0;
  position: relative;
}

.tree li::before {
  content: '';
  position: absolute;
  top: -12px;
  left: -15px;
  border-left: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  width: 10px;
  height: 30px;
}

.tree a {
  text-decoration: none;
  color: var(--text-main);
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 8px;
  display: inline-block;
  transition: all 0.2s;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
}

.tree a:hover {
  border-color: var(--primary);
  color: var(--primary);
}

.tree .router-link-exact-active {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  .hero-actions {
    flex-direction: column;
    width: 100%;
  }
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
