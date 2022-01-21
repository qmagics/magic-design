import { PropType } from "vue";
import { TableColumnRaw } from "../interface";
declare const _default: import("vue").DefineComponent<{
    data: {
        type: PropType<any[]>;
        default: () => any[];
    };
    columns: PropType<TableColumnRaw[]>;
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    data?: unknown;
    columns?: unknown;
} & {
    data: any[];
} & {
    columns?: TableColumnRaw[];
}>, {
    data: any[];
}>;
export default _default;
