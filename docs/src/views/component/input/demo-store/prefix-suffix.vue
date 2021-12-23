<template>
    <m-input placeholder="请输入密码" v-model="value1">
        <template #prefix><m-icon name="m-icon-lock"></m-icon></template>
    </m-input>
    <br>
    <br>
    <m-input placeholder="搜点啥呢" v-model="value2">
        <template #suffix><m-icon name="m-icon-search"></m-icon></template>
    </m-input>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const value1 = ref("");
const value2 = ref("");
</script>

<demo-meta>
{
    "sort": 2,
    "title": "前缀和后缀",
    "description": "可以通过prefix和suffix插槽给输入框添加前缀和后缀"
}
</demo-meta>