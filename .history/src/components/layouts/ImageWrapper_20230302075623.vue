<script setup lang="ts">
import { defineProps, ref, computed, onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  mainImg: String,
  width: String,
  height: String,
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
  apply
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

// const main_img = ref(null) as HTMLImageElement
const main_img = ref<HTMLImageElement | null>(null);
const float_img = ref<HTMLImageElement | null>(null);

onMounted(() => {
  let tl = gsap.timeline();
  if () {
    tl.from(main_img.value, {
      scale: 0,
      opacity: 0,
      rotate: 90,
      duration: 1,
      // x: 50,
    })
    .to(main_img.value, {
      scale: 1,
      opacity: 1,
      rotate: 0,
      duration: 1,
      // x: 150,
    })
    .from(float_img.value, { opacity: 0, scale: 0, duration: 0.5 })
    .to(float_img.value, { opacity: 1, scale: 1, duration: 0.5 });
  }
});
</script>

<template>
  <figure
    class="image-wrapper"
    :style="{ width: props.width, height: props.height }"
  >
    <img :src="props.mainImg" alt="" ref="main_img" />
    <img
      v-if="props.floatImg"
      ref="float_img"
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
  border-radius: 10px;
}
.float-image {
  position: absolute;
  translate: 30%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
}

img {
  object-fit: contain;
  aspect-ratio: 1/1;
  width: 100%;
  height: 100%;
}
</style>