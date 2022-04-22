<template>
  <div class="page page-component">
    <aside class="page-aside page-aside--left">
      <app-menu :items="menus" root="/component"></app-menu>
    </aside>
    <main class="page-main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppMenu from "@/components/AppMenu.vue";
import menus from "./menus";

export default defineComponent({
  components: {
    AppMenu,
  },
  props: {
    componentName: {
      type: String,
      required: true
    }
  },
  setup() {
    return {
      menus
    };
  },

});
</script>

<style lang="scss">
.page-component {
  &__aside {}

  &__main {}
}
</style>
