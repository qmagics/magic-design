import { App, Plugin } from 'vue';
import plugins from '@magic-design/components';
export * from '@magic-design/components/export';

const install = (app: App): void => {
    plugins.forEach(plugin => {
        app.use(plugin);
    })
}

export default {
    install
} as Plugin