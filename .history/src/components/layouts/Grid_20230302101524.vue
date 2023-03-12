<script setup lang="ts">
import { wrap } from "module";
import { ref, defineProps, PropType, computed } from "vue";
const props = defineProps({
  gap: String,
  flow: String as PropType<"row" | "column">,
  gridCardWidth: String,
  gridCardHeight: String,
  flexWrap: String as ,
});
// const cardWidth;
</script>

<template>
  <div
    class="grid"
    :style="{
      gridAutoFlow: props.flow,
      gap: props.gap,
      flexWrap: props.flexWrap,
    }"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  justify-content: space-between;
  grid-auto-columns: 1fr;
}
</style>
