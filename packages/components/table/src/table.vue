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
import { computed, defineComponent, PropType, provide, reactive, ref, watch } from "vue";
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

const useColumns = (props) => {
    const isUseColumnSlots = computed(() => !props.columns?.length);
    const dataColumns = ref<TableColumn[]>(props.columns || []);

    watch(isUseColumnSlots, (value, oldValue) => {
        if (value === false) {
            dataColumns.value = props.columns;
        }
    })

    const addColumn = (column: TableColumn) => {
        if (isUseColumnSlots.value === false) return;
        dataColumns.value.push(column);
    }
    const removeColumn = (column: TableColumn) => {
        if (isUseColumnSlots.value === false) return;
        dataColumns.value.splice(dataColumns.value.indexOf(column), 1);
    }

    provide(TABLE_KEY, {
        addColumn,
        removeColumn
    });

    return {
        dataColumns
    }
}

const useScroll = () => {
    const headerWrapperRef = ref();

    const onBodyWrapperScroll = (e) => {
        const scrollLeft = e.target.scrollLeft;
        (headerWrapperRef.value as HTMLElement).scrollLeft = scrollLeft;
    }

    return {
        headerWrapperRef,
        onBodyWrapperScroll
    }
}

export default defineComponent({
    name: "MTable",
    components: {
        TableHeader,
        TableBody,
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

    setup(props) {

        const { dataColumns } = useColumns(props);

        const { style, headerWrapperStyle, bodyWrapperStyle } = useStyle(props);

        const { headerWrapperRef, onBodyWrapperScroll } = useScroll();

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