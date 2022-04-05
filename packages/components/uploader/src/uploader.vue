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
      <pre>{{ fileItems }}</pre>
      <!-- <ul>
        <li v-for="file in fileItems">{{ file.name }}</li>
      </ul>-->
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, reactive, Ref, ref, toRefs, watch } from "vue";
import { FileItem, UploadRequest } from "./interface";
import ajax from './ajax';
import { blobToDataUrl } from "@magic-design/utils/src";

export default defineComponent({
  name: "MUploader",
  props: {
    action: {
      required: true,
      type: String
    },
    fileList: {
      type: Array as PropType<FileItem[]>,
      default: () => []
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
  emits: ['update:file-list'],
  setup(props, { emit }) {
    const inputRef = ref(null as HTMLInputElement);

    const fileItems = <FileItem[]>reactive(props.fileList);
    watch(fileItems, (val) => {
      emit("update:file-list", val);
    })

    const handleInputFiles = async (files: FileList) => {
      const items = await handlerInitFiles(files);
      addItems(items);

      if (props.autoUpload) {
        uploadFiles(items);
      }
    }

    // 图片初始化处理
    const handlerInitFiles = async (files: FileList) => {
      const p_items = [...files].map(async file => {
        return {
          file,
          name: file.name,
          url: await blobToDataUrl(file),
          response: '',
          percent: 0,
          status: 'init'
        }
      });
      const items = await Promise.all(p_items);
      return items as FileItem[];
    }

    // 添加新文件
    const addItems = (items: FileItem[]) => {
      fileItems.push(...items);
    }

    const uploadFiles = (items: FileItem[]) => {
      items.forEach(async (item) => {
        await props.request({
          method: 'post',
          url: props.action,
          fileItem: item,
          name: "file"
        }).then(res => {
          item.status = 'done';
          item.response = res;
        }).catch(err => {
          item.status = 'error';
          item.response = err;
        })
      })
    }

    // 触发上传按钮
    const handleTriggerClick = () => {
      if (!props.disabled) {
        inputRef.value.value = null;
        inputRef.value.click();
      }
    }

    // file-input文件变更
    const handleInputChange = (e: DragEvent) => {
      const files = (e.target as HTMLInputElement).files;
      handleInputFiles(files);
    }

    return {
      inputRef,
      fileItems,
      handleTriggerClick,
      handleInputChange,
    }
  },
});
</script>