<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
    validator(p) {
      return (
        typeof p.title === 'string' && typeof p.image === 'string' && typeof p.category === 'string'
      )
    },
  },
})

const emit = defineEmits(['open'])
</script>

<template>
  <li class="folio-list__item column">
    <a class="folio-list__item-link" href="#" role="button" @click.prevent="emit('open', project)"
      @keydown.enter.prevent="emit('open', project)" @keydown.space.prevent="emit('open', project)"
      :aria-label="`Open project ${project.title}`">
      <div class="folio-list__item-pic">
        <img :src="project.image" :alt="project.title" loading="lazy" />
      </div>

      <div class="folio-list__item-text">
        <div class="folio-list__item-cat">{{ project.category }}</div>
        <div class="folio-list__item-title">{{ project.title }}</div>
      </div>
    </a>

    <a class="folio-list__proj-link" :href="project.link" target="_blank" title="Project link">
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
          fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
      </svg>
      <slot />
    </a>
  </li>
</template>
