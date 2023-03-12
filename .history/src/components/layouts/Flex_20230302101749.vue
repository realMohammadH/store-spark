<script setup lang="ts">
import { ref, defineProps } from "vue";
const props = defineProps<{
  gap?: string;
  flexWrap: String;
}>();
</script>

<template>
  <div class="flex" :style="{ gap: props.gap, flexWrap: props.flexWrap }">
    <slot></slot>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
