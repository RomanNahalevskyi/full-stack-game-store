import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

//This code is required for tailwind css and Naive ui to work together
const meta = document.createElement('meta');
meta.name = 'naive-ui-style';
document.head.appendChild(meta);

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
