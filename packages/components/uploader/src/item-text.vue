<template>
    <div class="m-uploader-item m-uploader-item--text">
        <div class="m-uploader-item__info">
            <i class="m-icon-file info-icon"></i>
            {{fileItem.status}}
            <span class="info-text">{{ fileItem.name }}</span>
        </div>
        <div class="m-uploader-item__toolbar">
            <span class="m-uploader-icon-btn" @click="removeFile">
                <i class="m-icon-delete"></i>
            </span>
        </div>
    </div>
</template>

<script lang="ts">
import { UPLOADER_KEY } from "@magic-design/utils/src/const";
import { defineComponent, inject, PropType } from "vue";
import { FileItem, ListType } from "./interface";

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
        const uploader = inject(UPLOADER_KEY);

        const removeFile = () => {
            uploader.removeFileById(props.fileItem.id);
        }

        return {
            removeFile
        }
    }
})
</script>