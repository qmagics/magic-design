import { PropType, VNode } from "vue";
import { ColumnRenderContext, TableColumnRenderFn } from "./interface";
declare const _default: import("vue").DefineComponent<{
    render: {
        type: PropType<TableColumnRenderFn>;
    };
    renderContext: {
        type: PropType<ColumnRenderContext>;
    };
}, ((proxy: any) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>) | ((proxy: any) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[]), unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    render?: unknown;
    renderContext?: unknown;
} & {} & {
    render?: TableColumnRenderFn;
    renderContext?: ColumnRenderContext;
}>, {}>;
export default _default;
