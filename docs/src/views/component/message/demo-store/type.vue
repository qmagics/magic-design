<template>
    <m-space>
        <m-button @click="showMsg1">显示消息</m-button>
        <m-button state="warning" @click="showMsg2">警告消息</m-button>
        <m-button state="danger" @click="showMsg3">错误消息</m-button>
        <m-button state="success" @click="showMsg4">成功消息</m-button>
        <m-button @click="Message.closeAll">关闭全部</m-button>
    </m-space>
</template>

<script lang="ts" setup>
import { Message } from 'magic-design';

const showMsg1 = () => {
    Message(`这是一条消息`);
}

const showMsg2 = () => {
    Message.warning(`这是一条警告消息`);
}

const showMsg3 = () => {
    Message.danger(`这是一条错误消息`);
}

const showMsg4 = () => {
    Message.success(`这是一条成功消息`);
}
</script>

<demo-meta>
{
    "sort": 2,
    "title": "消息类型",
    "description": "通过设置type属性，来显示不同风格类型的消息提示",
}
</demo-meta>