<script setup>
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
import AppFooter from './components/layout/AppFooter.vue'
import AppHeader from './components/layout/AppHeader.vue'
import ProjectSection from './components/ProjectsSection.vue'
import IntroSection from './components/IntroSection.vue'
</script>

<template>
  <div class="s-pagewrap">
    <AppHeader />
    <main class="s-content">
      <IntroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </main>
    <AppFooter />
  </div>
</template>
