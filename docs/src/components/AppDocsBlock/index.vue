<template>
    <div class="app-docs-block">
        <docs-item v-if="docs.props?.length" :docs="docs" type="props"></docs-item>
        <docs-item v-if="docs.events?.length" :docs="docs" type="events"></docs-item>
        <docs-item v-if="docs.slots?.length" :docs="docs" type="slots"></docs-item>
        <docs-item v-if="docs.methods?.length" :docs="docs" type="methods"></docs-item>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DocsItem from './docs-item.vue';

export default defineComponent({
    name: "AppDocsBlock",
    components: {
        DocsItem
    },
    props: {
        docs: {
            type: Object,
            required: true
        }
    }
});
</script>

<style lang="scss">
.app-docs-block {
    padding: 20px;
}
</style>