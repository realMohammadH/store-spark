<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  light: Boolean,
  dark: Boolean,
  padding: String,
});
</script>

<template>
  <a
    href="#"
    class="btn"
    :class="{ dark: props.dark, light: props.light }"
    :style="{ padding: props.padding }"
  >
    <slot />
  </a>
</template>

<style scoped>
.btn {
  display: inline-block;
  border: none;
  border-radius: 10px;
  text-align: center;
  font-weight: 800;
  font-size: 18px;
  text-decoration: none;
}
.light {
  background-color: #ffffff;
  color: #111111;
  box-shadow: 0px 0px 50px -7px rgba(0, 0, 0, 0.1);
}
.dark {
  background-color: #111111;
  color: #ffffff;
}
</style>