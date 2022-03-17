<template>
    <div class="page page-component">
        <aside class="page-aside page-aside--left">
            <app-menu :items="menus" root="/guide"></app-menu>
        </aside>
        <main class="page-main">
            <router-view></router-view>
        </main>
    </div>
</template>

<script lang="ts" setup>
import AppMenu from "@/components/AppMenu.vue";
import menus from "./menus";
</script>

<style lang="scss">
.page-guide {
    &__aside {
    }
    &__main {
    }
}
</style>
