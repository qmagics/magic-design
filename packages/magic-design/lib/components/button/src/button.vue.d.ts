import { PropType, Component } from "vue";
declare type ButtonNativeType = "button" | "submit" | "reset";
declare const _default: import("vue").DefineComponent<{
    loading: BooleanConstructor;
    icon: {
        type: PropType<string | Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    nativeType: {
        type: PropType<ButtonNativeType>;
        default: string;
    };
    state: {
        type: StringConstructor;
        default: string;
    };
    disabled: BooleanConstructor;
    autofocus: BooleanConstructor;
}, {
    handleClick: (e: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (e: MouseEvent) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    loading?: unknown;
    icon?: unknown;
    size?: unknown;
    type?: unknown;
    nativeType?: unknown;
    state?: unknown;
    disabled?: unknown;
    autofocus?: unknown;
} & {
    loading: boolean;
    icon: string;
    size: string;
    type: string;
    nativeType: ButtonNativeType;
    state: string;
    disabled: boolean;
    autofocus: boolean;
} & {}> & {
    onClick?: (e: MouseEvent) => any;
}, {
    loading: boolean;
    icon: string;
    size: string;
    type: string;
    nativeType: ButtonNativeType;
    state: string;
    disabled: boolean;
    autofocus: boolean;
}>;
export default _default;
