import { Plugin } from 'vue';
export type SFCWithInstall<T> = T & Plugin;

export const withInstall = <T>(main: T) => {
    (main as SFCWithInstall<T>).install = (app): void => {
        app.component((main as any).name, main)
    }

    return main as SFCWithInstall<T>;
}