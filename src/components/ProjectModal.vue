<script setup>
import { watch, onUnmounted } from 'vue'

const props = defineProps({
  project: Object,
  open: Boolean,
})

const emit = defineEmits(['close'])

const handleEsc = (e) => {
  if (e.key === 'Escape') {
    emit('close')
  }
}

watch(
  () => props.open,
  (isOpen) => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', handleEsc)
    } else {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleEsc)
    }
  },
  { immediate: true },
)

onUnmounted(() => {
  document.removeEventListener('keydown', handleEsc)
})
</script>

<template>
  <Transition name="modal">
    <div v-if="open" class="modal-overlay" role="dialog" aria-modal="true"
      :aria-labelledby="`modal-title-${project.title}`" @click.self="emit('close')">
      <button class="modal-close" @click="emit('close')" aria-label="Close modal">
        <img src="../assets/icons/icon-close.svg" alt="Close" title="Close" />
      </button>

      <div class="modal-popup">
        <img :src="project.image" :alt="project.title" />

        <div class="modal-popup__desc">
          <h5 :id="`modal-title-${project.title}`">{{ project.title }}</h5>
          <p>{{ project.description }}</p>

          <ul class="modal-popup__cat">
            <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
          </ul>
        </div>

        <a :href="project.link" class="modal-popup__details" target="_blank" rel="noopener noreferrer">Project link</a>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-close {
  position: absolute;
  top: 4rem;
  right: 5rem;
  background: transparent;
  border: none;
  padding: 0;
}

.modal-close img {
  width: 24px;
  height: 24px;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.25s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-popup,
.modal-leave-active .modal-popup {
  transition:
    transform 0.25s ease,
    opacity 0.25s ease;
}

.modal-enter-from .modal-popup {
  transform: scale(0.96);
  opacity: 0;
}

.modal-leave-to .modal-popup {
  transform: scale(0.96);
  opacity: 0;
}
</style>
