<template>
  <AppHeader></AppHeader>
  <AppMain>
    <router-view></router-view>
  </AppMain>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import AppHeader from "@/components/AppHeader.vue";
import AppMain from "@/components/AppMain.vue";
import useAnchorScroll from "@/hooks/useAnchorScroll";

export default defineComponent({
  components: {
    AppHeader,
    AppMain
  },
  setup() {
    useAnchorScroll();
  },
});
</script>
