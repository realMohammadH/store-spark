<script setup>
import { ref, onMounted, computed } from "vue";

const cards = ref([
  {
    imageCard: {
      path: "../../assets/images/category-img-1.png",
      floatImage: "../../assets/images/category-img-1-floatImg.png",
    },
    textCard: {
      title: "Theme development and customization",
      description:
            "Transform your store from something that looks like a default template into something that looks like you.",
        features
    },
  },
]);
</script>

<template>
  <section-wrapper class="category">
    <container>
      <grid>
        <flex v-for=""> </flex>
      </grid>
    </container>
  </section-wrapper>
</template>

<style scoped>
</style>