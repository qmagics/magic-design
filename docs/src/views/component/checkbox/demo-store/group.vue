<template>
    <m-checkbox-group v-model="cities">
        <m-checkbox value="shanghai">上海</m-checkbox>
        <m-checkbox value="beijing">北京</m-checkbox>
        <m-checkbox value="guangzhou">广州</m-checkbox>
        <m-checkbox value="shenzhen">深圳</m-checkbox>
        <m-checkbox value="hangzhou">杭州</m-checkbox>
    </m-checkbox-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const cities = ref(['beijing', 'hangzhou'])
</script>

<demo-meta>
{
    "sort": 1,
    "title": "基础用法",
    "description": "Checkbox组件用于在少数选项中选择一个或多个值",
}
</demo-meta>