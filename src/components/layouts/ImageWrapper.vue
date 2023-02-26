<script setup lang="ts">
import { defineProps, ref, computed } from "vue";

const props = defineProps({
  mainImg: String,
  width: String,
  Height: String,
  floatImg: String,
  translate: String,
  floatImgWidth: String,
  floatImgHeight: String,
  left: {
    type: String,
    default: "auto",
  },
  right: {
    type: String,
    default: "auto",
  },
  top: {
    type: String,
    default: "auto",
  },
  bottom: {
    type: String,
    default: "auto",
  },
});

const positionFloatImage = computed(() => {
  return props.top, props.right, props.bottom, props.left;
});

const floatImageStyling = ref({
  translate: props.translate,
  width: props.floatImgWidth,
  height: props.floatImgHeight,
  top: props.top,
  bottom: props.bottom,
  left: props.left,
  right: props.right,
  // inset: positionFloatImage,
});
</script>

<template>
  <figure class="image-wrapper">
    <img :src="props.mainImg" alt="" />
    <img
      class="float-image"
      :src="props.floatImg"
      alt=""
      :style="floatImageStyling"
    />
  </figure>
</template>

<style scoped>
.image-wrapper {
  position: relative;
}
.float-image {
  position: absolute;
  /* inset: auto 0 20% auto; */
  translate: 30%;
}
</style>