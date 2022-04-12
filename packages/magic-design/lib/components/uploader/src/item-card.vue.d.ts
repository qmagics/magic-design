import { PropType } from "vue";
import { FileItem, ListType } from "./interface";
declare const _default: import("vue").DefineComponent<{
    fileItem: {
        type: PropType<FileItem>;
    };
    listType: {
        type: PropType<ListType>;
        default: string;
    };
}, {
    removeFile: () => void;
    stateIconClass: import("vue").ComputedRef<any>;
    fileIconClass: import("vue").ComputedRef<"m-icon-file" | "m-icon-image">;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    fileItem?: unknown;
    listType?: unknown;
} & {
    listType: ListType;
} & {
    fileItem?: FileItem;
}>, {
    listType: ListType;
}>;
export default _default;
