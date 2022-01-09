import { PropType } from "vue";
import { OptionValue, OptionLabel } from "./interface";
declare const _default: import("vue").DefineComponent<{
    value: {
        type: PropType<OptionValue>;
    };
    label: PropType<OptionLabel>;
}, {
    isActive: import("vue").ComputedRef<boolean>;
    handleClick: () => void;
    cLabel: import("vue").ComputedRef<OptionLabel>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    value?: unknown;
    label?: unknown;
} & {} & {
    value?: OptionValue;
    label?: OptionLabel;
}>, {}>;
export default _default;
