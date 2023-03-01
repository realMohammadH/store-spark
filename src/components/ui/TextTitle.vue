<script setup lang="ts">
import { ref, defineProps } from "vue";

const props = defineProps({
  fontSize: String,
  fontWeight: Number,
});
</script>

<template>
  <h2
    class="text-title"
    :style="{ fontSize: props.fontSize, fontWeight: props.fontWeight }"
  >
    <slot></slot>
  </h2>
</template>

<style scoped>
.text-title {
  color: #111111;
  font-weight: 700;
  text-align: start;
  line-height: 65px;
}
</style>