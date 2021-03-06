import { ColumnRenderContext } from "./interface";
declare const _default: import("vue").DefineComponent<{
    label: (StringConstructor | NumberConstructor)[];
    prop: (StringConstructor | NumberConstructor)[];
    width: NumberConstructor[];
}, {
    render: (context: ColumnRenderContext) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    label?: unknown;
    prop?: unknown;
    width?: unknown;
} & {} & {
    label?: string | number;
    prop?: string | number;
    width?: number;
}>, {}>;
export default _default;
