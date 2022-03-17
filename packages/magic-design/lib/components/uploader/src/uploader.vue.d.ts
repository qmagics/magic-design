import { PropType } from "vue";
import { FileItem } from "./interface";
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
        type: PropType<() => Promise<any>>;
        default: () => Promise<any>;
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
    request: () => Promise<any>;
} & {}>, {
    fileList: FileItem[];
    disabled: boolean;
    multiple: boolean;
    accept: string;
    autoUpload: boolean;
    request: () => Promise<any>;
}>;
export default _default;
