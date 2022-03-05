declare const _default: import("vue").DefineComponent<{
    action: {
        required: true;
        type: StringConstructor;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    accept: {
        type: StringConstructor;
        default: string;
    };
}, {
    inputRef: import("vue").Ref<HTMLInputElement>;
    handleTriggerClick: () => void;
    handleInputChange: (e: DragEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    action?: unknown;
    disabled?: unknown;
    multiple?: unknown;
    accept?: unknown;
} & {
    action: string;
    disabled: boolean;
    multiple: boolean;
    accept: string;
} & {}>, {
    disabled: boolean;
    multiple: boolean;
    accept: string;
}>;
export default _default;
