export type SelectModelValue = string | number | boolean;
export type OptionValue = string | number | boolean;
export type OptionLabel = string | number;

export interface SelectProvideContext {
    props: {
        modelValue: SelectModelValue,
        multiple: boolean
    },
    onOptionSelect: (proxy: OptionProxy, bl: boolean) => void,
    onOptionCreate: (proxy: OptionProxy) => void
}

export interface OptionProxy {
    value: OptionValue,
    cLabel: OptionLabel
}