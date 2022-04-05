export type FileStatus = 'init' | 'pending' | 'error' | 'done';

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
    name: string | ((fileItem: FileItem) => string)
}

export type UploadRequest = (options: UploadRequestOptions) => Promise<any>
