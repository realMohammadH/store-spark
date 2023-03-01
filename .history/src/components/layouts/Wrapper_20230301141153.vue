<script setup lang="ts">
import { defineProps, type PropType } from "vue";
const props = defineProps({
  padding: String,
  textFlow: String as PropType<"left" | "center" | "right" | "justify">,
  width: String,
  height: String,
});
</script>

<template>
  <div
    class="wrapper"
    :style="{
      padding: props.padding,
      textAlign: props.textFlow,
      width: props.width,
      height: props.height,
    }"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.wrapper :is(h2 + *, h3 + *, h4 + *) {
  margin-block-start: var(0, 1em);
}
</style>