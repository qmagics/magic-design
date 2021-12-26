declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor)[];
    };
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
} & {} & {
    modelValue?: string | number | boolean;
}> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
}, {}>;
export default _default;
