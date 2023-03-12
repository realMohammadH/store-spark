<script setup>
import { ref, onMounted, computed } from "vue";

const cards = ref([
    {
        imageCard: {
            path:'../../assets/'
        }
    }
])
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