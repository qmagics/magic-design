<template>
    <table class="m-table__header">
        <colgroup>
            <col v-for="column in columns" :key="column.prop" :width="column.width" />
        </colgroup>
        <tr v-for="i in data">
            <td v-for="column in columns" :key="column.prop">
                <span>{{ i[column.prop] }}</span>
            </td>
        </tr>
    </table>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { TableColumnRaw } from "../interface";

export default defineComponent({
    props: {
        data: {
            type: Array as PropType<any[]>,
            default: () => []
        },
        columns: Array as PropType<TableColumnRaw[]>
    }
});
</script>