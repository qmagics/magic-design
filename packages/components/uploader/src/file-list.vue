<template>
    <div :class="[
        'm-uploader-list',
        `m-uploader-list--${listType}`
    ]">
        <component
            v-for="(fileItem, index) in fileItems"
            :key="index"
            :is="ItemComp"
            :fileItem="fileItem"
            :listType="listType"
        ></component>

        <div class="m-uploader-item-trigger" v-if="hasUploadBtn" @click="chooseFile">
            <i class="m-icon-plus"></i>
        </div>
    </div>
</template>

<script lang="ts">
import { UPLOADER_KEY } from "@magic-design/utils/src/const";
import { computed, defineComponent, inject, PropType } from "vue";
import { FileItem, ListType } from "./interface";
import ItemCard from './item-card.vue';
import ItemText from './item-text.vue';

export default defineComponent({
    props: {
        fileItems: {
            type: Array as PropType<FileItem[]>,
            default: () => []
        },
        listType: {
            type: String as PropType<ListType>,
            default: 'text'
        }
    },
    setup(props) {
        const uploader = inject(UPLOADER_KEY);

        const ItemComp = computed(() => {
            return props.listType.includes('card') ? ItemCard : ItemText;
        });

        const chooseFile = uploader.chooseFile;

        const hasUploadBtn = computed(() => {
            return props.listType.includes('card') && !uploader.disabled;
        });

        return {
            ItemComp,
            chooseFile,
            hasUploadBtn
        }
    }
})
</script>