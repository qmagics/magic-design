<template>
    <m-table :data="tableData" :height="250">
        <m-table-column label="姓名" prop="Name" :width="200"></m-table-column>
        <m-table-column label="年龄" prop="Age" :width="150"></m-table-column>
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
    },
    {
        Id: '4',
        Name: '张三',
        Age: 26,
        Sex: 1,
        Address: "浙江省杭州市西湖区龙井路1号"
    },
    {
        Id: '5',
        Name: '李四',
        Age: 18,
        Sex: 2,
        Address: "浙江省杭州市西湖区天目山路518号"
    },
    {
        Id: '6',
        Name: '王五',
        Age: 22,
        Sex: 2,
        Address: "上海市长宁区虹桥路2550号"
    },
    {
        Id: '7',
        Name: '张三',
        Age: 26,
        Sex: 1,
        Address: "浙江省杭州市西湖区龙井路1号"
    },
    {
        Id: '8',
        Name: '李四',
        Age: 18,
        Sex: 2,
        Address: "浙江省杭州市西湖区天目山路518号"
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