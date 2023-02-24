<script setup>
import { defineProps } from "vue";
const props = defineProps({
  padding: {
    type: String,
  },
  textFlow: {
    type: String,
  },
});
</script>

<template>
  <div
    class="wrapper"
    :style="{ padding: props.padding, textAlign: props.textFlow }"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
</style>