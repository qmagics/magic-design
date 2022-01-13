<template>
    <a
        :class="[
            'm-link',
            `m-link--state-${state}`,
            `${underline === 'hover' ? 'm-link--underline-hover' : (underline ? 'm-link--underline' : '')}`,
            {
                'is--disabled': disabled
            }
        ]"
        :href="href"
        :target="target"
    >
        <span class="m-link__inner">
            <slot></slot>
        </span>
    </a>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

type LinkState = 'secondary' | 'primary' | 'warning' | 'danger' | 'success';

export default defineComponent({
    name: "MLink",
    props: {
        underline: {
            type: [Boolean, String] as PropType<boolean | 'hover'>,
            default: 'hover'
        },
        state: {
            type: String as PropType<LinkState>,
            default: "primary"
        },
        disabled: Boolean,
        href: String,
        target: String
    }
})
</script>