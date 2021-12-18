import { App } from 'vue';
import Button from '@magic-design/button';
import Icon from '@magic-design/icon';

console.log("v")

const components = [
    Button,
    Icon,
];

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