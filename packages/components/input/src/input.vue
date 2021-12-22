<template>
    <div
        :class="[
            'm-input',
            `m-input--size-${size}`,
            {
                'is--disabled': disabled,
                'is--readonly': readonly,
                'is--clearable': clearable
            }
        ]"
    >
        <span class="m-input__prepend" v-if="$slots.prepend">
            <slot name="prepend"></slot>
        </span>
        <span class="m-input__prefix" v-if="$slots.prefix">
            <slot name="prefix"></slot>
        </span>
        <input class="m-input__inner" :placeholder="placeholder" />
        <span class="m-input__suffix" v-if="$slots.suffix">
            <slot name="suffix"></slot>
        </span>
        <span class="m-input__append" v-if="$slots.append">
            <slot name="append"></slot>
        </span>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

type ButtonSize = 'mini' | 'small' | 'medium' | 'large';

export default defineComponent({
    name: "MInput",
    props: {
        modelValue: {
            type: String,
            default: ""
        },
        size: {
            type: String as PropType<ButtonSize>,
            default: "medium"
        },
        disabled: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        clearable: {
            type: Boolean,
            default: true
        },
        placeholder: {
            type: String,
            default: ""
        }
    },
    setup() { },
});
</script>
