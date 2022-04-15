import { PropType } from "vue";
import { MessageType } from './interface';
declare const _default: import("vue").DefineComponent<{
    id: {
        type: StringConstructor;
        default: string;
    };
    content: {
        type: StringConstructor;
        required: true;
    };
    type: {
        type: PropType<MessageType>;
        default: string;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    closable: BooleanConstructor;
    onClose: {
        type: PropType<() => void>;
    };
    offset: {
        type: NumberConstructor;
        default: number;
    };
}, {
    state: {
        visible: boolean;
    };
    classes: import("vue").ComputedRef<string[]>;
    styles: import("vue").ComputedRef<{
        top: string;
    }>;
    close: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    id?: unknown;
    content?: unknown;
    type?: unknown;
    duration?: unknown;
    closable?: unknown;
    onClose?: unknown;
    offset?: unknown;
} & {
    id: string;
    content: string;
    type: MessageType;
    duration: number;
    closable: boolean;
    offset: number;
} & {
    onClose?: () => void;
}>, {
    id: string;
    type: MessageType;
    duration: number;
    closable: boolean;
    offset: number;
}>;
export default _default;
