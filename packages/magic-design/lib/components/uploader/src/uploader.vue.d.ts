import { PropType, Ref } from "vue";
import { FileItem, UploadRequest, ListType } from "./interface";
declare const _default: import("vue").DefineComponent<{
    action: {
        required: true;
        type: StringConstructor;
    };
    fileList: {
        type: PropType<FileItem[]>;
        default: () => any[];
    };
    listType: {
        type: PropType<ListType>;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    accept: {
        type: StringConstructor;
        default: string;
    };
    autoUpload: {
        type: BooleanConstructor;
        default: boolean;
    };
    request: {
        type: PropType<UploadRequest>;
        default: UploadRequest;
    };
    tip: StringConstructor;
}, {
    inputRef: Ref<HTMLInputElement>;
    fileItems: Ref<FileItem[]>;
    chooseFile: () => void;
    handleInputChange: (e: DragEvent) => Promise<void>;
    showButtonTrigger: import("vue").ComputedRef<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:file-list" | "change")[], "update:file-list" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    action?: unknown;
    fileList?: unknown;
    listType?: unknown;
    disabled?: unknown;
    multiple?: unknown;
    accept?: unknown;
    autoUpload?: unknown;
    request?: unknown;
    tip?: unknown;
} & {
    action: string;
    fileList: FileItem[];
    listType: ListType;
    disabled: boolean;
    multiple: boolean;
    accept: string;
    autoUpload: boolean;
    request: UploadRequest;
} & {
    tip?: string;
}> & {
    "onUpdate:file-list"?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
}, {
    fileList: FileItem[];
    listType: ListType;
    disabled: boolean;
    multiple: boolean;
    accept: string;
    autoUpload: boolean;
    request: UploadRequest;
}>;
export default _default;
