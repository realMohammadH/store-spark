<script setup lang="ts">
import { FORMERR } from "dns";
import {
  ref,
  defineProps,
  PropType,
  computed,
  onMounted,
  watchEffect,
} from "vue";
const props = defineProps({
  gap: String,
  flow: String as PropType<"row" | "column">,
  gridCardWidth: String,
  gridCardHeight: String,
  gridWidth: String,
});
// const cardWidth;
const gridLayout = ref<HTMLDivElement | null>(null);

watchEffect(() => {
  console.log(gridLayout.value?.children.length);
  const gridCards: number | undefined = gridLayout.value?.children.length;
});
const cardsWidth = computed(() => {
  return `repeat(auto-fit, minmax(${props.gridCardWidth}, 1fr))`;
});
const cardsHeight = computed(() => {
  return `repeat(auto-fit, minmax(${props.gridCardHeight}, 1fr))`;
});

onMounted(() => {
  // console.log(gridLayout.value?.children);
  // const gridChildren = new Map<any, any>(gridLayout.value?.children as any);
  // console.log(gridChildren);

  const gridChildren = gridLayout.value?.children;
  console.log(gridChildren);
});
</script>

<template>
  <div
    ref="gridLayout"
    class="grid"
    :style="{
      gridAutoFlow: props.flow,
      gap: props.gap,
      width: props.gridWidth,
      gridTemplateColumns: cardsWidth,
      gridTemplateRows: cardsHeight,
    }"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  justify-content: space-between;
  height: min-content;
}
</style>
