import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';

const app = createApp(App);

const pinia = createPinia();

// Use vue router
app.use(router);
// Use pinia for shared state management
app.use(pinia);
app.mount('#app');
