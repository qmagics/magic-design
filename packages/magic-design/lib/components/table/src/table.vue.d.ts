import { PropType } from "vue";
import { TableColumnRaw, TableSize } from "./interface";
declare const _default: import("vue").DefineComponent<{
    data: {
        type: PropType<any[]>;
        default: () => any[];
    };
    columns: PropType<TableColumnRaw[]>;
    size: {
        type: PropType<TableSize>;
        default: string;
    };
    height: {
        type: NumberConstructor;
    };
}, {
    headerWrapperRef: import("vue").Ref<any>;
    onBodyWrapperScroll: (e: any) => void;
    style: {
        height: string;
    };
    headerWrapperStyle: {
        height: string;
    };
    bodyWrapperStyle: {
        height: string;
    };
    dataColumns: import("vue").Ref<{
        label: string;
        prop: string | number;
        width: string | number;
        render?: import("./interface").TableColumnRenderFn;
        align?: "left" | "right" | "center";
    }[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, any[], any, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    data?: unknown;
    columns?: unknown;
    size?: unknown;
    height?: unknown;
} & {
    data: any[];
    size: TableSize;
} & {
    height?: number;
    columns?: TableColumnRaw[];
}> & {
    [x: string & `on${any}`]: (...args: any[]) => any;
}, {
    data: any[];
    size: TableSize;
}>;
export default _default;
