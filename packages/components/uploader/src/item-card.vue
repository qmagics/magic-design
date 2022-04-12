<template>
    <div
        :class="[
            `m-uploader-item`,
            `m-uploader-item--status-${fileItem.status}`
        ]"
    >
        <img class="m-uploader-item__img" v-if="listType === 'img-card'" :src="fileItem.url" />
        <div class="m-uploader-item__title" v-else-if="listType === 'text-card'" :title="fileItem.name">
            <i :class="[fileIconClass, 'm-uploader-item__title-icon']"></i>
            <span class="m-uploader-item__title-text">{{ fileItem.name }}</span>
        </div>
        <div class="m-uploader-item__toolbox">
            <i class="m-icon-delete" @click="removeFile"></i>
        </div>
        <div class="m-uploader-item__loading" v-if="fileItem.status==='pending'">
            <i class="m-icon-loading"></i>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { FileItem, ListType } from "./interface";
import useItem from "./useItem";

export default defineComponent({
    props: {
        fileItem: {
            type: Object as PropType<FileItem>,
        },
        listType: {
            type: String as PropType<ListType>,
            default: 'img-card'
        }
    },
    setup(props) {
        const { removeFile, stateIconClass, fileIconClass } = useItem(props);

        return {
            removeFile,
            stateIconClass,
            fileIconClass
        }
    }
})
</script>