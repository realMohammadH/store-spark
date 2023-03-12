<script setup lang="ts">
import { defineProps, type PropType } from "vue";
const props = defineProps({
  padding: String,
  textFlow: String as PropType<"left" | "center" | "right" | "justify">,
  width: String,
  height: String,
  margin: String,
  centerWrapper: Boolean,
});
</script>

<template>
  <div
    class="wrapper"
    :class="{ centerWrapper: props.centerWrapper }"
    :style="{
      padding: props.padding,
      textAlign: props.textFlow,
      width: props.width,
      height: props.height,
      margin: props.margin,
      marginBlock: props.margin,
    }"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.wrapper :is(h2 + *, h3 + *, h4 + *) {
  margin-block-start: 0.5rem;
}

.centerWrapper {
  margin-inline: auto;
}
</style>
