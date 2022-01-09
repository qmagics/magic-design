import { PropType } from "vue";
import { SelectModelValue } from "./interface";
declare type SelectSize = 'mini' | 'small' | 'medium' | 'large';
declare const _default: import("vue").DefineComponent<{
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: PropType<SelectModelValue>;
    };
    multiple: BooleanConstructor;
    disabled: BooleanConstructor;
    size: {
        type: PropType<SelectSize>;
        default: string;
    };
}, {
    State: {
        dropdownVisible: boolean;
        optionsMap: Map<any, any>;
        hovered: boolean;
    };
    toggleDropdownVisible: () => void;
    displayLabel: import("vue").ComputedRef<import("./interface").OptionLabel>;
    showClearBtn: import("vue").ComputedRef<boolean>;
    onClear: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    placeholder?: unknown;
    modelValue?: unknown;
    multiple?: unknown;
    disabled?: unknown;
    size?: unknown;
} & {
    placeholder: string;
    multiple: boolean;
    disabled: boolean;
    size: SelectSize;
} & {
    modelValue?: SelectModelValue;
}> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
}, {
    placeholder: string;
    multiple: boolean;
    disabled: boolean;
    size: SelectSize;
}>;
export default _default;
