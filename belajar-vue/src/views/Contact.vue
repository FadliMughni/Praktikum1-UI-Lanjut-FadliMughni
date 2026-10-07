<script setup>
import { useAppStateStore } from '@/stores/appState'
const appStore = useAppStateStore()
</script>

<template>
  <div class="contact-page">
    <div class="contact-header">
      <h1>{{ appStore.t.contact.title }}</h1>
      <p>{{ appStore.t.contact.subtitle }}</p>
    </div>

    <div class="contact-content">
      <div class="contact-info">
        <div class="info-item">
          <div class="info-icon">📍</div>
          <div>
            <h3>{{ appStore.t.contact.officeTitle }}</h3>
            <p>{{ appStore.t.contact.officeAddr }}</p>
          </div>
        </div>

        <div class="info-item">
          <div class="info-icon">📞</div>
          <div>
            <h3>{{ appStore.t.contact.phoneTitle }}</h3>
            <p>+62 812 3456 7890</p>
          </div>
        </div>

        <div class="info-item">
          <div class="info-icon">✉️</div>
          <div>
            <h3>{{ appStore.t.contact.emailTitle }}</h3>
            <p>hello@gatherly.com</p>
          </div>
        </div>
      </div>

      <div class="contact-form">
        <form @submit.prevent>
          <div class="form-group">
            <label>{{ appStore.t.contact.nameLabel }}</label>
            <input type="text" :placeholder="appStore.t.contact.namePlaceholder" class="form-control" />
          </div>

          <div class="form-group">
            <label>{{ appStore.t.contact.emailLabel }}</label>
            <input type="email" :placeholder="appStore.t.contact.emailPlaceholder" class="form-control" />
          </div>

          <div class="form-group">
            <label>{{ appStore.t.contact.messageLabel }}</label>
            <textarea :placeholder="appStore.t.contact.messagePlaceholder" rows="5" class="form-control"></textarea>
          </div>

          <button class="btn-submit">{{ appStore.t.contact.sendBtn }}</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-page {
  animation: fadeIn 0.5s ease;
}

.contact-header {
  text-align: center;
  margin-bottom: 4rem;
}

.contact-header h1 {
  font-size: 2.8rem;
  color: var(--text-main);
  margin-bottom: 1rem;
}

.contact-header p {
  font-size: 1.1rem;
  color: var(--text-secondary);
}

.contact-content {
  display: flex;
  gap: 4rem;
  max-width: 1000px;
  margin: 0 auto;
}

.contact-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
}

.info-icon {
  font-size: 2rem;
  background: var(--primary-light);
  padding: 1rem;
  border-radius: 12px;
}

.info-item h3 {
  color: var(--text-main);
  margin-bottom: 0.5rem;
}

.info-item p {
  color: var(--text-secondary);
  line-height: 1.5;
}

.contact-form {
  flex: 1.5;
  background: var(--bg-card);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-main);
  font-weight: 600;
}

.form-control {
  width: 100%;
  padding: 1rem;
  background: var(--bg-primary);
  color: var(--text-main);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;
  font-family: inherit;
}

.form-control:focus {
  border-color: var(--primary);
}

.btn-submit {
  width: 100%;
  padding: 1rem;
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-submit:hover {
  background: var(--primary-hover);
}

@media (max-width: 768px) {
  .contact-content {
    flex-direction: column;
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
