import { PropType } from "vue";
import { TableColumnRaw } from "./interface";
declare const _default: import("vue").DefineComponent<{
    data: {
        type: PropType<any[]>;
        default: () => any[];
    };
    columns: PropType<TableColumnRaw[]>;
}, {
    dataColumns: import("vue").Ref<{
        label: string;
        prop: string | number;
        width: string | number;
    }[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, any[], any, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    data?: unknown;
    columns?: unknown;
} & {
    data: any[];
} & {
    columns?: TableColumnRaw[];
}> & {
    [x: string & `on${any}`]: (...args: any[]) => any;
}, {
    data: any[];
}>;
export default _default;
