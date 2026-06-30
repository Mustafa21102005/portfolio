<script setup>
import { ref, onMounted, inject } from 'vue'
import { getStoredConsent, grantClarityConsent, denyClarityConsent } from '@/composables/useClarity'

const visible = ref(false)
const privacyModal = inject('privacyModal')

function show() {
  visible.value = true
}

defineExpose({ show })

onMounted(() => {
  const stored = getStoredConsent()
  if (stored !== 'granted' && stored !== 'denied') {
    visible.value = true
  }
})

function accept() {
  grantClarityConsent()
  visible.value = false
}

function decline() {
  denyClarityConsent()
  visible.value = false
}

function openPrivacyModal() {
  privacyModal?.value?.show()
}
</script>

<template>
  <transition name="slide-up">
    <div
      v-if="visible"
      class="cookie-banner"
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
    >
      <p class="cookie-banner__text">
        {{ $t('cookie.text') }}
        <a href="javascript:void(0)" @click="openPrivacyModal">
          {{ $t('cookie.learnMore') }}
        </a>
      </p>
      <div class="cookie-banner__actions">
        <button class="btn--small" @click="decline">{{ $t('cookie.decline') }}</button>
        <button class="btn--small btn--primary" @click="accept">{{ $t('cookie.accept') }}</button>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.cookie-banner {
  position: fixed;
  left: 1rem;
  right: 1rem;
  bottom: 2rem;
  z-index: 9999;
  max-width: 760px;
  margin: 0 auto;
  background: #1a1a1a;
  color: #fff;
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.35);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  font-size: 1.6rem;
  line-height: 1.5;
}

.cookie-banner__text {
  flex: 1 1 280px;
  margin: 0;
}

.cookie-banner__actions {
  display: flex;
  gap: 0.8rem;
  flex-shrink: 0;
}

.cookie-banner__btn {
  padding: 0.4rem 0.1rem;
  font-size: 0.85rem;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
