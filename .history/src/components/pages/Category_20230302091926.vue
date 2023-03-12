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
      features: [
        "Shopify theme set up",
        "Theme upgrade",
        "Functionality review",
        "Custom feature implementation",
      ],
    },
  },
  {
    imageCard: {
      path: "../../assets/images/category-img-2.png",
      floatImage: "../../assets/images/category-img-2-floatImg.png",
    },
    textCard: {
      title: "Design and graphic tasks",
      description:
        "Transform your store from something that looks like a default template into something that looks like you.",
      features: [
        "Shopify theme set up",
        "Theme upgrade",
        "Functionality review",
        "Custom feature implementation",
      ],
    },
  },
  {
    imageCard: {
      path: "../../assets/images/category-img-3.png",
    },
    textCard: {
      title: "Troubleshooting and maintenance",
      description:
        "Fix bugs, troubleshoot or audit your store for potential issues in a jiffy.",
      features: [
        "Site speed audits",
        "Urgent bug fixes",
        "App and theme conflicts",
        "App installs and configuration",
      ],
    },
  },
]);

// const cardStyle = ref({
//   width: "50%",
// });
</script>

<template>
  <section-wrapper class="category">
    <container>
      <grid>
        <flex v-for="card in cards">
          <image-wrapper
            width="50%"
            height="400px"
            :mainImg="$renderImage(card.imageCard.path)"
            :floatImg="$renderImage(card.imageCard.floatImage)"
          ></image-wrapper>
          <image-wrapper>
            <text-title></text-title>
            <text-sub-title></text-sub-title>
          </image-wrapper>
        </flex>
      </grid>
    </container>
  </section-wrapper>
</template>

<style scoped>
</style>