import { createApp } from 'vue';
import App from './App.vue';
import router from '@/routes';
import { store, key } from '@/store';
import "normalize.css";
import './styles/index.scss';

import MagicDesign from 'magic-design';
// import QUI from '../../lib/index.esm.js';
import 'theme-chalk/src/index.scss';

const app = createApp(App);
app.use(router);
app.use(store, key);
app.use(MagicDesign);
app.mount('#app');