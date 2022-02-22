<template>
    <table class="m-table__body">
        <colgroup>
            <col v-for="column in columns" :key="column.prop" :width="column.width" />
        </colgroup>
        <tbody>
            <tr class="m-table-tr" v-for="(i, rowIndex) in data">
                <td
                    :class="[
                        'm-table-td',
                        `m-table-td--align-${column.align || 'left'}`
                    ]"
                    v-for="(column, columnIndex) in columns"
                    :key="column.prop"
                >
                    <table-cell
                        :render="column.render"
                        :render-context="{ row: i, value: i[column.prop], column, rowIndex, columnIndex }"
                    >{{ i[column.prop] }}</table-cell>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script lang="ts">
import { computed, defineComponent, PropType, reactive } from "vue";
import { TableColumnRaw } from "../interface";
import TableCell from '../cell';

export default defineComponent({
    components: {
        TableCell
    },
    props: {
        data: {
            type: Array as PropType<any[]>,
            default: () => []
        },
        columns: Array as PropType<TableColumnRaw[]>
    },
    setup(props) {

    }
});
</script>