<template>
    <span></span>
</template>

<script lang="ts">
import { TABLE_KEY } from "@magic-design/utils/src/const";
import { defineComponent, getCurrentInstance, h, inject, onBeforeUnmount, onMounted } from "vue";
import { ColumnRenderContext } from "./interface";

export default defineComponent({
    name: "MTableColumn",
    props: {
        label: [String, Number],
        prop: [String, Number],
        width: [Number],
    },
    setup(props, { slots }) {
        const table = inject(TABLE_KEY);

        const proxy = getCurrentInstance().proxy;

        const render = slots.default ? (context: ColumnRenderContext) => {
            return slots.default(context);
        } : undefined;

        onMounted(() => {
            table.addColumn(proxy as any);
        });

        onBeforeUnmount(() => {
            table.removeColumn(proxy as any);
        });

        return {
            render
        }
    }
})
</script>