<script setup lang="ts">
import { ref, defineProps } from "vue";
</script>

<template>
  <h4 class="text-sub_title">
    <slot></slot>
  </h4>
</template>

<style scoped>
.text-sub_title {
  font-weight: 300;
  color: #555555;
  line-height: 28px;
}
</style>
