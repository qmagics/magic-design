<template>
    <div :class="[
        'm-uploader-list',
        `m-uploader-list--${listType}`
    ]">
        <img v-for="i in fileItems" :src="i.url" />
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { FileItem, ListType } from "./interface";

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
    setup() {

    }
})
</script>