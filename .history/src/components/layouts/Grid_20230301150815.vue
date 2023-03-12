<script setup lang="ts">
import { ref, defineProps } from "vue";
const props = defineProps({
    gap: String,
  flow
});
</script>

<template>
  <div class="grid" :style="{}"></div>
</template>

<style scoped>
</style>