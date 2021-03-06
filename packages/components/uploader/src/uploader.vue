<template>
  <div :class="[
    'm-uploader'
  ]">
    <div class="m-uploader__trigger" @click="chooseFile" v-show="showButtonTrigger">
      <slot name="trigger">
        <m-button type="primary" :disabled="disabled">点击上传</m-button>
      </slot>
      <input class="m-uploader-input" type="file" :multiple="multiple" :accept="accept" ref="inputRef"
        @change="handleInputChange" />
    </div>
    <div class="m-uploader__tip" v-if="tip">{{ tip }}</div>
    <FileList :file-items="fileItems" :listType="listType"></FileList>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, PropType, provide, reactive, Ref, ref, toRefs, watch } from "vue";
import { FileItem, UploadRequest, UploaderProvideContext, ListType } from "./interface";
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
      type: String as PropType<ListType>,
      default: 'text'
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
    const fileItems = ref<FileItem[]>();

    const normalizeFileItems = (items: FileItem[]) => {
      const list = items.map((item, index) => {
        const status = item.status || 'done';
        return {
          ...item,
          id: item.id || getUID(index),
          status,
          percent: item.percent ?? (['error', 'init'].indexOf(status) > -1 ? 0 : 1)
        } as FileItem
      });
      fileItems.value = list;
    }

    normalizeFileItems(props.fileList);
    watch(() => props.fileList, newList => {
      if (newList) {
        normalizeFileItems(newList);
      }
    }, { deep: true, immediate: true });

    // 是否显示上传按钮
    const showButtonTrigger = computed(() => {
      return !props.listType.includes('card');
    });

    // 选择文件
    const chooseFile = () => {
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
      return reactive<FileItem>({
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
      fileItem.status = 'pending';

      props.request({
        method: 'post',
        url: props.action,
        fileItem: fileItem,
        name: "file"
      })
        .then((res) => {
          fileItem = getFileItemById(fileItem.id);

          fileItem.status = 'done';
          fileItem.response = res;
        })
        .catch(err => {
          fileItem.status = 'error';
          fileItem.response = err;
        });
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
        ...toRefs(props),
        removeFileById,
        chooseFile,
      }) as unknown as UploaderProvideContext
    );

    return {
      inputRef,
      fileItems,
      chooseFile,
      handleInputChange,
      showButtonTrigger
    }
  },
});
</script>