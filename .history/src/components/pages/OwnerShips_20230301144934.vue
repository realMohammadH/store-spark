<script setup lang="ts">
import { ref } from "vue";

const logos = ref([
  "../../assets/images/companyOne.png",
  "../../assets/images/companyTwo.png",
  "../../assets/images/companyThree.png",
  "../../assets/images/companyFour.png",
]);
</script>

<template>
  <section-wrapper>
    <constrainer>
      <grid> </grid>
    </constrainer>
  </section-wrapper>
</template>

<style scoped>
</style>