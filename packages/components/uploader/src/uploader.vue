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
    <div class="m-uploader__list">
      <FileList :file-items="fileItems"></FileList>
      <!-- <ul>
        <li v-for="file in fileItems">{{ file.name }}</li>
      </ul>-->
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, reactive, Ref, ref, watch } from "vue";
import { FileItem, UploadRequest } from "./interface";
import ajax from './ajax';
import { blobToDataUrl } from "@magic-design/utils/src";
import { isImage } from "./utils";
import FileList from './file-list.vue';

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
    }
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

    return {
      inputRef,
      fileItems,
      handleTriggerClick,
      handleInputChange
    }
  },
});
</script>