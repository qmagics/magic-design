<template>
    <div class="m-checkbox-group">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { CHECKBOX_GROUP_KEY, UPDATE_MODEL_EVENT } from "@magic-design/utils/src/const";
import { defineComponent, provide, toRef, reactive, PropType } from "vue";

type ModelValueType = (string | number | boolean)[];

export default defineComponent({
    name: "MCheckboxGroup",
    props: {
        modelValue: {
            type: Array as PropType<ModelValueType>
        },
        disabled: Boolean
    },
    emits: [UPDATE_MODEL_EVENT, 'change'],
    setup(props, { emit }) {
        const emitChange = (val, checked, e) => {
            let newModelValue = [...props.modelValue];
            if (!!checked) {
                if (!newModelValue.includes(val)) {
                    newModelValue.push(val);
                }
            }
            else {
                newModelValue = newModelValue.filter(i => i !== val);
            }
            emit(UPDATE_MODEL_EVENT, newModelValue);
        }

        provide(CHECKBOX_GROUP_KEY, reactive({
            emitChange,
            disabled: toRef(props, "disabled"),
            modelValue: toRef(props, "modelValue")
        }))
    }
})
</script>