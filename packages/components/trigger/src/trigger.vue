<script lang="ts">
import { cloneVNode, defineComponent, Fragment, h, ref, onMounted, reactive } from "vue";
import MTeleport from "./teleport.vue";
export default defineComponent({
    name: "MTrigger",
    setup(props, { slots }) {



        const UIState = reactive({
            contentVisible: false,
        });

        const onClick = () => {
            UIState.contentVisible = !UIState.contentVisible;
        }

        const contentStyle = reactive({
            left: '',
            top: '',
            width: ''
        });

        const triggerRef = ref();

        onMounted(() => {
            const { width, height, top, left } = triggerRef.value?.$el?.getBoundingClientRect();
            contentStyle.width = width + 'px';
            contentStyle.left = left + 'px';
            contentStyle.top = top + height + 'px';
        });
        return () => {
            const trigger = slots.default?.();
            const wrappedTrigger = cloneVNode(trigger[0], {
                onClick,
                ref: triggerRef
            });

            const content = slots.content?.();
            const wrappedContent = h(MTeleport, h('div', { class: 'm-trigger__content', style: contentStyle }, content));

            return h(Fragment, [
                wrappedTrigger,
                UIState.contentVisible ? wrappedContent : null
            ])
        }
    }
})
</script>