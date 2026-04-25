<script setup>
import { useScrollSpy } from '@/composables/useScrollSpy'
import { useMobileMenu } from '@/composables/useMobileMenu'
import { useI18n } from 'vue-i18n'

const { activeSection } = useScrollSpy()
const { isOpen: mobileMenuOpen, toggle: toggleMobileMenu, close: closeMobileMenu } = useMobileMenu()

const { t } = useI18n({
  useScope: 'global',
})
</script>

<template>
  <div class="circles">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>

  <header class="s-header">
    <div class="header-mobile">
      <span class="mobile-home-link">
        <a href="#top">{{ t('header.title') }}</a>
      </span>
      <a
        class="mobile-menu-toggle"
        :class="{ 'is-clicked': mobileMenuOpen }"
        @click="toggleMobileMenu"
        aria-controls="main-nav"
        href="#0"
      >
        <span>{{ t('header.menu') }}</span>
      </a>
    </div>

    <div class="row wide main-nav-wrap">
      <nav class="column lg-12 main-nav">
        <ul>
          <li>
            <a href="#top">{{ t('header.title') }}</a>
          </li>

          <li :class="{ current: activeSection === 'intro' }">
            <a href="#intro" @click="closeMobileMenu">{{ t('header.intro') }}</a>
          </li>

          <li :class="{ current: activeSection === 'about' }">
            <a href="#about" @click="closeMobileMenu">{{ t('header.about') }}</a>
          </li>

          <li :class="{ current: activeSection === 'works' }">
            <a href="#works" @click="closeMobileMenu">{{ t('header.works') }}</a>
          </li>

          <li :class="{ current: activeSection === 'contact' }">
            <a href="#contact" @click="closeMobileMenu">{{ t('header.contact') }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
