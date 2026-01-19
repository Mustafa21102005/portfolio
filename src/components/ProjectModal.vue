<script setup>
import { watch, onUnmounted } from 'vue'

const props = defineProps({
  project: Object,
  open: Boolean,
})

const emit = defineEmits(['close'])

// ESC key handler
const handleEsc = (e) => {
  if (e.key === 'Escape') {
    emit('close') // parent must set open = false
  }
}

// Watch `open` and add/remove listener dynamically
watch(
  () => props.open,
  (isOpen) => {
    if (isOpen) {
      document.addEventListener('keydown', handleEsc)
    } else {
      document.removeEventListener('keydown', handleEsc)
    }
  },
  { immediate: true }, // <-- ensures watcher runs at mount
)

// Cleanup on unmount
onUnmounted(() => {
  document.removeEventListener('keydown', handleEsc)
})
</script>

<template>
  <div v-if="open" class="modal-overlay" @click.self="emit('close')">
    <button class="modal-close" @click="emit('close')">
      <img src="../assets/icons/icon-close.svg" alt="Close" />
    </button>

    <div class="modal-popup">
      <img :src="project.image" :alt="project.title" class="modal-popup__image" />

      <div class="modal-popup__desc">
        <h5>{{ project.title }}</h5>
        <p>{{ project.description }}</p>

        <ul class="modal-popup__cat">
          <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
        </ul>
      </div>

      <a :href="project.link" class="modal-popup__details" target="_blank"> Project link </a>
    </div>
  </div>
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

.modal-popup {
  max-width: 680px;
  background-color: white;
  font-size: calc(var(--text-size) * 0.9447);
  line-height: var(--vspace-0_875);
  color: rgba(0, 0, 0, 0.75);
  overflow-y: auto;
  position: relative;
  padding: 2rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 1);
}

.modal-close {
  position: absolute;
  top: 4rem;
  right: 5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}

.modal-close img {
  width: 24px;
  height: 24px;
}

.modal-popup__image {
  max-width: 100%;
  max-height: 60vh;
  object-fit: contain;
  margin-bottom: 1.5rem;
}

.modal-popup__desc {
  padding: 0 var(--vspace-1_25) var(--vspace-0_25);
}

.modal-popup__cat {
  list-style: none;
  margin-left: 0;
  font-size: var(--text-sm);
  line-height: var(--vspace-0_5);
  color: rgba(0, 0, 0, 0.6);
  padding-left: calc(0.875 * var(--space));
  position: relative;
}

.modal-popup__cat::before {
  content: '';
  display: block;
  height: calc(0.625 * var(--space));
  width: calc(0.625 * var(--space));
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-image: url(/src/assets/icons/icon-tag.svg);
  position: absolute;
  left: 0;
  top: -0.15em;
}

.modal-popup__cat li {
  display: inline;
  padding-left: 0;
}

.modal-popup__cat li::after {
  content: ', ';
}

.modal-popup__cat li:last-child::after {
  display: none;
}

.modal-popup__details {
  background-color: rgba(0, 0, 0, 0.3);
  font-size: var(--text-xs);
  line-height: var(--vspace-1_25);
  color: white;
  padding: 0 1.2rem;
  position: absolute;
  top: var(--vspace-1);
  left: var(--vspace-1);
}

.modal-popup__details:focus,
.modal-popup__details:hover {
  background-color: var(--color-body);
  color: white;
}

/* Responsive */
@media (max-width: 600px) {
  .modal-popup {
    padding: 1rem;
  }

  .modal-popup__image {
    max-height: 40vh;
  }
}
</style>
