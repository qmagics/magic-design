import { App } from 'vue';
import components from '@magic-design/components';

const install = (app: App): void => {
    components.forEach(component => {
        app.component(component.name, component);
    })
}

export interface Plugin {
    install: (app: App) => void;
}

export default {
    install
} as Plugin