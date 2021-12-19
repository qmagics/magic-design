<template>
    <m-button type="primary" icon="m-icon-search">搜索</m-button>
    <m-button type="primary" state="danger" icon="m-icon-delete"></m-button>
    <m-button type="text" state="success" icon="m-icon-plus">新增</m-button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    // #doc-start
    __meta__: {
        sort: 3,
        title: "图标按钮"
    },
    // #doc-end
});
</script>