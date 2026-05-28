<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
    validator(p) {
      return typeof p.key === 'string' && typeof p.image === 'string' && typeof p.link === 'string'
    },
  },
})

const emit = defineEmits(['open'])
</script>

<template>
  <li class="folio-list__item column">
    <a
      class="folio-list__item-link"
      href="#"
      role="button"
      @click.prevent="emit('open', project)"
      @keydown.enter.prevent="emit('open', project)"
      @keydown.space.prevent="emit('open', project)"
      :aria-label="$t(`work.projects.${project.key}.title`)"
    >
      <div class="folio-list__item-pic">
        <img :src="project.image" :alt="$t(`work.projects.${project.key}.title`)" loading="lazy" />
      </div>

      <div class="folio-list__item-text">
        <div class="folio-list__item-cat">{{ $t(`work.projects.${project.key}.category`) }}</div>
        <div class="folio-list__item-title">{{ $t(`work.projects.${project.key}.title`) }}</div>
      </div>
    </a>

    <a
      class="folio-list__proj-demo"
      :href="project.demo"
      target="_blank"
      :title="$t('work.projects.demo')"
      :aria-label="$t('work.projects.demo')"
      v-if="project.demo"
      rel="noopener noreferrer"
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
          fill="currentColor"
          fill-rule="evenodd"
          clip-rule="evenodd"
        ></path>
      </svg>
    </a>

    <a
      class="folio-list__proj-link"
      :href="project.link"
      target="_blank"
      :title="$t('work.projects.link')"
      :aria-label="$t('work.projects.link')"
      v-if="project.link"
      rel="noopener noreferrer"
      :style="!project.demo && { insetInlineEnd: 'var(--vspace-0_5)' }"
    >
      <svg
        fill="#FFF"
        width="20px"
        height="20px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
      >
        <path
          d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"
        />
      </svg>
    </a>
  </li>
</template>
