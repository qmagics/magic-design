<template>
  <div class="demo-page--button">
    <div class="demo-page__main">
      <app-demo-block v-for="i in config.demos" :item="i">
        <component :is="i.component"></component>
      </app-demo-block>
    </div>
    <div class="demo-page__aside">
      <app-anchor-menu :menus="config.demos"></app-anchor-menu>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import AppDemoBlock from '@/components/AppDemoBlock/index.vue';
import AppAnchorMenu from '@/components/AppAnchorMenu.vue';
import usePageConfig from "@/hooks/usePageConfig";
import sourceCodeMap from './demo-store.$scm';

export default defineComponent({
  components: {
    AppDemoBlock,
    AppAnchorMenu
  },
  setup() {
    const config = usePageConfig({
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
.demo-page--button {
  .m-button {
    margin: 0 8px 12px 0;
  }
}
</style>
