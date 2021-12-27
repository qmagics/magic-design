<template>
    <label
        :class="[
            'm-checkbox',
            {
                'is--checked': isChecked,
                'is--disabled': isDisabled
            }
        ]"
    >
        <input
            class="m-checkbox__input"
            type="checkbox"
            :disabled="disabled"
            :value="value"
            :name="name"
            :checked="isChecked"
            @change="onChange"
        />
        <span class="m-checkbox__icon"></span>
        <span class="m-checkbox__label">
            <slot></slot>
        </span>
    </label>
</template>

<script lang="ts">
import { UPDATE_MODEL_EVENT, CHECKBOX_GROUP_KEY } from "@magic-design/utils/src/const";
import { isArray } from "@vue/shared";
import { computed, defineComponent, inject, reactive } from "vue";

type ModelValueType = string | number | boolean;

export default defineComponent({
    name: "MCheckbox",
    props: {
        modelValue: {
            type: [String, Number, Boolean, Array],
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
        const checkboxGroup = inject(CHECKBOX_GROUP_KEY, undefined);

        const isInGroup = computed(() => !!checkboxGroup);

        const isChecked = computed(() => {
            if (isInGroup.value) {
                return (checkboxGroup.modelValue || []).includes(props.value);
            }
            else {
                if (isArrayValue.value) {
                    return (props.modelValue as any[]).includes(props.value);
                }
                else {
                    return !!props.modelValue;
                }
            }
        });

        const isDisabled = computed(() => {
            return false;
        });

        const isArrayValue = computed(() => {
            return isArray(props.modelValue);
        });

        const onChange = (e: Event) => {
            const checked = (e.target as HTMLInputElement).checked;
            if (isInGroup.value) {
                checkboxGroup.emitChange(props.value, checked, e);
            } else {
                if (isArrayValue.value) {
                    let arr = [...props.modelValue as ModelValueType[]];

                    if (!!checked) {
                        if (!arr.includes(props.value)) {
                            arr.push(props.value);
                        }
                    }
                    else {
                        if (arr.includes(props.value)) {
                            arr = arr.filter(i => i !== props.value);
                        }
                    }

                    emit(UPDATE_MODEL_EVENT, arr);
                }
                else {
                    emit(UPDATE_MODEL_EVENT, !!checked ? true : false);
                }
            }
        }

        return {
            isChecked,
            isDisabled,
            onChange
        }
    },
});
</script>
