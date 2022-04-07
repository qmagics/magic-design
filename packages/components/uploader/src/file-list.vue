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
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
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
        const ItemComp = computed(() => {
            return props.listType.includes('card') ? ItemCard : ItemText;
        });
        return {
            ItemComp
        }
    }
})
</script>