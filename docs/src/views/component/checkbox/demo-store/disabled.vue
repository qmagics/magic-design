<template>
    <m-checkbox-group v-model="fruit" disabled>
        <m-checkbox value="apple">苹果</m-checkbox>
        <m-checkbox value="banana">香蕉</m-checkbox>
        <m-checkbox value="orange">橘子</m-checkbox>
    </m-checkbox-group>

    <br />
    <br />
    <m-space :size="20">
        <m-checkbox v-model="city" value="beijing" disabled>北京</m-checkbox>
        <m-checkbox v-model="city" value="shanghai">上海</m-checkbox>
        <m-checkbox v-model="city" value="guangzhou" disabled>广州</m-checkbox>
        <m-checkbox v-model="city" value="shenzhen">深圳</m-checkbox>
        <m-checkbox v-model="city" value="hangzhou">杭州</m-checkbox>
    </m-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const fruit = ref(["orange"]);
const city = ref(["hangzhou"]);
</script>

<demo-meta>
{
    "sort": 3,
    "title": "禁用",
    "description": "禁用Checkbox或者CheckboxGroup可以使用disabled属性",
}
</demo-meta>