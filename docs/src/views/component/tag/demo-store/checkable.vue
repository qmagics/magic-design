<template>
    <m-space>
        <m-tag state="primary" checkable v-model:checked="checked1">标签一</m-tag>
        <m-tag state="success" checkable checked>标签二</m-tag>
        <m-tag state="warning" checkable v-model:checked="checked2">标签三</m-tag>
        <m-tag state="danger" checkable v-model:checked="checked3">标签四</m-tag>
        <m-tag state="secondary" checkable v-model:checked="checked4">标签五</m-tag>
    </m-space>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const checked1 = ref(false);
const checked2 = ref(false);
const checked3 = ref(false);
const checked4 = ref(false);
</script>

<demo-meta>
{
    "sort": 3,
    "title": "可选中",
    "description": "通过checkable属性设置标签为可选中，通过checked属性绑定选中状态",
}
</demo-meta>