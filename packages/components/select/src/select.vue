<template>
    <div :class="[
        'm-select'
    ]">
        <m-trigger v-model:visible="UIState.dropdownVisible">
            <m-input readonly :placeholder="placeholder" @click="toggleDropdownVisible">
                <template #suffix>
                    <m-icon
                        class="m-select-arrow"
                        :name="`m-icon-arrow-${UIState.dropdownVisible ? 'up' : 'down'}`"
                    ></m-icon>
                </template>
            </m-input>

            <template #content>
                <slot></slot>
            </template>
        </m-trigger>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import MTrigger from "@magic-design/components/trigger";
import MInput from "@magic-design/components/input";
import MIcon from "@magic-design/components/icon";

export default defineComponent({
    components: {
        MTrigger,
        MInput,
        MIcon
    },
    name: "MSelect",

    props: {
        placeholder: {
            type: String,
            default: "请选择"
        }
    },

    setup(props, { emit }) {
        const UIState = reactive({
            dropdownVisible: false
        })

        const toggleDropdownVisible = () => {
            UIState.dropdownVisible = !UIState.dropdownVisible;
        }


        return {
            UIState,
            toggleDropdownVisible
        }
    }
});
</script>
