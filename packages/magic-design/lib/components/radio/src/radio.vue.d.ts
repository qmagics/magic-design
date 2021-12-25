declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor)[];
    };
    value: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor)[];
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    name: StringConstructor;
}, {
    isChecked: import("vue").ComputedRef<boolean>;
    onChange: (e: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    value?: unknown;
    disabled?: unknown;
    name?: unknown;
} & {
    value: string | number | boolean;
    disabled: boolean;
} & {
    name?: string;
    modelValue?: string | number | boolean;
}> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
}, {
    value: string | number | boolean;
    disabled: boolean;
}>;
export default _default;
