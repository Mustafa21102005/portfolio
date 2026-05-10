<script setup>
import CertificateItem from './CertificateItem.vue'
import { certificates } from '@/data/certificates'
</script>

<template>
  <section id="certificates" class="s-works">
    <div class="row">
      <div class="column lg-12">
        <h2 class="text-pretitle">{{ $t('certificates.title') }}</h2>
        <p class="h1 m_b_85">{{ $t('certificates.description') }}</p>

        <ul class="cert-list">
          <CertificateItem
            v-for="certificate in certificates"
            :key="certificate.id"
            :certificate="certificate"
          />
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cert-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.m_b_85 {
  margin-bottom: 85px;
}
</style>
