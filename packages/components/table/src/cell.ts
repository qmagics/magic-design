import { createVNode, defineComponent, PropType, h, renderSlot, VNode } from "vue";
import { ColumnRenderContext, TableColumnRenderFn } from "./interface";

export default defineComponent({
    props: {
        render: {
            type: Function as PropType<TableColumnRenderFn>,
        },
        renderContext: {
            type: Object as PropType<ColumnRenderContext>
        }
    },
    setup(props, { slots }) {
        if (props.render) {
            return (proxy) => {
                const vnode = props.render(props.renderContext);

                return vnode;
            }
        }
        else if (slots.default) {
            return (proxy) => slots.default();
        }
    }
});