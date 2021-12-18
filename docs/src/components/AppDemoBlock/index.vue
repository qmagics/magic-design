<template>
    <div :class="['app-demo-block', {
        'is--source-visible': state.sourceVisible
    }]">
        <div class="app-demo-block__header">
            <h2 class="app-demo-block__title" :id="id">{{ title }}</h2>
            <p class="app-demo-block__subtitle">{{ subtitle }}</p>
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
            <pre>{{ source }}</pre>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
    props: {
        id: String,
        title: String,
        subtitle: String,
        source: String
    },
    setup() {
        const state = reactive({
            sourceVisible: false
        });

        const toggleSourceBlock = () => {
            state.sourceVisible = !state.sourceVisible;
        };

        const copySource = () => {

        }

        return {
            toggleSourceBlock,
            copySource,
            state
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
        border-radius: $radius 0;
        border-bottom-style: dashed;
    }
    &__toolbar {
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid $colorBorderLight;
        border-top: none;
        border-radius: 0 $radius;

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
        padding: 30px 20px;
        background-color: $colorBgLight;
        border-radius: 0 $radius;
        border: 1px solid $colorBorderLight;
        border-top: none;
    }
}
</style>