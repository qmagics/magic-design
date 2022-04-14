<template>
    <div :class="[
        `m-uploader-item`,
        `m-uploader-item--status-${fileItem.status}`
    ]">
        <div class="m-uploader-item__info">
            <i v-if="listType === 'text'" :class="[fileIconClass, 'info-icon']"></i>
            <img class="m-uploader-item__img" v-else-if="listType === 'img'" :src="fileItem.url" />
            <span class="info-text">{{ fileItem.name }}</span>
        </div>
        <div class="m-uploader-item__toolbar">
            <i :class="[stateIconClass, 'm-uploader-status-icon']"></i>
            <span class="m-uploader-icon-btn btn-remove" @click="removeFile">
                <i class="m-icon-delete"></i>
            </span>
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
            required: true
        },
        listType: {
            type: String as PropType<ListType>,
            default: 'text'
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