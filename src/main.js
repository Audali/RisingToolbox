import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n/index'
import { VueCookieNext } from "vue-cookie-next";

// Import locales
import enLocales from "./locales/en.json";
import frLocales from "./locales/fr.json";
const messages = {
    en: enLocales,
    fr: frLocales,
}

const i18n = createI18n({
    locale: 'en', // Set default language to english
    fallbackLocale: 'en',
    messages,
})
const app = createApp(App)
app.use(router)
app.use(i18n)
app.use(VueCookieNext)
// app.use(VueCookies, {
//     expireTimes: "2m",
//     path: "/",
//     domain: "",
//     secure: true,
//     sameSite: "None"
// });

app.mount('#app')
VueCookieNext.config({ expire: '2m' })