import { PropType } from "vue";
export declare type SpaceSize = 'mini' | 'small' | 'medium' | 'large' | number | [number, number];
declare const _default: import("vue").DefineComponent<{
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    align: {
        type: PropType<"start" | "end" | "center" | "baseline">;
        default: string;
    };
    size: {
        type: PropType<SpaceSize>;
        default: string;
    };
    wrap: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> | {
    [name: string]: unknown;
    $stable?: boolean;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    direction?: unknown;
    align?: unknown;
    size?: unknown;
    wrap?: unknown;
} & {
    direction: "horizontal" | "vertical";
    align: "start" | "end" | "center" | "baseline";
    size: SpaceSize;
    wrap: boolean;
} & {}>, {
    direction: "horizontal" | "vertical";
    align: "start" | "end" | "center" | "baseline";
    size: SpaceSize;
    wrap: boolean;
}>;
export default _default;
