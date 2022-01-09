<template>
    <teleport to="body">
        <slot></slot>
    </teleport>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "MTeleport",
    props: {

    }
});
</script>