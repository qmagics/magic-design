import { Fragment, isVNode, VNode, Comment } from 'vue';
import { isArray, isString } from '@vue/shared';

export const isFragment = (node: any) => node?.type === Fragment;

export const isComment = (node: VNode) => node.type === Comment

export const isValidElementNode = (node: unknown): node is VNode =>
    isVNode(node) && !isFragment(node) && !isComment(node)

export {
    isArray,
    isString
}