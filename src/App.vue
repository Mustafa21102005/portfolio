<script setup>
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
import AppFooter from './components/layout/AppFooter.vue'
import AppHeader from './components/layout/AppHeader.vue'
import ProjectSection from './components/ProjectsSection.vue'
import IntroSection from './components/IntroSection.vue'
import LanguageSwitcherFab from './components/LanguageSwitcherFab.vue'
</script>

<template>
  <div class="s-pagewrap">
    <AppHeader />

    <main>
      <IntroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </main>

    <LanguageSwitcherFab />

    <AppFooter />
  </div>
</template>
