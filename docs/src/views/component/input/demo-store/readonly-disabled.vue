<template>
    <m-input placeholder="现在禁止输入" v-model="value1" disabled></m-input>
    <br>
    <br>
    <m-input placeholder="写点东西吧" v-model="value2" readonly></m-input>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const value1 = ref("");
const value2 = ref("一段只读文本内容");
</script>

<demo-meta>
{
    "sort": 4,
    "title": "禁用和只读",
    "description": "通过设置disabled和readonly给输入框设置禁用和制度状态",
}
</demo-meta>