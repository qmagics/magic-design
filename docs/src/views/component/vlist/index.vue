<template>
  <div class="demo-page--vlist">
    <div class="demo-page__main">
      <app-demo-block v-for="i in config.demos" :item="i">
        <component :is="i.component"></component>
      </app-demo-block>
      <app-docs-block :docs="config.docs"></app-docs-block>
    </div>
    <div class="demo-page__aside">
      <app-anchor-menu :menus="config.demos"></app-anchor-menu>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import usePageConfig from "@/hooks/usePageConfig";
import sourceCodeMap from './demo-store.$scm';

export default defineComponent({
  setup() {
    const config = usePageConfig({
      name: "MVlist",
      demePageGlob: import.meta.globEager('./demo-store/*.vue'),
      sourceCodeMap,
    });

    return {
      config
    }
  },
});
</script>

<style lang="scss">
.demo-page--vlist {}
</style>
