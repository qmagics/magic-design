<template>
    <div class="app-highlight">
        <pre v-html="highlightSource"></pre>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import highlight from 'highlight.js';
import 'highlight.js/styles/color-brewer.css';

const props = defineProps({
    code: {
        type: String,
        default: ''
    },
    lang: {
        type: String,
        default: "html"
    }
});

const highlightSource = computed(() => {
    const str = highlight.highlight(props.code as string, { language: props.lang }).value;
    return str;
});
</script>

<script lang="ts">
export default {
    name: "AppHighlight"
}
</script>

<style lang="scss">
.app-highlight {
    background-color: $colorBgLight;
    padding:5px 16px;
    border-radius: 4px;
}
</style>