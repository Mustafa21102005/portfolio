import { ref, watch, onMounted, onUnmounted } from 'vue'

export function useMobileMenu(maxWidth = 800) {
  const isOpen = ref(false)

  // Toggle body class
  watch(isOpen, (open) => {
    document.body.classList.toggle('menu-is-open', open)
  })

  const toggle = () => (isOpen.value = !isOpen.value)
  const close = () => {
    if (window.innerWidth <= maxWidth) isOpen.value = false
  }

  // Close on ESC key
  const handleEsc = (e) => {
    if (e.key === 'Escape') close()
  }

  onMounted(() => document.addEventListener('keydown', handleEsc))
  onUnmounted(() => document.removeEventListener('keydown', handleEsc))

  return { isOpen, toggle, close }
}
