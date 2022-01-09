export declare type SelectModelValue = string | number | boolean;
export declare type OptionValue = string | number | boolean;
export declare type OptionLabel = string | number;
export interface SelectProvideContext {
    props: {
        modelValue: SelectModelValue;
        multiple: boolean;
    };
    onOptionSelect: (proxy: OptionProxy, bl: boolean) => void;
    onOptionCreate: (proxy: OptionProxy) => void;
}
export interface OptionProxy {
    value: OptionValue;
    cLabel: OptionLabel;
}
