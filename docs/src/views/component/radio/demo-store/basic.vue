<template>
    <m-space>
        <m-radio v-model="fruit" value="apple">苹果</m-radio>
        <m-radio v-model="fruit" value="banana">香蕉</m-radio>
    </m-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const fruit = ref();
</script>

<demo-meta>
{
    "sort": 1,
    "title": "基础用法",
    "description": "Radio组件用于在少量互斥选项中选择一项",
}
</demo-meta>