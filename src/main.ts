// imports
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { VueRecaptchaPlugin } from 'vue-recaptcha/head'

// router
import {router} from "./routes/router"

createApp(App)
    .use(VueRecaptchaPlugin, {
        v2SiteKey: import.meta.env.VITE_APP_RECAPTCHA_KEY
    })
    .use(router)
    .mount('#app')
