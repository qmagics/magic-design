import { VNode } from 'vue';
import { isArray, isString } from '@vue/shared';
export declare const isFragment: (node: any) => boolean;
export declare const isComment: (node: VNode) => boolean;
export declare const isValidElementNode: (node: unknown) => node is VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>;
export declare const blobToDataUrl: (blob: Blob) => Promise<string>;
export { isArray, isString };
