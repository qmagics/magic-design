import { UPLOADER_KEY } from "@magic-design/utils/src/const";
import { isImage } from "./utils";
import { computed, inject } from "vue";

const STATUS_ICON_MAP = {
    'pending': 'm-icon-loading',
    'done': 'm-icon-check-o',
    'error': 'm-icon-error-o',
    'init': ''
}

export default (props) => {
    const uploader = inject(UPLOADER_KEY);

    const removeFile = () => {
        uploader.removeFileById(props.fileItem.id);
    }

    const stateIconClass = computed(() => {
        return STATUS_ICON_MAP[props.fileItem.status];
    });

    const fileIconClass = computed(() => {
        if (!props.fileItem?.file) {
            return 'm-icon-file';
        }
        return isImage(props.fileItem.file) ? 'm-icon-image' : 'm-icon-file';
    });

    return {
        removeFile,
        stateIconClass,
        fileIconClass
    }
}