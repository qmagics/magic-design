import { PropType } from "vue";
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
    inputRef: import("vue").Ref<HTMLInputElement>;
    handleTriggerClick: () => void;
    handleInputChange: (e: DragEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    action?: unknown;
    fileList?: unknown;
    disabled?: unknown;
    multiple?: unknown;
    accept?: unknown;
    autoUpload?: unknown;
    request?: unknown;
} & {
    action: string;
    fileList: FileItem[];
    disabled: boolean;
    multiple: boolean;
    accept: string;
    autoUpload: boolean;
    request: UploadRequest;
} & {}>, {
    fileList: FileItem[];
    disabled: boolean;
    multiple: boolean;
    accept: string;
    autoUpload: boolean;
    request: UploadRequest;
}>;
export default _default;
