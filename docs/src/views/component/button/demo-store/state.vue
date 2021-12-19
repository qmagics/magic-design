<template>
    <div>
        <m-button type="primary">默认</m-button>
        <m-button type="primary" state="success">成功</m-button>
        <m-button type="primary" state="warning">警告</m-button>
        <m-button type="primary" state="danger">危险</m-button>
        <m-button type="outline">默认</m-button>
        <m-button type="outline" state="success">成功</m-button>
        <m-button type="outline" state="warning">警告</m-button>
        <m-button type="outline" state="danger">危险</m-button>
    </div>
    <div>
        <m-button>默认</m-button>
        <m-button state="success">成功</m-button>
        <m-button state="warning">警告</m-button>
        <m-button state="danger">危险</m-button>
        <m-button type="text">默认</m-button>
        <m-button type="text" state="success">成功</m-button>
        <m-button type="text" state="warning">警告</m-button>
        <m-button type="text" state="danger">危险</m-button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    // #doc-start
    __meta__: {
        sort: 2,
        title: "按钮状态",
    },
    // #doc-end
});
</script>