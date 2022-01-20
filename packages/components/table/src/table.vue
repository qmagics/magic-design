<template>
    <div class="m-table">
        <div class="m-table__header-wrapper">
            <table-header :columns="dataColumns" :data="data"></table-header>
        </div>
        <div class="m-table__body-wrapper">
            <slot></slot>
            <table-body :columns="dataColumns" :data="data"></table-body>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, provide, ref } from "vue";
import { TableColumnRaw, TableColumn } from "./interface";
import TableHeader from './header/index.vue';
import TableBody from './body/index.vue';
import { TABLE_KEY } from "@magic-design/utils/src/const";

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
        columns: Array as PropType<TableColumnRaw[]>
    },

    emits: [],

    setup(props, { emit }) {
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


        return {
            dataColumns
        }
    }
});
</script>