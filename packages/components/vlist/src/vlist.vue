<template>
    <div class="m-vlist" :style="styles" @scroll="onScroll" ref="listRef">
        <div class="m-vlist__scrollbar" :style="scrollbarStyle" ref="scrollbarRef"></div>
        <div class="m-vlist__content" ref="contentRef" :style="contentStyle">
            <div class="m-vlist__item" v-for="item in visibleItems" :key="item">
                <slot :item="item"></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from "vue";
import throttle from '@magic-design/utils/src/throttle';

export default defineComponent({
    name: "MVlist",
    props: {
        /**
         * 显示的项
         */
        items: {
            type: Array as PropType<any[]>,
            default: () => []
        },
        height: {
            type: Number,
            required: true
        },
        size: {
            type: Number,
            required: true,
            default: 40
        },
        preloadCount: {
            type: Number,
            default: 5
        }
    },
    setup(props) {
        const listRef = ref<HTMLDivElement>();
        const scrollbarRef = ref<HTMLDivElement>();
        const contentRef = ref<HTMLDivElement>();

        // 可视区能展示的数量
        const visibleCount = computed(() => {
            return Math.floor(props.height / props.size);
        });

        // 可见数据开始的索引
        const start = ref(0);

        // 可见数据结束的索引
        const end = computed(() => {
            return start.value + visibleCount.value;
        });

        // 前面预留的数量
        const prevCount = computed(() => Math.min(props.preloadCount, start.value));
        // 后面预留的数量
        const nextCount = computed(() => Math.min(props.preloadCount, props.items.length - end.value));

        // 可见的项
        const visibleItems = computed(() => {
            const _start = start.value - prevCount.value;
            const _end = end.value + nextCount.value;
            return props.items.slice(_start, _end);
        });

        const styles = computed(() => {
            return {
                height: props.height + 'px'
            }
        });

        const scrollbarStyle = computed(() => {
            return {
                height: props.size * props.items.length + 'px'
            }
        });

        const contentStyle = computed(() => {
            return {
                transform: `translate3d(0,${(start.value - prevCount.value) * props.size + 'px'},0)`
            }
        });

        const onScroll = throttle(() => {
            const scrollTop = listRef.value.scrollTop;

            start.value = Math.ceil(scrollTop / props.size);
        }, 200);

        return {
            visibleItems,
            styles,
            scrollbarStyle,
            contentStyle,
            onScroll,
            listRef,
            scrollbarRef,
            contentRef,
        }
    }
});
</script>