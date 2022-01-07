<template>
    <teleport to="body">
        <div class="m-teleport">
            <slot></slot>
        </div>
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