<template>
    <div
        :class="[
            'm-uploader-item m-uploader-item--text',
            `m-uploader-item--status-${fileItem.status}`
        ]"
    >
        <div class="m-uploader-item__info">
            <i class="m-icon-file info-icon"></i>
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
import { UPLOADER_KEY } from "@magic-design/utils/src/const";
import { computed, defineComponent, inject, PropType } from "vue";
import { FileItem, ListType } from "./interface";

const STATUS_ICON_MAP = {
    'pending': 'm-icon-loading',
    'done': 'm-icon-check-o',
    'error': 'm-icon-error-o',
    'init': ''
}

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

        const stateIconClass = computed(() => {
            // return `${props.fileItem.status===''}`;
            return STATUS_ICON_MAP[props.fileItem.status];
        });

        return {
            removeFile,
            stateIconClass
        }
    }
})
</script>