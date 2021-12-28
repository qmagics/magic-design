import { PropType } from "vue";
declare type ModelValueType = (string | number | boolean)[];
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<ModelValueType>;
    };
    disabled: BooleanConstructor;
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    disabled?: unknown;
} & {
    disabled: boolean;
} & {
    modelValue?: ModelValueType;
}> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
}, {
    disabled: boolean;
}>;
export default _default;
