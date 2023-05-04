import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createI18n, useI18n } from "vue-i18n";
import { defaultLocale, languages } from "./languages";
import "./assets/main.css";

const messages = Object.assign(languages);
const langFromLocalStorage = localStorage.getItem("lang");

const i18n = createI18n({
  legacy: false,
  locale: langFromLocalStorage || defaultLocale,
  fallbackLocale: "uz",
  messages,
});

const app = createApp(App);
app.use(router);
app.use(i18n);

app.mount("#app");
