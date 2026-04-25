import { createApp, watch } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import '@/assets/css/styles.css'
import english from './langs/english'
import arabic from './langs/arabic'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: english.messages,
    ar: arabic.messages,
  },
})

const app = createApp(App)

app.use(i18n)

app.mount('#app')

watch(
  () => i18n.global.locale.value,
  (newLang) => {
    document.documentElement.lang = newLang
    document.title = i18n.global.t('site.title')
  },
  { immediate: true },
)
