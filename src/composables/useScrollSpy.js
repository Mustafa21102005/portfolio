import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollSpy(sectionIds = ['intro','about','works','contact'], offset = 0.4) {
  const activeSection = ref(sectionIds[0])
  let observer = null

  onMounted(() => {
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean)

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) activeSection.value = entry.target.id
        })
      },
      {
        root: null,
        rootMargin: `${offset * -100}% 0px ${offset * -100}% 0px`,
        threshold: 0
      }
    )

    sections.forEach(section => observer.observe(section))
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })

  return { activeSection }
}
