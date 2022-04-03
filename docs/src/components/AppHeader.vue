<template>
  <div class="app-header">
    <div class="app-header__left">
      <AppLogo></AppLogo>
    </div>
    <div class="app-header__right">
      <ul class="app-menu">
        <li class="app-menu__item">
          <router-link to="/guide">指南</router-link>
        </li>
        <li class="app-menu__item">
          <router-link to="/component">组件</router-link>
        </li>
        <li class="app-menu__item">
          <a href="https://github.com/qmagics/magic-design" target="_blank">
            <i class="md-icon-github"></i>
          </a>
        </li>
      </ul>
      <div class="app-toolbar">
        <div class="theme-mode" @click="toggleTheme">
          <i :class="`md-icon-${currentTheme}`"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import AppLogo from '@/components/AppLogo.vue';

export default defineComponent({
  components: {
    AppLogo
  },
  setup() {
    const currentTheme = ref("light");
    const toggleTheme = () => {
      currentTheme.value = currentTheme.value === "light" ? "dark" : "light";
      document.body.setAttribute("m-theme", currentTheme.value);
    };

    return {
      currentTheme,
      toggleTheme,
    };
  },
});
</script>

<style lang="scss">
.app-header {
  height: $headerHeight;
  border-bottom: 1px solid $colorBorderLight;
  display: flex;
  align-items: center;
  padding: 0 20px;
  background-color: $colorBgWhite;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  // box-shadow: 0px 10px 30px 0px rgba(82, 63, 105, 0.1);

  &__left {
    // width: 200px;
  }
  &__right {
    flex: 1;
    display: flex;
    justify-content: right;
    align-items: center;
    .app-menu {
      display: flex;
      &__item {
        a {
          padding: 0 18px;
          height: 32px;
          line-height: 32px;
          display: inline-block;
          border-radius: 4px;
          transition: all 0.2s;
          &:hover {
            background: $colorBgLight;
          }
          &.router-link-active {
            color: $colorPrimary;
          }
        }
      }
    }
    .app-toolbar {
      display: flex;
      align-items: center;
      cursor: pointer;
      .theme-mode {
        border-radius: 4px;
        padding: 0 18px;
        height: 32px;
        line-height: 32px;
        display: inline-block;
        &:hover {
          background: $colorBgLight;
        }
        .md-icon {
        }
      }
    }
  }
}
</style>
