import './assets/tailwind.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
    unstyled: false,
    theme: {
       preset: Aura,
       options: {
          darkModeSelector: ".tw-dark",
       },
    },
 });

app.mount('#app')
