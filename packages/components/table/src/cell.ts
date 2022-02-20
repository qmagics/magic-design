import { createVNode, defineComponent, PropType, h, renderSlot, VNode } from "vue";
import { TableColumnRenderFn } from "./interface";

export default defineComponent({
    props: {
        render: {
            type: Function as PropType<TableColumnRenderFn>,
        },
        renderContext: {
            type: Object as any
        }
    },
    setup(props, { slots }) {
        if (props.render) {
            return (proxy) => {
                const vnode = props.render(props.renderContext);
                return vnode;

                // return h('div', null, vnode.children);
            }
        }
        else if (slots.default) {
            return (proxy) => slots.default();
        }
    }
});