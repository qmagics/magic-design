import { Directive } from "vue";
import Clipboard from 'clipboard';
import { Message } from 'magic-design';

export default {
    mounted(el, binding, vnode) {
        const clip = new Clipboard(el, {
            text: elm => binding.value + '',
        });

        clip.on('success', e => {
            Message.success("复制成功 ~");
        });

        clip.on('error', function (e) {
            console.error('复制失败');
        });

        el.__clip__ = clip;
    },
    beforeUnmount(el, binding, vnode) {
        el.__clip__ && el.__clip__.destroy();
        el.__clip__ = null;
        delete el.__clip__;
    }
} as Directive