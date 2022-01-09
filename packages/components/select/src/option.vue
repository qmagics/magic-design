<template>
    <li
        :class="[
            'm-option',
            {
                'is--active': isActive
            }
        ]"
        @click.stop="handleClick"
    >
        <slot>{{ label }}</slot>
    </li>
</template>

<script lang="ts">
import { SELECT_KEY } from "@magic-design/utils/src/const";
import { computed, defineComponent, getCurrentInstance, inject, PropType, reactive } from "vue";
import { OptionValue, OptionProxy, OptionLabel } from "./interface";

export default defineComponent({
    name: "MOption",

    props: {
        value: {
            type: [String, Number, Boolean] as PropType<OptionValue>
        },
        label: [String, Number] as PropType<OptionLabel>
    },

    setup(props, { emit,slots }) {
        const proxy = getCurrentInstance().proxy as unknown as OptionProxy;
        const select = inject(SELECT_KEY);
        const isActive = computed(() => {
            if (!select.props.multiple) {
                return isEqual(props.value, select.props.modelValue);
            }
        });

        select.onOptionCreate(proxy);

        const isEqual = (a: unknown, b: unknown) => {
            return a === b;
        }

        const cLabel = computed(() => {
            return props.label;
        })

        const handleClick = () => {
            select.onOptionSelect(proxy, true);
        }

        return {
            isActive,
            handleClick,
            cLabel
        }
    }
});
</script>
