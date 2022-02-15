<template>
    <div :class="[
        'm-table',
        `m-table--size-${size}`
    ]" :style="style">
        <div class="m-table__container">
            <div class="m-table__header-wrapper" :style="headerWrapperStyle" ref="headerWrapperRef">
                <table-header :columns="dataColumns" :data="data"></table-header>
            </div>
            <div
                class="m-table__body-wrapper"
                :style="bodyWrapperStyle"
                @scroll="onBodyWrapperScroll"
            >
                <slot></slot>
                <table-body :columns="dataColumns" :data="data"></table-body>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, provide, reactive, ref } from "vue";
import { TableColumnRaw, TableColumn, TableSize } from "./interface";
import TableHeader from './header/index.vue';
import TableBody from './body/index.vue';
import { TABLE_KEY } from "@magic-design/utils/src/const";

const useStyle = (props) => {
    const isFixedHeight = computed(() => !!props.height || props.height === 0);

    const height = ref(props.height as number);

    const style = reactive({
        height: isFixedHeight.value ? height.value + 'px' : ''
    });

    const headerHeight = ref(40);

    const headerWrapperStyle = reactive({
        height: isFixedHeight.value ? headerHeight.value + 'px' : ''
    });

    const bodyHeight = height.value - headerHeight.value;

    const bodyWrapperStyle = reactive({
        height: isFixedHeight.value ? bodyHeight + 'px' : ''
    })

    return {
        style,
        headerWrapperStyle,
        bodyWrapperStyle
    };
}

export default defineComponent({
    name: "MTable",
    components: {
        TableHeader,
        TableBody
    },
    props: {
        data: {
            type: Array as PropType<any[]>,
            default: () => []
        },
        columns: Array as PropType<TableColumnRaw[]>,
        size: {
            type: String as PropType<TableSize>,
            default: "medium"
        },
        height: {
            type: Number,
        }
    },

    emits: [],

    setup(props, { emit }) {
        const headerWrapperRef = ref();
        const dataColumns = ref<TableColumn[]>([]);

        const addColumn = (column: TableColumn) => {
            dataColumns.value.push(column);
        }
        const removeColumn = (column: TableColumn) => {
            dataColumns.value.splice(dataColumns.value.indexOf(column), 1);
        }
        provide(TABLE_KEY, {
            addColumn,
            removeColumn
        });

        const onBodyWrapperScroll = (e) => {
            const scrollLeft = e.target.scrollLeft;
            (headerWrapperRef.value as HTMLElement).scrollLeft = scrollLeft;
        }

        const { style, headerWrapperStyle, bodyWrapperStyle } = useStyle(props);

        return {
            headerWrapperRef,
            onBodyWrapperScroll,
            style,
            headerWrapperStyle,
            bodyWrapperStyle,
            dataColumns
        }
    }
});
</script>