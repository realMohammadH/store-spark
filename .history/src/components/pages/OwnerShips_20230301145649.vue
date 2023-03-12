<script setup lang="ts">
import { ref } from "vue";

const logos = ref([
  "../../assets/images/companyOne.png",
  "../../assets/images/companyTwo.png",
  "../../assets/images/companyThree.png",
  "../../assets/images/companyFour.png",
]);

logos.value.forEach(log)
</script>

<template>
  <section-wrapper class="owner-ships">
    <constrainer>
      <grid>
        <wrapper v-for="logo in logos" :key="logo">
          <img :src="$renderImage(logo)" alt="" srcset="" />
        </wrapper>
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