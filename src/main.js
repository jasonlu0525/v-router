import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueLoading from 'vue-loading-overlay';
import App from './App.vue';
import router from './router';

import 'vue-loading-overlay/dist/vue-loading.css';

const app = createApp(App);

app.use(VueAxios, axios);
app.use(router);
app.provide('axios', app.config.globalProperties.axios);

app.use(VueLoading);

app.mount('#app');
