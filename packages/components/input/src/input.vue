<template>
    <div
        :class="[
            'm-input',
            `m-input--size-${size}`,
            {
                'is--disabled': disabled,
                'is--readonly': readonly,
                'is--clearable': clearable,
                'is--focused': UIState.focused,
                'is--has-suffix': hasSuffix,
                'is--has-prefix': hasPrefix,
                'is--has-prepend': hasPrepend,
                'is--has-append': hasAppend
            }
        ]"
    >
        <span class="m-input__prepend" v-if="hasPrepend">
            <slot name="prepend"></slot>
        </span>
        <span class="m-input__prefix" v-if="$slots.prefix">
            <slot name="prefix"></slot>
        </span>
        <input
            class="m-input__inner"
            :placeholder="placeholder"
            :disabled="disabled"
            :value="modelValue"
            :type="type"
            @input="handleInput"
            @change="handleChange"
            @focus="handleFocus"
            @blur="handleBlur"
        />
        <span class="m-input__suffix" v-if="hasSuffix">
            <slot name="suffix"></slot>
            <m-icon
                class="m-input__clear-btn"
                @click="handleClear"
                v-if="showClearBtn"
                name="m-icon-close"
            ></m-icon>
        </span>
        <span class="m-input__append" v-if="hasAppend">
            <slot name="append"></slot>
        </span>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, reactive } from "vue";
import { UPDATE_MODEL_EVENT } from "@magic-design/utils/src/const";

type InputSize = 'mini' | 'small' | 'medium' | 'large';
type InputNativeType = 'text' | 'password';

export default defineComponent({
    name: "MInput",
    props: {
        modelValue: {
            type: String,
            default: ""
        },
        size: {
            type: String as PropType<InputSize>,
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
            default: false
        },
        placeholder: {
            type: String,
            default: ""
        },
        type: {
            type: String as PropType<InputNativeType>,
            default: "text"
        }
    },
    emits: [UPDATE_MODEL_EVENT, 'clear', 'change', 'focus', 'blur'],
    setup(props, { emit, slots }) {
        const UIState = reactive({
            focused: false,
        });

        const handleFocus = () => {
            UIState.focused = true;
            emit("focus");
        }
        const handleBlur = () => {
            UIState.focused = false;
            emit("blur");
        }

        const handleInput = (e: Event) => {
            const inputEl = e.target as HTMLInputElement;
            const value = inputEl.value;

            emit(UPDATE_MODEL_EVENT, value);
        }

        const handleChange = (e: Event) => {
            const inputEl = e.target as HTMLInputElement;
            const value = inputEl.value;

            emit('change', value);
        }

        const handleClear = () => {
            emit(UPDATE_MODEL_EVENT, '');
            emit('clear');
        }

        const showClearBtn = computed(() => {
            return props.clearable && props.modelValue;
        });

        const hasSuffix = computed(() => {
            return slots.suffix || showClearBtn.value;
        });

        const hasPrefix = computed(() => {
            return slots.prefix;
        });

        const hasPrepend = computed(() => slots.prepend);
        const hasAppend= computed(() => slots.append);

        return {
            handleInput,
            handleChange,
            handleClear,
            handleFocus,
            handleBlur,
            showClearBtn,
            hasPrepend,
            hasAppend,
            hasSuffix,
            hasPrefix,
            UIState
        }
    },
});
</script>
