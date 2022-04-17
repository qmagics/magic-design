import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    items: {
        type: PropType<any[]>;
        default: () => any[];
    };
    height: {
        type: NumberConstructor;
        required: true;
    };
    size: {
        type: NumberConstructor;
        required: true;
        default: number;
    };
    preloadCount: {
        type: NumberConstructor;
        default: number;
    };
}, {
    visibleItems: import("vue").ComputedRef<any[]>;
    styles: import("vue").ComputedRef<{
        height: string;
    }>;
    scrollbarStyle: import("vue").ComputedRef<{
        height: string;
    }>;
    contentStyle: import("vue").ComputedRef<{
        transform: string;
    }>;
    onScroll: () => void;
    listRef: import("vue").Ref<HTMLDivElement>;
    scrollbarRef: import("vue").Ref<HTMLDivElement>;
    contentRef: import("vue").Ref<HTMLDivElement>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    items?: unknown;
    height?: unknown;
    size?: unknown;
    preloadCount?: unknown;
} & {
    items: any[];
    height: number;
    size: number;
    preloadCount: number;
} & {}>, {
    items: any[];
    size: number;
    preloadCount: number;
}>;
export default _default;
