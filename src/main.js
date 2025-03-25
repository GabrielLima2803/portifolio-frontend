import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n';


import App from './App.vue'
import router from './router'

import '@/plugins/axios.js'

import '@mdi/font/css/materialdesignicons.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// import '../particles.js/particles'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import enMessages from './locales/en.json';
import ptMessages from './locales/pt.json';

const vuetify = createVuetify({
  components,
  directives,
})
const messages = {
  en: enMessages,
  br: ptMessages,
};
const i18n = createI18n({
  legacy: false,  
  locale: 'br',  
  messages,       
});

const app = createApp(App)

app.use(vuetify)
app.use(i18n);
app.use(createPinia())
app.use(router)

app.mount('#app')
