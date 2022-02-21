<template>
    <m-table :data="table.data" :columns="table.columns"></m-table>
</template>

<script setup lang="ts">
import { reactive, h } from 'vue';
import type { TableColumnRaw } from 'magic-design';

const table = reactive({
    data: [
        {
            Id: '1',
            Name: '张三',
            Age: 26,
            Sex: 1
        },
        {
            Id: '2',
            Name: '李四',
            Age: 18,
            Sex: 2
        },
        {
            Id: '3',
            Name: '王五',
            Age: 22,
            Sex: 2
        }
    ],
    columns: [
        {
            label: "姓名",
            prop: "Name",
            render({ value }) {
                return h('strong', value)
            }
        },
        {
            label: "年龄",
            prop: "Age"
        },
        {
            label: "性别",
            prop: "Sex"
        }
    ] as TableColumnRaw[]
});

</script>

<demo-meta>
{
    "sort": 3,
    "title": "列配置项",
    "description": "通过columns配置项指定列的渲染内容，该配置项的优先级高于column组件的slot",
}
</demo-meta>