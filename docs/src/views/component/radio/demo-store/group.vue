<template>
    <m-space direction="vertical">
        <m-radio-group v-model="fruit">
            <m-radio value="apple">苹果</m-radio>
            <m-radio value="banana">香蕉</m-radio>
            <m-radio value="orange">橘子</m-radio>
        </m-radio-group>
        <m-radio-group v-model="city">
            <m-radio value="beijing">北京</m-radio>
            <m-radio value="shanghai">上海</m-radio>
            <m-radio value="guangzhou">广州</m-radio>
            <m-radio value="shenzhen">深圳</m-radio>
            <m-radio value="hangzhou">杭州</m-radio>
        </m-radio-group>
    </m-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const fruit = ref("orange");
const city = ref("hangzhou");
</script>

<demo-meta>
{
    "sort": 2,
    "title": "单选框组",
    "description": "RadioGroup组件用于将一组单选框组合起来使用",
}
</demo-meta>