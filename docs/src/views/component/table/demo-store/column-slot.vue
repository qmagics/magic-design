<template>
    <m-table :data="tableData" :height="250">
        <m-table-column label="姓名" prop="Name">
            <template #="{ row }">{{ row.Name + ':' + row.Age + '岁' }}</template>
        </m-table-column>
        <m-table-column label="年龄" prop="Age"></m-table-column>
        <m-table-column label="性别" prop="Sex">
            <template #="{ value }">
                <m-tag v-if="value === 1" state="primary">男</m-tag>
                <m-tag v-else-if="value === 2" state="danger">女</m-tag>
            </template>
        </m-table-column>
    </m-table>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
const tableData = reactive([
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
    },
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
    },
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
    },
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
]);
</script>

<demo-meta>
{
    "sort": 2,
    "title": "列插槽",
    "description": "以插槽的方式展示自定义渲染内容",
}
</demo-meta>