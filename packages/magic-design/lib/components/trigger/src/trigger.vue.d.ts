import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    popperOffset: {
        type: PropType<number[]>;
        default: () => any[];
    };
    visible: BooleanConstructor;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:visible"[], "update:visible", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    popperOffset?: unknown;
    visible?: unknown;
} & {
    popperOffset: number[];
    visible: boolean;
} & {}> & {
    "onUpdate:visible"?: (...args: any[]) => any;
}, {
    popperOffset: number[];
    visible: boolean;
}>;
export default _default;
