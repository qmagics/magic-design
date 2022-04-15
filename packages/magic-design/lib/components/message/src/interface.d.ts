import type { App, VNode } from "vue";
export declare type MessageType = 'info' | 'warning' | 'danger' | 'success';
export interface MessageOptions {
    content: string;
    id?: string;
    icon?: string;
    closable?: boolean;
    duration?: number;
    type: MessageType;
    offset?: number;
    onClose?: (vm: VNode) => void;
}
export declare type MessageStateFn = (options: MessageOptions | string) => {
    close: () => void;
};
export interface MessageMethod {
    (msg: MessageOptions | string): {
        close: () => void;
    };
    info: MessageStateFn;
    warning: MessageStateFn;
    danger: MessageStateFn;
    success: MessageStateFn;
    closeAll: () => void;
    install: (app: App) => void;
}
