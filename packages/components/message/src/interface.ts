import type { App } from "vue";

export type MessageType = 'info' | 'warning' | 'danger' | 'success';

export interface MessageOptions {
    content: string;
    id?: string;
    icon?: string;
    closable?: boolean;
    duration?: number;
    type: MessageType;
    onClose?: () => void;
}

export interface MessageMethod {
    (msg: MessageOptions | string): void;
    install: (app: App) => void;
}