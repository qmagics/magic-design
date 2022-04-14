<template>
    <m-uploader v-model:file-list="state.fileList" tip="必须上传png/jpg格式的图片，大小不超过200kb"
        action="http://localhost:4000/api/upload">
    </m-uploader>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const state = reactive({
    fileList: [
        {
            name: "一个文件.txt",
            status: 'error'
        },
        {
            name: "一张图片.png"
        }
    ]
});
</script>

<demo-meta>
{
    "sort": 1,
    "title": "基础用法",
    "description": "Uploader组件用来上传文件到服务器",
}
</demo-meta>