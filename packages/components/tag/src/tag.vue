<template>
    <span
        :class="[
            'm-tag',
            `m-tag--state-${state}`,
            `m-tag--size-${size}`,
            {
                'is--checked': checked,
                'is--checkable': checkable
            }
        ]"
        @click="onClick"
    >
        <slot></slot>
    </span>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

type TagState = 'secondary' | 'primary' | 'success' | 'warning' | 'danger';
type TagSize = 'mini' | 'small' | 'medium' | 'large';

export default defineComponent({
    name: "MTag",
    props: {
        size: {
            type: String as PropType<TagSize>,
            default: "medium"
        },
        state: {
            type: String as PropType<TagState>,
            default: "secondary"
        },
        checked: {
            type: Boolean,
            default: false
        },
        checkable: Boolean
    },

    emits: ['update:checked', 'checked'],

    setup(props, { emit }) {
        const onClick = () => {
            if (!props.checkable) return;

            emit("update:checked", !props.checked);
        }

        return {
            onClick
        }
    }
});
</script>