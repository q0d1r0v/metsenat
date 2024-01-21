// imports
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { VueRecaptchaPlugin } from "vue-recaptcha/head";
import { createPinia } from "pinia";

// router
import { router } from "./routes/router";

// pinia
const pinia = createPinia();

// create and mount app
createApp(App)
  .use(VueRecaptchaPlugin, {
    v2SiteKey: import.meta.env.VITE_APP_RECAPTCHA_KEY,
  })
  .use(router)
  .use(pinia)
  .mount("#app");
