<template>
    <m-button type="primary" size="mini">迷你</m-button>
    <m-button type="primary" size="small">小型</m-button>
    <m-button type="primary" size="medium">中等</m-button>
    <m-button type="primary" size="large">大型</m-button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    // #doc-start
    __meta__: {
        sort: 4,
        title: "按钮尺寸"
    },
    // #doc-end
});
</script>