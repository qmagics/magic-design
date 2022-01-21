<template>
    <table class="m-table__body">
        <colgroup>
            <col v-for="column in columns" :key="column.prop" :width="column.width" />
        </colgroup>
        <tbody>
            <tr v-for="i in data">
                <td v-for="column in columns" :key="column.prop">
                    <span>{{ i[column.prop] }}</span>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script lang="ts">
import { computed, defineComponent, PropType, reactive } from "vue";
import { TableColumnRaw } from "../interface";

export default defineComponent({
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