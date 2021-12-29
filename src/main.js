import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n/index'

import enLocales from "./locales/en.json";
import frLocales from "./locales/fr.json";
const messages = {
    en: enLocales,
    fr: frLocales,
}
const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages,
})
const app = createApp(App)
app.use(router)
app.use(i18n)

app.mount('#app')