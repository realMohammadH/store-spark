<script setup lang="ts">
import { ref, defineProps, PropType, computed } from "vue";
const props = defineProps({
  gap: String,
  flow: String as PropType<"row" | "column">,
  gridCardWidth:
});


</script>

<template>
  <div class="grid" :style="{ gridAutoFlow: props.flow, gap: props.gap }">
    <slot></slot>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  justify-content: space-between;
}
</style>