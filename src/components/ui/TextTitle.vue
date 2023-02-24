<script setup>
</script>

<template>
  <h2 class="text-title" :style="{}">
    <slot></slot>
  </h2>
</template>

<style scoped>
.text-title {
  color: #111111;
  font-weight: 700;
  text-align: start;
}
</style>