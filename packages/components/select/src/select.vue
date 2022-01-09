<template>
    <div
        :class="[
            'm-select',
            {
                'is--dropdown-open': State.dropdownVisible,
                'is--disabled': disabled,
                'is--multiple': multiple,
            }
        ]"
        @mouseenter="() => State.hovered = true"
        @mouseleave="() => State.hovered = false"
    >
        <m-trigger v-model:visible="State.dropdownVisible" :popper-offset="[0, 5]">
            <m-input
                :model-value="displayLabel"
                readonly
                :placeholder="placeholder"
                @click="toggleDropdownVisible"
                :clearable="showClearBtn"
                @clear="onClear"
                :size="size"
            >
                <template #suffix>
                    <m-icon v-show="!showClearBtn" class="m-select-arrow" name="m-icon-arrow-down"></m-icon>
                </template>
            </m-input>

            <template #content>
                <ul class="m-select__dropdown">
                    <slot></slot>
                </ul>
            </template>
        </m-trigger>
    </div>
</template>

<script lang="ts">
import { cloneVNode, computed, defineComponent, h, PropType, provide, reactive, ref, renderSlot, withDirectives } from "vue";
import MTrigger from "@magic-design/components/trigger";
import MInput from "@magic-design/components/input";
import MIcon from "@magic-design/components/icon";
import { SELECT_KEY, UPDATE_MODEL_EVENT } from "@magic-design/utils/src/const";
import { SelectModelValue, SelectProvideContext } from "./interface";
import { OptionProxy } from "./interface";

type SelectSize = 'mini' | 'small' | 'medium' | 'large';

export default defineComponent({
    components: {
        MTrigger,
        MInput,
        MIcon
    },

    name: "MSelect",

    props: {
        placeholder: {
            type: String,
            default: "请选择"
        },
        modelValue: {
            type: [String, Number, Boolean] as PropType<SelectModelValue>
        },
        multiple: Boolean,
        disabled: Boolean,
        size: {
            type: String as PropType<SelectSize>,
            default: "medium"
        }
    },

    emits: [UPDATE_MODEL_EVENT, 'change'],

    setup(props, { emit, slots }) {
        const State = reactive({
            dropdownVisible: false,
            optionsMap: new Map(),
            hovered: false,
        });

        const displayLabel = computed(() => {
            const option = getOptionByValue(props.modelValue);
            if (option) {
                return option.cLabel;
            }
            else {
                return '';
            }
        });

        const showClearBtn = computed(() => {
            // return true;
            return State.hovered && (!!props.modelValue);
        });

        const getOptionByValue = (value): OptionProxy => {
            return State.optionsMap.get(value);
        }

        const toggleDropdownVisible = () => {
            State.dropdownVisible = !State.dropdownVisible;
        }

        const triggerChange = (val) => {
            if (val !== props.modelValue) {
                emit("change", val);
            }
        }

        const onOptionSelect = (optionProxy, bl: boolean) => {
            if (!props.multiple) {
                emit(UPDATE_MODEL_EVENT, optionProxy.value);
                triggerChange(optionProxy.value);
                State.dropdownVisible = false;
            }
        }

        const onOptionCreate = (optionProxy: OptionProxy) => {
            State.optionsMap.set(optionProxy.value, optionProxy);
        }

        const onClear = () => {
            emit(UPDATE_MODEL_EVENT, '');
            triggerChange('');
        }

        provide(SELECT_KEY,
            reactive({
                props,
                onOptionSelect,
                onOptionCreate
            }) as unknown as SelectProvideContext
        );

        return {
            State,
            toggleDropdownVisible,
            displayLabel,
            showClearBtn,
            onClear
        }

        // const optionsSlots = slots.default?.();
        // const options = optionsSlots.map(i => cloneVNode(i));

        // return () => {
        //     return h('div',
        //         {
        //             class: [
        //                 'm-select',
        //                 {
        //                     'is--dropdown-open': State.dropdownVisible,
        //                     'is--disabled': props.disabled,
        //                     'is--multiple': props.multiple,
        //                 }
        //             ]
        //         },
        //         h(MTrigger,
        //             {
        //                 visible: State.dropdownVisible,
        //                 on: {
        //                     'update:visible': (val) => { State.dropdownVisible = val; }
        //                 },
        //                 popperOffset: [0, 5]
        //             },
        //             {
        //                 default: () => h(MInput,
        //                     {
        //                         modelValue: displayLabel.value,
        //                         readonly: true,
        //                         placeholder: props.placeholder,
        //                         onClick: toggleDropdownVisible
        //                     },
        //                     {
        //                         suffix: () => h(MIcon, {
        //                             class: 'm-select-arroww',
        //                             name: 'm-icon-arrow-down'
        //                         })
        //                     }
        //                 ),
        //                 content: () => h('ul',
        //                     {
        //                         class: 'm-select__dropdown',
        //                     },
        //                     optionsSlots
        //                 )
        //             }
        //         )
        //     )
        // }
    }
});
</script>
