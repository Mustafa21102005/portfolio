<script setup>
import { ref } from 'vue'
import ProjectCard from './ProjectCard.vue'
import ProjectModal from './ProjectModal.vue'
import { projects } from '@/data/projects'

const selectedProject = ref(null)

const openModal = (project) => {
  selectedProject.value = project
}

const closeModal = () => {
  selectedProject.value = null
}
</script>

<template>
  <section id="works" class="s-works">
    <div class="row">
      <div class="column lg-12">
        <h2 class="text-pretitle">Recent Works</h2>
        <p class="h1">
          A curated set of projects demonstrating my experience across full stack web development.
        </p>

        <ul class="folio-list row block-lg-one-half block-stack-on-1000">
          <ProjectCard v-for="project in projects" :key="project.id" :project="project" @open="openModal" />
        </ul>
      </div>

      <ProjectModal :project="selectedProject" :open="!!selectedProject" @close="closeModal" />
    </div>
  </section>
</template>
