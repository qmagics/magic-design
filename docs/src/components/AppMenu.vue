<template>
  <nav class="app-menu">
    <app-menu-item :root="root" v-for="i in items" :item="i" :key="i.label"></app-menu-item>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { MenuItemRaw } from "../types";
import AppMenuItem from "./AppMenuItem.vue";

export default defineComponent({
  components: {
    AppMenuItem
  },
  props: {
    root: {
      type: String,
      default: "/",
    },
    items: {
      type: Array as PropType<MenuItemRaw[]>,
      default: () => [],
    },
  },
});
</script>


<style lang="scss">
.app-menu {
}
.app-menu-item {
  margin-bottom: 5px;
  .app-menu-content {
    display: block;
    padding: 12px 20px;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: $colorBgLight;
    }

    &.router-link-active {
      background-color: $colorBgLight;
      color: $colorPrimary;
    }
  }
  .app-submenu {
  }

  &.is--group {
    font-weight: normal;
    & > .app-menu-content {
      color: rgb(135, 159, 179);
      padding-bottom: 5px;
      margin-bottom: 10px;
    }
  }

  &__label {
  }
  &__icon {
  }
}
</style>