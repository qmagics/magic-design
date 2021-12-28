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
    "sort": 2,
    "title": "复选框组",
    "description": "CheckboxGroup组件用于将一组复选框组合起来使用",
}
</demo-meta>