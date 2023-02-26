<script setup lang="ts">
import { defineProps, type PropType } from "vue";
const props = defineProps({
  padding: String,
  textFlow: String as PropType<"left" | "center" | "right" | "justify">,
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