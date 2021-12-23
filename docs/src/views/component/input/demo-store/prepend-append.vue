<template>
    <m-input placeholder="请输入网址" v-model="value1">
        <template #prepend>https://</template>
    </m-input>
    <br>
    <br>
    <m-input placeholder="输入当前时速" v-model="value2">
        <template #append>km/h</template>
    </m-input>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const value1 = ref("");
const value2 = ref("");
</script>

<demo-meta>
{
    "sort": 3,
    "title": "前置元素和后置元素",
    "description": "可以通过prefix和suffix插槽给输入框添加前缀和后缀"
}
</demo-meta>