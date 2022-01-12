import { PropType } from "vue";
declare type TagState = 'secondary' | 'primary' | 'success' | 'warning' | 'danger';
declare type TagSize = 'mini' | 'small' | 'medium' | 'large';
declare const _default: import("vue").DefineComponent<{
    size: {
        type: PropType<TagSize>;
        default: string;
    };
    state: {
        type: PropType<TagState>;
        default: string;
    };
    checked: {
        type: BooleanConstructor;
        default: boolean;
    };
    checkable: BooleanConstructor;
}, {
    onClick: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:checked" | "checked")[], "update:checked" | "checked", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    size?: unknown;
    state?: unknown;
    checked?: unknown;
    checkable?: unknown;
} & {
    checked: boolean;
    size: TagSize;
    state: TagState;
    checkable: boolean;
} & {}> & {
    "onUpdate:checked"?: (...args: any[]) => any;
    onChecked?: (...args: any[]) => any;
}, {
    checked: boolean;
    size: TagSize;
    state: TagState;
    checkable: boolean;
}>;
export default _default;
