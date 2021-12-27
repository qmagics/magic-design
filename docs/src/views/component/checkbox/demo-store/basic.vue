<template>
    <m-space>
        <m-checkbox v-model="fruit">苹果</m-checkbox>
    </m-space>
    <br />
    <br />
    <m-space>
        <m-checkbox v-model="cities" value="shanghai">上海</m-checkbox>
        <m-checkbox v-model="cities" value="beijing">北京</m-checkbox>
    </m-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const fruit = ref("");
const cities = ref(['shanghai'])
</script>

<demo-meta>
{
    "sort": 1,
    "title": "基础用法",
    "description": "Checkbox组件用于在少数选项中选择一个或多个值",
}
</demo-meta>