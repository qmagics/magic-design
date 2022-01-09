<template>
    <m-select v-model="city">
        <m-option value="shanghai" label="上海"></m-option>
        <m-option value="beijing" label="北京"></m-option>
        <m-option value="hangzhou" label="杭州"></m-option>
    </m-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const city = ref('shanghai');
</script>

<demo-meta>
{
    "sort": 1,
    "title": "基础用法",
    "description": "选项过多时，使用Select组件为用户提供选项",
}
</demo-meta>