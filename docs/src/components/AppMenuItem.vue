<template>
  <div :class="['app-menu-item', item.type === 'group' ? 'is--group' : '']">
    <router-link class="app-menu-content" :to="path">
      <span class="app-menu-item__icon">
        <i :class="item.icon"></i>
      </span>
      <span class="app-menu-item__label">{{ item.label }}</span>
    </router-link>
    <div class="app-submenu" v-if="item.type === 'group' && item.children?.length">
      <app-menu-item :root="root" v-for="i in item.children" :item="i" :key="i.label"></app-menu-item>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { MenuItemRaw } from "../types";

export default defineComponent({
  name: "AppMenuItem",
  props: {
    item: {
      type: Object as PropType<MenuItemRaw>,
      required: true,
    },
    root: {
      type: String,
    }
  },
  setup(props) {
    return {
      path: computed(() => `${props.root}/${props.item.path}`)
    }
  },
});
</script>
