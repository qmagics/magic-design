<template>
    <transition name="m-message-fade" @before-leave="onClose" @after-leave="$emit('destroy')">
        <div :class="classes" :style="styles" v-show="state.visible">
            <div class="m-message__content">
                {{ content }}
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeUnmount, onMounted, PropType, reactive } from "vue";
import { MessageType } from './interface';

export default defineComponent({
    name: "MMessage",
    props: {
        id: {
            type: String,
            default: ""
        },
        content: {
            type: String,
            required: true
        },
        type: {
            type: String as PropType<MessageType>,
            default: ""
        },
        duration: {
            type: Number,
            default: 3000
        },
        closable: Boolean,
        onClose: {
            type: Function as PropType<() => void>
        },
        offset: {
            type: Number,
            default: 50
        }
    },

    setup(props) {
        let timer = null;

        const state = reactive({
            visible: false
        });

        const classes = computed(() => {
            return [
                'm-message',
                `m-message--${props.type}`
            ]
        });

        const styles = computed(() => {
            return {
                top: `${props.offset}px`
            }
        });

        const startTimer = () => {
            timer = setTimeout(() => {
                state.visible = false;
            }, props.duration);
        }

        const clearTimer = () => {
            clearTimeout(timer);
            timer = null;
        }

        const close = () => {
            state.visible = false;
        }

        onMounted(() => {
            state.visible = true;
            startTimer();
        });

        onBeforeUnmount(() => {
            clearTimer();
        });

        return {
            state,
            classes,
            styles,
            close
        }
    }
});
</script>