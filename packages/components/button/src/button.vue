<template>
  <button
    :class="[
      'm-button',
      `m-button--size-${size}`,
      `m-button--type-${type}`,
      `m-button--state-${state}`,
      {
        'is--disabled': disabled,
        'is--loading': loading,
        'is--icon-only': !$slots.default
      }
    ]"
    :type="nativeType"
    :autofocus="autofocus"
    @click="handleClick"
  >
    <span class="m-button-icon" v-if="loading || icon">
      <!-- <m-icon-loading v-if="loading" name="m-icon-loading"></m-icon-loading> -->
      <!-- <component v-else :is="icon"></component> -->
      <m-icon v-if="loading" name="m-icon-loading"></m-icon>
      <m-icon :name="icon"></m-icon>
    </span>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script lang="ts">
import { defineComponent, PropType, Component } from "vue";
type ButtonNativeType = "button" | "submit" | "reset";

export default defineComponent({
  name: "MButton",
  props: {
    loading: Boolean,
    icon: {
      type: [String, Object] as PropType<string | Component>,
      default: "",
    },
    size: {
      type: String,
      default: "medium",
    },
    type: {
      type: String,
      default: "secondary",
    },
    nativeType: {
      type: String as PropType<ButtonNativeType>,
      default: "button",
    },
    state: {
      type: String,
      default: "default",
    },
    disabled: Boolean,
    autofocus: Boolean,
  },
  emits: {
    click: (e: MouseEvent) => e instanceof MouseEvent,
  },
  setup(props, { emit }) {
    const handleClick = (e: MouseEvent) => {
      emit("click", e);
    };
    return {
      handleClick,
    };
  },
});
</script>