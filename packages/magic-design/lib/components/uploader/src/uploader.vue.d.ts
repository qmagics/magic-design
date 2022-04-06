import { PropType, Ref } from "vue";
import { FileItem, UploadRequest } from "./interface";
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
        type: StringConstructor;
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
}, {
    inputRef: Ref<HTMLInputElement>;
    fileItems: Ref<FileItem[]>;
    handleTriggerClick: () => void;
    handleInputChange: (e: DragEvent) => Promise<void>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:file-list" | "change")[], "update:file-list" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    action?: unknown;
    fileList?: unknown;
    listType?: unknown;
    disabled?: unknown;
    multiple?: unknown;
    accept?: unknown;
    autoUpload?: unknown;
    request?: unknown;
} & {
    action: string;
    fileList: FileItem[];
    listType: string;
    disabled: boolean;
    multiple: boolean;
    accept: string;
    autoUpload: boolean;
    request: UploadRequest;
} & {}> & {
    "onUpdate:file-list"?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
}, {
    fileList: FileItem[];
    listType: string;
    disabled: boolean;
    multiple: boolean;
    accept: string;
    autoUpload: boolean;
    request: UploadRequest;
}>;
export default _default;
