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
      <ul>
        <li v-for="file in fileList">{{ file.name }}</li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import { FileItem } from "./interface";
import ajax from './ajax';

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
      type: Function as PropType<() => Promise<any>>,
      default: ajax
    }
  },
  setup(props, { emit }) {

    const inputRef = ref(null as HTMLInputElement);

    const handleInputFiles = (files: FileList) => {
      if (props.autoUpload) {
        uploadFiles(files);
      }
    }

    const uploadFiles = (files: FileList) => {
      // props.request()
    }

    const handleTriggerClick = () => {
      if (!props.disabled) {
        inputRef.value.value = null;
        inputRef.value.click();
      }
    }

    const handleInputChange = (e: DragEvent) => {
      const files = (e.target as HTMLInputElement).files;
      handleInputFiles(files);
    }

    return {
      inputRef,
      handleTriggerClick,
      handleInputChange
    }
  },
});
</script>