<template>
    <m-table :data="tableData" :height="250">
        <m-table-column label="姓名" prop="Name" width="500"></m-table-column>
        <m-table-column label="年龄" prop="Age" width="400"></m-table-column>
        <m-table-column label="性别" prop="Sex" width="300"></m-table-column>
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
    "sort": 1,
    "title": "基础用法",
    "description": "用于展示一个表格",
}
</demo-meta>