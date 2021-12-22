import { createApp } from 'vue';
import App from './App.vue';
import router from '@/routes';
import { store, key } from '@/store';
import "normalize.css";
import './styles/index.scss';

import MagicDesign from 'magic-design';
import '@magic-design/theme-chalk/src/index.scss';

import AppDemoBlock from '@/components/AppDemoBlock/index.vue';
import AppAnchorMenu from '@/components/AppAnchorMenu.vue';


const app = createApp(App);
app.use(router);
app.use(store, key);
app.use(MagicDesign);

// 全局组件
app.component(AppDemoBlock.name, AppDemoBlock);
app.component(AppAnchorMenu.name, AppAnchorMenu);

app.mount('#app');