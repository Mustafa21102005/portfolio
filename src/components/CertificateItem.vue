<script setup>
defineProps({
  certificate: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <li class="cert-item m_b_30">
    <div class="cert-item__icon">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    </div>

    <div class="cert-item__info">
      <span class="cert-item__name">{{ $t(`certificates.${certificate.key}.name`) }}</span>
      <span class="cert-item__sub">
        {{ $t(`certificates.${certificate.key}.issuer`) }} ·
        {{ $t(`certificates.${certificate.key}.date`) }}
      </span>
    </div>

    <a class="cert-item__link" :href="certificate.verify" target="_blank" rel="noopener noreferrer">
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        style="display: inline; margin-right: 4px; vertical-align: middle"
      >
        <path d="M7 17L17 7" />
        <path d="M7 7h10v10" />
      </svg>
      {{ $t('certificates.verify') }}
    </a>
  </li>
</template>

<style scoped>
.cert-item {
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 1.6rem;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  margin-bottom: 1rem;
}

.cert-item__icon {
  width: 44px;
  height: 44px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--color-text-light);
}

.cert-item__info {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}

.cert-item__name {
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--color-white);
}

.cert-item__sub {
  font-size: 1.3rem;
  color: var(--color-text-light);
}

.cert-item__link {
  font-size: 1.3rem;
  color: var(--color-1);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  transition: opacity 0.2s ease;
}

.cert-item__link:hover {
  opacity: 0.7;
}

.m_b_30 {
  margin-bottom: 30px;
}

html[dir='rtl'] .cert-item__link svg {
  transform: scaleX(-1);
}
</style>
