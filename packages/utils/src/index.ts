import { Fragment } from 'vue';
import { isArray,isString } from '@vue/shared';

export const isFragment = (node: any) => node?.type === Fragment;

export {
    isArray,
    isString
}