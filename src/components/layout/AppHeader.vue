<script setup>
import { useScrollSpy } from '@/composables/useScrollSpy'
import { useMobileMenu } from '@/composables/useMobileMenu'

const { activeSection } = useScrollSpy()
const { isOpen: mobileMenuOpen, toggle: toggleMobileMenu, close: closeMobileMenu } = useMobileMenu()
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
      <span class="mobile-home-link"><a href="#top">Mustafa.</a></span>
      <a class="mobile-menu-toggle" :class="{ 'is-clicked': mobileMenuOpen }" @click="toggleMobileMenu"
        aria-controls="main-nav" href="#0">
        <span>Menu</span>
      </a>
    </div>

    <div class="row wide main-nav-wrap">
      <nav class="column lg-12 main-nav">
        <ul>
          <li><a href="#top" class="home-link">Mustafa.</a></li>

          <li :class="{ current: activeSection === 'intro' }">
            <a href="#intro" @click="closeMobileMenu">Intro</a>
          </li>

          <li :class="{ current: activeSection === 'about' }">
            <a href="#about" @click="closeMobileMenu">About</a>
          </li>

          <li :class="{ current: activeSection === 'works' }">
            <a href="#works" @click="closeMobileMenu">Works</a>
          </li>

          <li :class="{ current: activeSection === 'contact' }">
            <a href="#contact" @click="closeMobileMenu">Say Hello</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
