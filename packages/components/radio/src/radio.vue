<template>
    <label
        :class="[
            'm-radio',
            {
                'is--checked': isChecked
            }
        ]"
    >
        <input
            class="m-radio__input"
            type="radio"
            :disabled="disabled"
            :value="value"
            :name="name"
            :checked="isChecked"
            @change="onChange"
        />
        <span class="m-radio__icon">
            <!-- <span lass="m-radio__icon"></span> -->
        </span>
        <span class="m-radio__label">
            <slot></slot>
        </span>
    </label>
</template>

<script lang="ts">
import { UPDATE_MODEL_EVENT } from "@magic-design/utils/src/const";
import { computed, defineComponent, reactive } from "vue";

export default defineComponent({
    name: "MRadio",
    props: {
        modelValue: {
            type: [String, Number, Boolean],
        },
        value: {
            type: [String, Number, Boolean],
            default: true
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        name: String
    },
    emits: [UPDATE_MODEL_EVENT, 'change'],
    setup(props, { emit }) {
        const isChecked = computed(() => {
            return props.modelValue === props.value;
        });

        const onChange = (e: Event) => {
            const checked = (e.target as HTMLInputElement).checked!;
            if (checked) {
                emit(UPDATE_MODEL_EVENT, props.value);
            }
        }

        return {
            isChecked,
            onChange
        }
    },
});
</script>
