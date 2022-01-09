<template>
    <m-space direction="vertical">
        <m-input placeholder="写点东西吧" v-model="value1" size="mini"></m-input>
        <m-input placeholder="写点东西吧" v-model="value1" size="small"></m-input>
        <m-input placeholder="写点东西吧" v-model="value1" size="medium"></m-input>
        <m-input placeholder="写点东西吧" v-model="value1" size="large"></m-input>
    </m-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const value1 = ref("");
</script>

<demo-meta>
{
    "sort": 5,
    "title": "输入框尺寸",
    "description": "可以通过size属性给输入框设置不同尺寸",
}
</demo-meta>