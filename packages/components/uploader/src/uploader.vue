<template>
  <div :class="[
    'm-uploader'
  ]">
    <div class="m-uploader__trigger" @click="handleTriggerClick">
      <slot name="trigger">
        <m-button type="primary">点击上传</m-button>
      </slot>
      <input
        class="m-uploader-input"
        type="file"
        :multiple="multiple"
        :accept="accept"
        ref="inputRef"
        @change="handleInputChange"
      />
    </div>
    <div class="m-uploader__tip" v-if="tip">{{ tip }}</div>
    <FileList :file-items="fileItems"></FileList>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, provide, reactive, Ref, ref, watch } from "vue";
import { FileItem, UploadRequest, UploaderProvideContext } from "./interface";
import ajax from './ajax';
import { blobToDataUrl } from "@magic-design/utils/src";
import { isImage } from "./utils";
import FileList from './file-list.vue';
import { UPLOADER_KEY } from "@magic-design/utils/src/const";
import { getUID } from "@magic-design/utils/src";

export default defineComponent({
  name: "MUploader",
  components: {
    FileList
  },
  props: {
    action: {
      required: true,
      type: String
    },
    fileList: {
      type: Array as PropType<FileItem[]>,
      default: () => []
    },
    listType: {
      type: String,
      default: 'list-item'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: true
    },
    accept: {
      type: String,
      default: "*"
    },
    autoUpload: {
      type: Boolean,
      default: true
    },
    request: {
      type: Function as PropType<UploadRequest>,
      default: ajax
    },
    tip: String
  },
  emits: ['update:file-list', 'change'],
  setup(props, { emit }) {
    const inputRef = ref(null as HTMLInputElement);

    const fileItems = <Ref<FileItem[]>>ref();

    const normalizeFileItems = (items: FileItem[]) => {
      const list = <FileItem[]>items.map((item, index) => {
        const status = item.status || 'done';
        return {
          ...item,
          id: item.id || getUID(index),
          status,
          percent: item.percent ?? (['error', 'init'].indexOf(status) > -1 ? 0 : 1),
        }
      });

      fileItems.value = list;
    }

    normalizeFileItems(props.fileList);
    watch(() => props.fileList, newList => {
      if (newList) {
        normalizeFileItems(newList);
      }
    }, { deep: true, immediate: true });

    // 触发上传按钮
    const handleTriggerClick = () => {
      if (!props.disabled) {
        inputRef.value.value = null;
        inputRef.value.click();
      }
    }

    // file-input文件变更
    const handleInputChange = async (e: DragEvent) => {
      const files = (e.target as HTMLInputElement).files;
      [...files].forEach((file, index) => {
        initFile(file, index);
      })
    }

    // 初始化文件
    const initFile = async (file: File, index: number) => {
      const item = await createFileItem(file, index);

      fileItems.value.push(item);
      emitUpdate(item);

      if (props.autoUpload) {
        uploadFile(item, index);
      }
    }

    // 根据file对象创建FileItem
    const createFileItem = async (file: File, index: number) => {
      return <FileItem>reactive({
        id: getUID(index),
        file,
        name: file.name,
        url: isImage(file) ? await blobToDataUrl(file) : undefined,
        response: '',
        percent: 0,
        status: 'init'
      })
    }

    // 触发更新
    const emitUpdate = (fileItem: FileItem) => {
      const newValue = fileItems.value;
      emit("update:file-list", newValue, fileItem);
      emit("change", newValue);
    }

    // 上传单个文件
    const uploadFile = (fileItem: FileItem, index: number) => {
      props.request({
        method: 'post',
        url: props.action,
        fileItem: fileItem,
        name: "file"
      })
        .then(res => {
          fileItem.status = 'done';
          fileItem.response = res;
        })
        .catch(err => {
          fileItem.status = 'error';
          fileItem.response = err;
        })
    }

    const getFileItemById = (id: string) => {
      return fileItems.value.find(i => i.id === id);
    }

    // 删除文件
    const removeFileById = (id: string) => {
      const fileItem = getFileItemById(id);
      if (fileItem) {
        const index = fileItems.value.indexOf(fileItem);
        fileItems.value.splice(index, 1);
      }
    }

    // provide
    provide(UPLOADER_KEY,
      reactive({
        removeFileById
      }) as unknown as UploaderProvideContext
    );

    return {
      inputRef,
      fileItems,
      handleTriggerClick,
      handleInputChange
    }
  },
});
</script>