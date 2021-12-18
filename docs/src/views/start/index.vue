<template>
    <div class="page page-start">
        <aside class="page-aside page-aside--left">...</aside>
        <main class="page-main">
            <router-view></router-view>
        </main>
    </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, } from "vue";

export default defineComponent({
    components: {
    },
    setup() {
        return {
        };
    },

});
</script>

<style lang="scss">
.page-start {
    &__aside {
    }
    &__main {
        // padding: 20px;
        // background-color: $colorBgWhite;
    }
}
</style>
