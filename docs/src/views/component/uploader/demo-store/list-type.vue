<template>
    <m-radio-group v-model="state.listType">
        <m-radio value="text">text</m-radio>
        <m-radio value="img">img</m-radio>
        <m-radio value="text-card">text-card</m-radio>
        <m-radio value="img-card">img-card</m-radio>
    </m-radio-group>
    <br />
    <br />
    <m-uploader
        v-model:file-list="state.fileList"
        :listType="state.listType"
        action="http://localhost:4000/api/upload"
    ></m-uploader>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
const state = reactive({
    fileList: [
        {
            name: "我是一只缅因.txt",
            status: 'error',
            url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.11665.com%2Fimg_p5%2Fi2%2F2201287339141%2FO1CN01yxhAXF2HOd84CRDJz_%21%212201287339141.jpg&refer=http%3A%2F%2Fimg.11665.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652368911&t=0f229c9586d21e9dd8257fdd9ccab0d7"
        },
        {
            name: "我是一只布偶.png",
            url: "https://pic2.zhimg.com/v2-97e6e78a4194a2d2da66171dfc53422e_1440w.jpg?source=172ae18b"
        }
    ],
    listType: 'img'
})

</script>

<demo-meta>
{
    "sort": 2,
    "title": "列表类型",
    "description": "通过list-type属性设置列表类型",
}
</demo-meta>