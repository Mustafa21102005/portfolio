<script setup>
import { inject } from 'vue'

const year = new Date().getFullYear()
const cookieBanner = inject('cookieBanner')

function openCookieSettings() {
  cookieBanner?.value?.show()
}
</script>

<template>
  <footer class="s-footer">
    <div class="row">
      <div class="column ss-copyright">
        <span>{{ $t('footer.copyright') }} {{ year }}</span>
        <span>
          {{ $t('footer.design') }}
          <a href="https://www.styleshout.com" target="_blank" rel="noopener noreferrer">
            StyleShout
          </a>
        </span>
        <span>
          <button type="button" class="cookie-settings-link" @click="openCookieSettings">
            {{ $t('footer.cookieSettings') }}
          </button>
        </span>
      </div>

      <div class="ss-go-top">
        <a :title="$t('footer.backtotop')" href="#top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path
              d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"
            />
          </svg>
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.cookie-settings-link {
  background: none;
  border: none;
  padding: 0;
  color: #fff;
  opacity: 0.7;
  text-decoration: underline;
}

.cookie-settings-link:hover {
  opacity: 1;
}
</style>
