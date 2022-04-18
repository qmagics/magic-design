<template>
    <div ref="triggerRef" class="m-trigger__trigger" @click="onTriggerClick">
        <slot name="default"></slot>
    </div>
    <MTeleport>
        <div
            class="m-trigger__content"
            v-show="contentVisible"
            v-clickoutside:[clickoutsideOptions.args.value]="clickoutsideOptions.handler"
            :style="contentStyle"
        >
            <slot name="content"></slot>
        </div>
    </MTeleport>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, reactive, PropType, onUpdated, watch, computed, Ref, getCurrentInstance } from "vue";
import MTeleport from "./teleport.vue";
import { clickoutside } from '@magic-design/directives';

const useContentLayout = (props, triggerRef: Ref<HTMLElement>) => {
    const instance = getCurrentInstance();

    const contentVisible = ref(props.visible);
    const contentStyle = reactive({
        left: '',
        top: '',
        width: ''
    });

    const refreshContentPosition = () => {
        const containerEl = triggerRef.value;
        const { width, height } = containerEl?.getBoundingClientRect();
        const top = containerEl.offsetTop;
        const left = containerEl.offsetLeft;

        const [offsetX, offsetY] = props.popperOffset;
        contentStyle.width = width + 'px';
        contentStyle.left = left + (offsetX || 0) + 'px';
        contentStyle.top = top + (offsetY || 0) + height + 'px';
    }

    const clickoutsideOptions = {
        args: computed(() => {
            return [triggerRef.value];
        }),
        handler: () => {
            contentVisible.value = false;
            instance.emit("update:visible", false);
        }
    }

    watch(() => props.visible, (val) => {
        contentVisible.value = val;
        refreshContentPosition();
    })

    onMounted(() => {
        refreshContentPosition();
    });

    onUpdated(() => {
        if (contentVisible.value) {
            refreshContentPosition();
        }
    });

    return {
        contentVisible,
        contentStyle,
        clickoutsideOptions
    }
}

export default defineComponent({
    name: "MTrigger",

    components: {
        MTeleport
    },

    directives: {
        clickoutside
    },

    props: {
        popperOffset: {
            type: Array as PropType<number[]>,
            default: () => []
        },
        visible: Boolean
    },

    emits: ['update:visible'],

    setup(props, { emit }) {

        const triggerRef = ref<HTMLElement>();

        const { contentVisible, contentStyle, clickoutsideOptions } = useContentLayout(props, triggerRef);

        const onTriggerClick = () => {
            contentVisible.value = !contentVisible.value;
            emit("update:visible", contentVisible.value);
        }

        return {
            contentVisible,
            triggerRef,
            onTriggerClick,
            contentStyle,
            clickoutsideOptions
        }
    }
})
</script>