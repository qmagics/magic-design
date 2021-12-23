import { PropType } from "vue";
declare type InputSize = 'mini' | 'small' | 'medium' | 'large';
declare type InputNativeType = 'text' | 'password';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: PropType<InputSize>;
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
    type: {
        type: PropType<InputNativeType>;
        default: string;
    };
}, {
    handleInput: (e: Event) => void;
    handleChange: (e: Event) => void;
    handleClear: () => void;
    handleFocus: () => void;
    handleBlur: () => void;
    showClearBtn: import("vue").ComputedRef<string>;
    hasPrepend: import("vue").ComputedRef<import("vue").Slot>;
    hasAppend: import("vue").ComputedRef<import("vue").Slot>;
    hasSuffix: import("vue").ComputedRef<string | import("vue").Slot>;
    hasPrefix: import("vue").ComputedRef<import("vue").Slot>;
    UIState: {
        focused: boolean;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "clear" | "change" | "focus" | "blur")[], "update:modelValue" | "clear" | "change" | "focus" | "blur", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    size?: unknown;
    disabled?: unknown;
    readonly?: unknown;
    clearable?: unknown;
    placeholder?: unknown;
    type?: unknown;
} & {
    modelValue: string;
    size: InputSize;
    disabled: boolean;
    readonly: boolean;
    clearable: boolean;
    placeholder: string;
    type: InputNativeType;
} & {}> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onClear?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
    onFocus?: (...args: any[]) => any;
    onBlur?: (...args: any[]) => any;
}, {
    modelValue: string;
    size: InputSize;
    disabled: boolean;
    readonly: boolean;
    clearable: boolean;
    placeholder: string;
    type: InputNativeType;
}>;
export default _default;
