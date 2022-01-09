<script lang="ts">
import { cloneVNode, defineComponent, Fragment, h, ref, onMounted, reactive, PropType, withDirectives, vShow, Transition, onUpdated, watch, nextTick } from "vue";
import MTeleport from "./teleport.vue";

export default defineComponent({
    name: "MTrigger",

    props: {
        popperOffset: {
            type: Array as PropType<number[]>,
            default: () => []
        },
        visible: Boolean
    },

    emits: ['update:visible'],

    setup(props, { slots, emit }) {

        const onClick = () => {
            emit("update:visible", !props.visible);
        }

        const contentStyle = reactive({
            left: '',
            top: '',
            width: ''
        });

        const triggerRef = ref();

        const refreshContentPosition = () => {
            const containerEl = triggerRef.value?.$el;
            const { width, height } = containerEl?.getBoundingClientRect();
            const top = containerEl.offsetTop;
            const left = containerEl.offsetLeft;

            const [offsetX, offsetY] = props.popperOffset;
            contentStyle.width = width + 'px';
            contentStyle.left = left + (offsetX || 0) + 'px';
            contentStyle.top = top + (offsetY || 0) + height + 'px';
        }

        watch(() => props.visible, () => {
            refreshContentPosition();
        })

        onMounted(() => {
            refreshContentPosition();
        });

        onUpdated(() => {
            if (props.visible) {
                refreshContentPosition();
            }
        });

        return () => {
            const trigger = slots.default?.();
            const wrappedTrigger = cloneVNode(trigger[0], {
                onClick,
                ref: triggerRef
            });

            const content = slots.content?.();
            const wrappedContent = h(MTeleport,
                h(Transition,
                    {
                        name: "m-zoom-in-top"
                    },
                    withDirectives(
                        h('div',
                            {
                                class: 'm-trigger__content',
                                style: contentStyle
                            }, content),
                        [[vShow, props.visible]])
                ),

            );

            return h(Fragment, [
                wrappedTrigger,
                wrappedContent
            ])
        }
    }
})
</script>