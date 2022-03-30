<template>
    <m-uploader v-model="fileList" action="http://localhost:4000/api/upload"></m-uploader>

    <pre>{{fileList}}</pre>

    <!-- <el-button @click="getAjax">请求</el-button> -->
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
const fileList = reactive([]);

</script>

<demo-meta>
{
    "sort": 1,
    "title": "基础用法",
    "description": "Uploader组件用来上传文件到服务器",
}
</demo-meta>