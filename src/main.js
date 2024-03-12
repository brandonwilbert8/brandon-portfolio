import { createApp } from 'vue';
import './index.css';
import App from './App.vue';
import VTypical from 'vue-typical';
import router from './router';

const app = createApp(App);

app.use(router);

app.mount('#app');

app.component('v-typical', VTypical);
