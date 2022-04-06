export type FileStatus = 'init' | 'pending' | 'error' | 'done';
export type ListType = 'text' | 'img' | 'img-list';

export interface FileItem {
    name: string;
    file?: File;
    url?: string;
    status?: FileStatus;
    percent?: number;
    response?: any;
}

export interface RequestOption {
    action: string;
}

export interface UploadRequestOptions {
    method: string;
    url: string;
    fileItem: FileItem;
    name: string | ((fileItem: FileItem) => string);
    onSuccess?: Function;
    onError?: Function;
    onProgress?: Function;
}

export type UploadRequest = (options: UploadRequestOptions) => Promise<any>
