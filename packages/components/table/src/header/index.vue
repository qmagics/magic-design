<template>
    <table class="m-table__header">
        <colgroup>
            <col v-for="column in columns" :key="column.prop" :width="column.width" />
        </colgroup>
        <thead>
            <tr class="m-table-tr">
                <th
                    :class="[
                        'm-table-th',
                        `m-table-th--align-${column.align || 'left'}`
                    ]"
                    v-for="column in columns"
                    :key="column.prop"
                >
                    <span>{{ column.label }}</span>
                </th>
            </tr>
        </thead>
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