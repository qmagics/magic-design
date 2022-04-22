<template>
  <div class="demo-page--icon">
    <div class="demo-page__main">
      <app-demo-block v-for="i in config.demos" :item="i">
        <component :is="i.component"></component>
      </app-demo-block>
      <app-demo-block :item="{ id: 'store', title: '组件库', description: '这里包含了可以用 m-icon 调用的所有图标' }">
        <ul class="icon-list">
          <li class="icon-item" v-for="i in ICON_META.glyphs">
            <m-icon :name="ICON_META.css_prefix_text + i.font_class"></m-icon>
            <span>{{ i.font_class }}</span>
          </li>
        </ul>
      </app-demo-block>
      <app-docs-block :docs="config.docs"></app-docs-block>
    </div>
    <div class="demo-page__aside">
      <app-anchor-menu :menus="demos"></app-anchor-menu>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import usePageConfig from "@/hooks/usePageConfig";
import sourceCodeMap from './demo-store.$scm';
import ICON_META from './meta.json';

export default defineComponent({
  setup() {
    const config = usePageConfig({
      name: "MIcon",
      demePageGlob: import.meta.globEager('./demo-store/*.vue'),
      sourceCodeMap,
    });

    const demos = [
      ...config.demos,
      {
        id: "store",
        sort: 2,
        title: "图标库",
        description: ""
      }
    ];

    return {
      config,
      demos,
      ICON_META
    }
  },
});
</script>

<style lang="scss">
$borderColor: $colorBorderLight;
$itemWidth: 120px;
$itemHeight: 120px;
$border: 1px solid $borderColor;

.demo-page--icon {
  .icon-list {
    border-top: $border;
    border-left: $border;
    overflow: hidden;
    // display: flex;
    // flex-wrap: wrap;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }

  .icon-item {
    // width: $itemWidth;
    height: $itemHeight;
    padding: 25px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-right: $border;
    border-bottom: $border;
    cursor: pointer;
    transition: all .2s ease;

    &:hover {
      background-color: $colorBgLight;
    }

    [class^=m-icon] {
      font-size: 24px;
    }
  }
}
</style>
