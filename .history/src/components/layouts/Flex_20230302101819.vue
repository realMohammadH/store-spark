<script setup lang="ts">
import { ref, defineProps, PropType } from "vue";
const props = defineProps<{
  gap?: string;
  flexWrap: String as PropType<"wrap" | "nowrap">,
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
