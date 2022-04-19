import { DefineComponent } from "vue";

export interface MenuItemRaw {
    type: "menu" | "group";
    label: string;
    icon?: string;
    path?: string;
    children?: MenuItemRaw[]
}

export interface DemoItemRaw {
    title: string;
    description?: string;
    id: string;
    component: DefineComponent;
    source?: Promise<any> | string;
}
export interface DemoItem extends DemoItemRaw {
    source: string;
}

export interface PageConfig {
    demos: DemoItemRaw[],
    name?: string,
    docs: Record<string, string>
}

export interface ResolvedPageConfig extends PageConfig {
    demos: DemoItem[]
}

export interface UsePageConfigOptions {
    name?: string,
    demePageGlob: Record<string, {
        [key: string]: any;
    }>,
    sourceCodeMap: Record<string, string>
}
