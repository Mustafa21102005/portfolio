<script setup>
import { useModalEscape } from '@/composables/useModalEscape'

const props = defineProps({
  project: Object,
  open: Boolean,
})

const emit = defineEmits(['close'])

useModalEscape(
  () => props.open,
  () => emit('close'),
)
</script>

<template>
  <Transition name="modal">
    <div
      v-if="open"
      class="modal-overlay"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="`modal-title-${project?.key}`"
      @click.self="emit('close')"
    >
      <button class="modal-close" @click="emit('close')" aria-label="Close modal">
        <img
          src="../assets/icons/icon-close.svg"
          :alt="$t('work.projects.close')"
          :title="$t('work.projects.close')"
        />
      </button>

      <div class="modal-popup">
        <img :src="project.image" :alt="$t(`work.projects.${project.key}.title`)" />

        <div class="modal-popup__desc">
          <h5 :id="`modal-title-${project.key}`">
            {{ $t(`work.projects.${project.key}.title`) }}
          </h5>
          <p>{{ $t(`work.projects.${project.key}.description`) }}</p>

          <ul class="modal-popup__cat">
            <li v-for="tag in $tm(`work.projects.${project.key}.tags`)" :key="tag">{{ tag }}</li>
          </ul>
        </div>

        <div class="modal-popup__actions">
          <a
            :href="project.link"
            class="modal-popup__details--link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ $t('work.projects.link') }}
          </a>
          <a
            v-if="project.demo"
            :href="project.demo"
            class="modal-popup__details--demo"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ $t('work.projects.demo') }}
          </a>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-close {
  inset-block-start: 4rem;
  inset-inline-end: 5rem;
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

.modal-popup__actions {
  display: flex;
  gap: 1rem;
  align-items: center;
}
</style>
