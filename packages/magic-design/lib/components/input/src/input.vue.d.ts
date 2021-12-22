import { PropType } from "vue";
declare type ButtonSize = 'mini' | 'small' | 'medium' | 'large';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: PropType<ButtonSize>;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    size?: unknown;
    disabled?: unknown;
    readonly?: unknown;
    clearable?: unknown;
    placeholder?: unknown;
} & {
    modelValue: string;
    size: ButtonSize;
    disabled: boolean;
    readonly: boolean;
    clearable: boolean;
    placeholder: string;
} & {}>, {
    modelValue: string;
    size: ButtonSize;
    disabled: boolean;
    readonly: boolean;
    clearable: boolean;
    placeholder: string;
}>;
export default _default;
