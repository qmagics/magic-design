<template>
    <div :class="['app-demo-block', {
        'is--source-visible': state.sourceVisible
    }]">
        <div class="app-demo-block__header">
            <h2 class="app-demo-block__title" :id="item.id">{{ item.title }}</h2>
            <p class="app-demo-block__subtitle">{{ item?.description }}</p>
        </div>
        <div class="app-demo-block__example">
            <slot></slot>
        </div>
        <div class="app-demo-block__toolbar">
            <a class="tool-btn" @click="copySource">
                <i class="qd-icon-copy"></i>
            </a>
            <a class="tool-btn" @click="toggleSourceBlock">
                <i class="qd-icon-code"></i>
            </a>
        </div>
        <div class="app-demo-block__source" v-show="state.sourceVisible">
            <pre v-html="highlightSource"></pre>
        </div>
    </div>
</template>

<script lang="ts">
import { DemoItem } from "@/types";
import { computed, defineComponent, PropType, reactive } from "vue";
import highlight from 'highlight.js';
// import 'highlight.js/styles/an-old-hope.css'
// import 'highlight.js/styles/atom-one-dark-reasonable.css'
import 'highlight.js/styles/color-brewer.css' //1
// import 'highlight.js/styles/foundation.css'
// import 'highlight.js/styles/lioshi.css'
// import 'highlight.js/styles/vs2015.css'

export default defineComponent({
    name: "AppDemoBlock",
    props: {
        // id: String,
        // title: String,
        // subtitle: String,
        // source: String
        item: {
            type: Object as PropType<DemoItem>,
            required: true
        }
    },
    setup(props) {
        const state = reactive({
            sourceVisible: true
        });

        const toggleSourceBlock = () => {
            state.sourceVisible = !state.sourceVisible;
        };

        const copySource = () => {

        }

        const highlightSource = computed(() => {
            const str = highlight.highlight(props.item.source as string, { language: "html" }).value;
            return str;
        });

        return {
            toggleSourceBlock,
            copySource,
            state,
            highlightSource
        }
    }
})
</script>

<style lang="scss">
.app-demo-block {
    margin-bottom: 20px;
    padding: 20px;
    // border-bottom: 1px solid $colorBgLight;

    &.is--source-visible {
        .app-demo-block__toolbar {
            border-radius: 0;
        }
    }

    &__header {
    }
    &__title {
        font-size: 20px;
    }
    &__subtitle {
        color: $colorFontLight;
    }
    &__example {
        padding: 30px 20px;
        border: 1px solid $colorBorderLight;
        border-radius: $radius $radius 0 0;
        border-bottom-style: dashed;
    }
    &__toolbar {
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid $colorBorderLight;
        border-top: none;
        border-radius: 0 0 $radius $radius;

        .tool-btn {
            border-radius: 4px;
            cursor: pointer;
            padding: 5px 12px;
            display: flex;
            align-items: center;
            transition: all 0.2s ease;

            [class^="qd-icon"] {
                font-size: 20px;
            }

            &:hover {
                background: $colorBgLight;
            }
        }
    }
    &__source {
        padding: 20px 20px;
        background-color: $colorBgLight;
        border-radius: 0 0 $radius $radius;
        border: 1px solid $colorBorderLight;
        border-top: none;
        overflow: auto;

        pre {
            line-height: 26px;
        }
    }
}
</style>