<template>
    <m-button @click="showMsg">显示消息</m-button>
</template>

<script lang="ts" setup>
import { Message } from 'magic-design';
const showMsg = () => {
    Message(`这是一条消息`);
}
</script>

<demo-meta>
{
    "sort": 1,
    "title": "基础用法",
    "description": "Message组件用来显示一个消息提醒框",
}
</demo-meta>