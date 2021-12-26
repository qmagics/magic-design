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
import { RADIO_GROUP_KEY, UPDATE_MODEL_EVENT } from "@magic-design/utils/src/const";
import { computed, defineComponent, inject, reactive } from "vue";

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
        const radioGroup = inject(RADIO_GROUP_KEY, undefined);

        const isInGroup = computed(() => !!radioGroup);

        const isChecked = computed(() => {
            let v = isInGroup.value ? radioGroup.modelValue : props.modelValue;
            return v === props.value;
        });

        const onChange = (e: Event) => {
            const checked = (e.target as HTMLInputElement).checked!;

            if (isInGroup.value) {
                radioGroup.emitChange(props.value);
            } else {
                if (checked) {
                    emit(UPDATE_MODEL_EVENT, props.value);
                }
            }
        }

        return {
            isChecked,
            onChange
        }
    },
});
</script>
