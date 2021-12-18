import { App } from 'vue';
export interface Plugin {
    install: (app: App) => void;
}
declare const _default: Plugin;
export default _default;
