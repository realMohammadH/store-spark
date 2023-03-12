<script setup>
import { ref } from "vue";

const logos = ref([
  "../../assets/images/companyOne.png",
  "../../assets/images/companyTwo.png",
  "../../assets/images/companyThree.png",
  "../../assets/images/companyFour.png",
]);
</script>

<template>
  <section-wrapper class="owner-ships">
    <constrainer>
      <grid flow="column">
        <image-wrapper
          v-for="logo in logos"
          :key="logo"
          :mainImg="$renderImage(logo)"
          height
        >
        </image-wrapper>
      </grid>
    </constrainer>
  </section-wrapper>
</template>

<style scoped>
.owner-ships {
  background: #111111;
  padding: 30px 0 !important;
}
</style>