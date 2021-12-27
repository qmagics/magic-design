<template>
    <m-radio-group v-model="fruit" disabled>
        <m-radio value="apple">苹果</m-radio>
        <m-radio value="banana">香蕉</m-radio>
        <m-radio value="orange">橘子</m-radio>
    </m-radio-group>

    <br />
    <br />
    <m-space :size="20">
        <m-radio v-model="city" value="beijing" disabled>北京</m-radio>
        <m-radio v-model="city" value="shanghai">上海</m-radio>
        <m-radio v-model="city" value="guangzhou" disabled>广州</m-radio>
        <m-radio v-model="city" value="shenzhen">深圳</m-radio>
        <m-radio v-model="city" value="hangzhou">杭州</m-radio>
    </m-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const fruit = ref("orange");
const city = ref("hangzhou");
</script>

<demo-meta>
{
    "sort": 3,
    "title": "禁用",
    "description": "禁用Radio或者RadioGroup可以使用disabled属性",
}
</demo-meta>