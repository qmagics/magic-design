export interface FileItem {
    file: File;
    name: string;
}
export interface RequestOption {
    action: string;
}
export interface UploadRequestOptions {
    method: string;
    url: string;
    fileItem: FileItem;
    name: string | ((fileItem: FileItem) => string);
}
export declare type UploadRequest = (options: UploadRequestOptions) => Promise<any>;
