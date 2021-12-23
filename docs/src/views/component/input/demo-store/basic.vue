<template>
    <m-input placeholder="写点东西吧" v-model="value1"></m-input>
    <br>
    <br>
    <m-input placeholder="写点东西吧" v-model="value2" clearable></m-input>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const value1 = ref("");
const value2 = ref("点击清除按钮将我清空");
</script>

<demo-meta>
{
    "sort": 1,
    "title": "基础用法",
    "description": "输入框可以给用户提供输入功能，将clearable属性设置为true，可以开启输入框的清空功能",
}
</demo-meta>