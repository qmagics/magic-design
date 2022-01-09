<template>
    <m-space direction="vertical">
        <m-select v-model="city" size="mini">
            <m-option value="shanghai" label="上海"></m-option>
            <m-option value="beijing" label="北京"></m-option>
            <m-option value="hangzhou" label="杭州"></m-option>
        </m-select>
        <m-select v-model="city" size="small">
            <m-option value="shanghai" label="上海"></m-option>
            <m-option value="beijing" label="北京"></m-option>
            <m-option value="hangzhou" label="杭州"></m-option>
        </m-select>
        <m-select v-model="city" size="medium">
            <m-option value="shanghai" label="上海"></m-option>
            <m-option value="beijing" label="北京"></m-option>
            <m-option value="hangzhou" label="杭州"></m-option>
        </m-select>
        <m-select v-model="city" size="large">
            <m-option value="shanghai" label="上海"></m-option>
            <m-option value="beijing" label="北京"></m-option>
            <m-option value="hangzhou" label="杭州"></m-option>
        </m-select>
    </m-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const city = ref("");
</script>

<demo-meta>
{
    "sort": 0,
    "title": "下拉框尺寸",
    "description": "可以通过size属性给下拉框设置不同尺寸",
}
</demo-meta>