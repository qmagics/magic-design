import { PropType } from "vue";
import { FileItem, ListType } from "./interface";
declare const _default: import("vue").DefineComponent<{
    fileItems: {
        type: PropType<FileItem[]>;
        default: () => any[];
    };
    listType: {
        type: PropType<ListType>;
        default: string;
    };
}, {
    ItemComp: import("vue").ComputedRef<any>;
    chooseFile: () => void;
    hasUploadBtn: import("vue").ComputedRef<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    fileItems?: unknown;
    listType?: unknown;
} & {
    fileItems: FileItem[];
    listType: ListType;
} & {}>, {
    fileItems: FileItem[];
    listType: ListType;
}>;
export default _default;
