import { watch, onUnmounted } from 'vue'

/**
 * Locks body scroll and closes the modal on Escape, while it's open.
 * @param {() => boolean} isOpenGetter - reactive getter returning whether the modal is open
 * @param {() => void} onClose - called when Escape is pressed
 */
export function useModalEscape(isOpenGetter, onClose) {
  const handleEsc = (e) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }

  watch(
    isOpenGetter,
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
    document.body.style.overflow = ''
  })
}
