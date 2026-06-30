<script setup>
import { ref } from 'vue'
import { useModalEscape } from '@/composables/useModalEscape'

const visible = ref(false)

function show() {
  visible.value = true
}

function close() {
  visible.value = false
}

useModalEscape(() => visible.value, close)

defineExpose({ show })
</script>

<template>
  <transition name="fade">
    <div
      v-if="visible"
      class="privacy-overlay"
      role="dialog"
      aria-modal="true"
      :aria-label="$t('privacy.title')"
      @click.self="close"
    >
      <div class="privacy-modal">
        <button class="modal-close" @click="close" :aria-label="$t('privacy.close')">
          <img
            src="../assets/icons/icon-close.svg"
            :alt="$t('work.projects.close')"
            :title="$t('work.projects.close')"
          />
        </button>

        <h2 class="privacy-modal__title">{{ $t('privacy.title') }}</h2>

        <p>{{ $t('privacy.intro') }}</p>

        <h3>{{ $t('privacy.analyticsTitle') }}</h3>
        <p>{{ $t('privacy.analyticsText') }}</p>

        <h3>{{ $t('privacy.fontsTitle') }}</h3>
        <p>{{ $t('privacy.fontsText') }}</p>

        <h3>{{ $t('privacy.searchConsoleTitle') }}</h3>
        <p>{{ $t('privacy.searchConsoleText') }}</p>

        <h3>{{ $t('privacy.contactTitle') }}</h3>
        <p>
          {{ $t('privacy.contactText') }}
          <a href="mailto:mustafa.azmi.khalil@gmail.com">mustafa.azmi.khalil@gmail.com</a>
        </p>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.privacy-overlay {
  position: fixed;
  inset: 0;
  z-index: 10000;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.privacy-modal {
  position: relative;
  background: #1a1a1a;
  color: #fff;
  border-radius: 14px;
  padding: 2rem;
  max-width: 540px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.45);
  line-height: 1.6;
}

.privacy-modal__title {
  margin: 0 0 1rem;
}

.privacy-modal h3 {
  margin: 1.75rem 0 0.4rem;
}

.privacy-modal p {
  margin: 0;
  opacity: 0.9;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
