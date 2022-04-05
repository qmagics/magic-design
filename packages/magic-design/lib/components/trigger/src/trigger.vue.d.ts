import { PropType, Ref } from "vue";
declare const _default: import("vue").DefineComponent<{
    popperOffset: {
        type: PropType<number[]>;
        default: () => any[];
    };
    visible: BooleanConstructor;
}, {
    contentVisible: any;
    triggerRef: Ref<HTMLElement>;
    onTriggerClick: () => void;
    contentStyle: {
        left: string;
        top: string;
        width: string;
    };
    clickoutsideOptions: {
        args: import("vue").ComputedRef<HTMLElement[]>;
        handler: () => void;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:visible"[], "update:visible", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
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
