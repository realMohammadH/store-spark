<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps({
  background: String,
  className: String,
});
</script>

<template>
  <section :class="props.className" :style="{ background: props.background }">
    <slot></slot>
  </section>
</template>

<style scoped>
section {
  padding: 5.625em 0;
}
</style>