import { PropType } from "vue";
declare type LinkState = 'secondary' | 'primary' | 'warning' | 'danger' | 'success';
declare const _default: import("vue").DefineComponent<{
    underline: {
        type: PropType<boolean | "hover">;
        default: string;
    };
    state: {
        type: PropType<LinkState>;
        default: string;
    };
    disabled: BooleanConstructor;
    href: StringConstructor;
    target: StringConstructor;
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    underline?: unknown;
    state?: unknown;
    disabled?: unknown;
    href?: unknown;
    target?: unknown;
} & {
    underline: boolean | "hover";
    state: LinkState;
    disabled: boolean;
} & {
    href?: string;
    target?: string;
}>, {
    underline: boolean | "hover";
    state: LinkState;
    disabled: boolean;
}>;
export default _default;
