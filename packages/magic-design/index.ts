import { App, Plugin } from 'vue';
import components from '@magic-design/components';
export * from '@magic-design/components/export';

const install = (app: App): void => {
    components.forEach(component => {
        app.component(component.name, component);
    })
}

export default {
    install
} as Plugin