<template>
    <m-uploader v-model:file-list="vm" tip="必须上传png/jpg格式的图片，大小不超过200kb" action="http://localhost:4000/api/upload"></m-uploader>

    <!-- <pre>{{ vm }}</pre> -->

    <!-- <el-button @click="getAjax">请求</el-button> -->
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
const vm = ref([
    {
        name:"一个文件.txt",
        status:'error'
    },
    {
        name:"一张图片.png"
    }
]);

</script>

<demo-meta>
{
    "sort": 1,
    "title": "基础用法",
    "description": "Uploader组件用来上传文件到服务器",
}
</demo-meta>