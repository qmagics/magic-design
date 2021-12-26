<template>
    <div class="m-radio-group">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { RADIO_GROUP_KEY, UPDATE_MODEL_EVENT } from "@magic-design/utils/src/const";
import { defineComponent, provide, toRef, reactive } from "vue";

export default defineComponent({
    name: "MRadioGroup",
    props: {
        modelValue: {
            type: [String, Number, Boolean]
        }
    },
    emits: [UPDATE_MODEL_EVENT, 'change'],
    setup(props, { emit }) {
        const emitChange = (val) => {
            emit(UPDATE_MODEL_EVENT, val);
        }

        provide(RADIO_GROUP_KEY, reactive({
            emitChange,
            modelValue: toRef(props, "modelValue")
        }))
    }
})
</script>