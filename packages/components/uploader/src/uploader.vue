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
    <div class="m-uploader__list">...</div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MUploader",
  props: {
    action: {
      required: true,
      type: String
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
    }
  },
  setup(props, { emit }) {

    const inputRef = ref(null as HTMLInputElement);

    const handleInputFiles = (files: FileList) => {
      
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