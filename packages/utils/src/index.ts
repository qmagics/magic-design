import { Fragment, isVNode, VNode, Comment } from 'vue';
import { isArray, isString } from '@vue/shared';

export const isFragment = (node: any) => node?.type === Fragment;

export const isComment = (node: VNode) => node.type === Comment

export const isValidElementNode = (node: unknown): node is VNode =>
    isVNode(node) && !isFragment(node) && !isComment(node);

export const blobToDataUrl = (blob: Blob): Promise<string> => {

    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onload = (e: ProgressEvent<FileReader>) => {
            resolve(e.target.result as string);
        };
    });
}

export {
    isArray,
    isString
}