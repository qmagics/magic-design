<template>
    <m-table :data="table.data" :columns="table.columns"></m-table>
</template>

<script setup lang="tsx">
import { reactive } from 'vue';
import { TableColumnRaw } from 'magic-design';

const table = reactive({
    data: [
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
    ],
    columns: [
        {
            label: "姓名",
            prop: "Name",
            width: 150,
        },
        {
            label: "年龄",
            prop: "Age",
            width: 150,
        },
        {
            label: "性别",
            prop: "Sex",
            width: 150,
            render: ({ value }) => value === 1 ? <m-tag state="primary">男</m-tag> : <m-tag state="danger">女</m-tag>
        },
        {
            label: "地址",
            prop: "Address",
        },
        {
            label: "操作",
            width: 100,
            prop: "Name",
            align: "center",
            render({ value }) {
                return <m-button onClick={() => { alert('编辑' + value) }}>编辑</m-button>
            }
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