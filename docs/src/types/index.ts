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
    source?: string;
}