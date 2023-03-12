<script setup lang="ts">
import { ref, defineProps, PropType } from "vue";
const props = defineProps({
  gap: String,
  flow: String as PropType<"">,
});
</script>

<template>
  <div class="grid" :style="{}"></div>
</template>

<style scoped>
.grid{
    display: ;
}
</style>