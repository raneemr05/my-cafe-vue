import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import { makeServer } from './mocks';

const app = createApp(App);

const pinia = createPinia();

// Initilising Mirage Server - for mock API
makeServer();

// Use vue router
app.use(router);
// Use pinia for shared state management
app.use(pinia);
app.mount('#app');
