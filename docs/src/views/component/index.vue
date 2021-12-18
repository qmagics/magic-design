<template>
  <div class="page page-component">
    <aside class="page-aside page-aside--left">
      <app-menu :items="menus" root="/component"></app-menu>
    </aside>
    <main class="page-main">
      <router-view></router-view>
    </main>
    <!-- <aside class="page-aside page-aside--right">
      
    </aside>-->
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, } from "vue";
import AppMenu from "@/components/AppMenu.vue";
import menus from "./menus";

export default defineComponent({
  components: {
    AppMenu,
  },
  setup() {
    return {
      menus,
    };
  },

});
</script>

<style lang="scss">
.page-component {
  &__aside {
  }
  &__main {
    // padding: 20px;
    // background-color: $colorBgWhite;
  }
}
</style>
