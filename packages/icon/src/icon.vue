<template>
  <i :class="name"></i>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MIcon",
  props: {
    name: String,
  },
  setup() {},
});
</script>
