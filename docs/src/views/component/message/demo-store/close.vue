<template>
    <m-space>
        <m-button @click="showMsg">显示消息</m-button>
        <m-button @click="closeMsg">关闭消息</m-button>
        <m-button @click="closeAllMsg">关闭全部消息</m-button>
    </m-space>
</template>

<script lang="ts" setup>
import { Message } from 'magic-design';

let msg: any = null;

const showMsg = () => {
    msg = Message(`这是一条消息`);
}

const closeMsg = () => {
    msg?.close();
}

const closeAllMsg = () => {
    Message.closeAll();
}
</script>

<demo-meta>
{
    "sort": 3,
    "title": "手动关闭",
    "description": "Message组件默认会在一段时间(duration)后自动消失，也可以手动关闭",
}
</demo-meta>