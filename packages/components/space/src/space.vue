<script lang="ts">
import { isFragment, isArray, isString, isValidElementNode } from "@magic-design/utils/src";
import { computed, defineComponent, PropType, reactive, renderSlot, createVNode, watchEffect, ref } from "vue";

export type SpaceSize = 'mini' | 'small' | 'medium' | 'large' | number | [number, number];

const GUTTER_MAP = {
    mini: 5,
    small: 8,
    medium: 10,
    large: 12
}

export default defineComponent({
    name: "MSpace",
    props: {
        direction: {
            type: String as PropType<'horizontal' | 'vertical'>,
            default: 'horizontal'
        },
        align: {
            type: String as PropType<'start' | 'end' | 'center' | 'baseline'>,
            default: ''
        },
        size: {
            type: [String, Number, Array] as PropType<SpaceSize>,
            default: 'medium'
        },
        wrap: {
            type: Boolean,
            default: false
        }
    },
    setup(props, { emit, slots }) {

        const spaceClass = computed(() => {
            return [
                'm-space',
                `m-space--align-${props.align}`,
                `m-space--direction-${props.direction}`,
                `m-space--size-${props.size}`,
                {
                    'is--wrap': props.wrap
                }
            ]
        });

        const spaceItemClass = computed(() => {
            return [
                'm-space__item'
            ]
        });

        const gutterH = ref(0);
        const gutterV = ref(0);

        const spaceItemStyle = computed(() => {
            return {
                marginRight: gutterH.value ? `${gutterH.value}px` : undefined,
                marginBottom: gutterV.value ? `${gutterV.value}px` : undefined,
            }
        });

        watchEffect(() => {
            const { size, direction, wrap } = props;

            if (isString(size)) {
                gutterH.value = gutterV.value = GUTTER_MAP[size];
            }
            else if (isArray(props.size)) {
                gutterH.value = props.size[0];
                gutterV.value = props.size[1];
            }
            else if (typeof size === 'number') {
                gutterH.value = gutterV.value = size;
            }

            if (wrap === false) {
                if (direction === "horizontal") {
                    gutterV.value = 0;
                }
                else {
                    gutterH.value = 0;
                }
            }
        });

        return () => {
            const vnode = renderSlot(slots, 'default', { key: 0 }, () => []);
            const children = vnode.children;

            if (isArray(children)) {
                const wrapedItems = [];

                children.forEach((child: any, index) => {
                    if (isFragment(child) && isArray(child.children!)) {
                        child.children.forEach((i, index2) => {
                            wrapedItems.push(createVNode(
                                'div',
                                {
                                    key: `MSpaceItem_${index2}`,
                                    class: spaceItemClass.value,
                                    style: spaceItemStyle.value
                                },
                                {
                                    default: () => [i],
                                },
                                // [i],
                                // PatchFlags.PROPS | PatchFlags.STYLE
                            ))
                        });
                    }
                    // 不是注释节点，不是片段，才解析
                    else if (isValidElementNode(child)) {
                        wrapedItems.push(createVNode(
                            "div",
                            {
                                key: `MSpaceItem_${index}`,
                                class: spaceItemClass.value,
                                style: spaceItemStyle.value
                            },
                            {
                                default: () => [child],
                            },
                            // [child],
                            // PatchFlags.PROPS | PatchFlags.STYLE,
                        ))
                    }
                });

                return createVNode(
                    'div',
                    {
                        class: spaceClass.value,
                    },
                    wrapedItems,
                    // PatchFlags.STYLE | PatchFlags.CLASS
                )
            }
            else {
                return children
            }
        }

    },
});
</script>
