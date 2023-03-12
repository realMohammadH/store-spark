<script setup>
import { ref, onMounted, computed } from "vue";

const cards = ref([
  {
    imageCard: {
      path: "../../assets/images/category-img-1.png",
      floatImage: {
        path: "../../assets/images/category-img-1-floatImg.png",
        width: "224px",
        height: "282px",
      },
    },
  },
  {
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
      floatImage: {
        path: "../../assets/images/category-img-2-floatImg.png",
        width: "184px",
        height: "195px",
      },
    },
  },
  {
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
  },

  {
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
</script>

<template>
  <section-wrapper class="category">
    <container>
      <flex flexWrap="wrap">
        <wrapper class="card" width="50%" height="400px" v-for="card in cards">
          <!-- <image-wrapper
              :mainImg="$renderImage(card.imageCard.path)"
            ></image-wrapper> -->
        </wrapper>
        <!-- <wrapper class="card" width="50%">
          <text-title></text-title>
          <text-sub-title></text-sub-title>
        </wrapper> -->
      </flex>
    </container>
  </section-wrapper>
</template>

<style scoped>
.card:nth-child(odd) {
  order: 1 !important;
}
</style>
