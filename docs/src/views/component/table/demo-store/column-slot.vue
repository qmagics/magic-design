<template>
    <m-table :data="tableData">
        <m-table-column label="姓名" prop="Name" :width="200">
            <template #="{ row }">{{ row.Name + ':' + row.Age + '岁' }}</template>
        </m-table-column>
        <m-table-column label="年龄" prop="Age" :width="150"></m-table-column>
        <m-table-column label="性别" prop="Sex" :width="100">
            <template #="{ value }">
                <m-tag v-if="value === 1" state="primary">男</m-tag>
                <m-tag v-else-if="value === 2" state="danger">女</m-tag>
            </template>
        </m-table-column>
        <m-table-column label="地址" prop="Address"></m-table-column>
    </m-table>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
const tableData = reactive([
    {
        Id: '1',
        Name: '张三',
        Age: 26,
        Sex: 1,
        Address: "浙江省杭州市西湖区龙井路1号"
    },
    {
        Id: '2',
        Name: '李四',
        Age: 18,
        Sex: 2,
        Address: "浙江省杭州市西湖区天目山路518号"
    },
    {
        Id: '3',
        Name: '王五',
        Age: 22,
        Sex: 2,
        Address: "上海市长宁区虹桥路2550号"
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