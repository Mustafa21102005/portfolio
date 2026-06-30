<script setup>
import { onMounted, ref, provide } from 'vue'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
import AppFooter from './components/layout/AppFooter.vue'
import AppHeader from './components/layout/AppHeader.vue'
import ProjectSection from './components/ProjectsSection.vue'
import IntroSection from './components/IntroSection.vue'
import LanguageSwitcherFab from './components/LanguageSwitcherFab.vue'
import CertificatesSection from './components/CertificatesSection.vue'
import CookieConsent from './components/CookieConsent.vue'
import PrivacyPolicyModal from './components/PrivacyPolicyModal.vue'
import { initClarityFromStoredConsent } from './composables/useClarity'

const cookieBanner = ref(null)
const privacyModal = ref(null)
provide('cookieBanner', cookieBanner)
provide('privacyModal', privacyModal)

onMounted(() => {
  document.dispatchEvent(new Event('custom-render-trigger'))
  initClarityFromStoredConsent()
})
</script>

<template>
  <div class="s-pagewrap">
    <AppHeader />

    <main>
      <IntroSection />
      <AboutSection />
      <ProjectSection />
      <CertificatesSection />
      <ContactSection />
    </main>

    <LanguageSwitcherFab />

    <AppFooter />

    <CookieConsent ref="cookieBanner" />
    <PrivacyPolicyModal ref="privacyModal" />
  </div>
</template>
