<template>
    <ul class="app-anchor-menu">
        <li
            :class="['app-anchor-menu__item', { 'is--active': i.id === activeAnchor }]"
            v-for="i in menus"
        >
            <router-link :to="`${$route.path}#${i.id}`">{{ i.title }}</router-link>
        </li>
    </ul>
</template>
<script lang="ts">
import { useStore } from "@/store";
import { computed, defineComponent, onMounted, PropType, ref } from "vue";
import { DemoItemRaw } from "../types";

export default defineComponent({
    props: {
        menus: Array as PropType<DemoItemRaw[]>
    },
    setup(props) {
        const activeHash = ref("");
        const store = useStore();

        return {
            activeAnchor: computed(() => store.state.activeAnchor),
            activeHash
        }
    }
})
</script>

<style lang="scss">
.app-anchor-menu {
    &__item {
        height: 30px;
        color: $colorFontLight;
        line-height: 30px;
        padding: 0 10px;
        border-radius: 4px;
        margin-bottom: 5px;

        &.is--active {
            background-color: $colorBgLight;
            color: $colorFontBase;
        }
    }
}
</style>