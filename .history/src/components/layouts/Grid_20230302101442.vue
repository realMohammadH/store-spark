<script setup lang="ts">
import { ref, defineProps, PropType, computed } from "vue";
const props = defineProps({
  gap: String,
  flow: String as PropType<"row" | "column">,
  gridCardWidth: String,
  gridCardHeight: String,
});
// const cardWidth;
</script>

<template>
  <div
    class="grid"
    :style="{ gridAutoFlow: props.flow, gap: props.gap, flexWrap }"
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
