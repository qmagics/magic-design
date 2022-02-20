import { PropType, VNode } from "vue";
import { TableColumnRenderFn } from "./interface";
declare const _default: import("vue").DefineComponent<{
    render: {
        type: PropType<TableColumnRenderFn>;
    };
    renderContext: {
        type: any;
    };
}, ((proxy: any) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>) | ((proxy: any) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[]), unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    render?: unknown;
    renderContext?: unknown;
} & {
    renderContext: any;
} & {
    render?: TableColumnRenderFn;
}>, {
    renderContext: any;
}>;
export default _default;
