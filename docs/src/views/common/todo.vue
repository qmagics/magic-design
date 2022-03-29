<template>
    <div class="page-todo">Todo...<pre>{{route.params.pathMatch}}</pre></div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
</script>