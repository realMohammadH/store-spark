<script setup lang="ts">
import { ref, defineProps, onMounted } from "vue";

const props = defineProps({
  border: String,
  padding: String,
  background: String,
  image: String,
  imageWidth: String,
  imageHeight: String,
  icon: String,
  iconW: String,
  iconH: String,
  cardFlow: String,
  gap: String,
  width: String,
  height: String,
});

const content = ref<HTMLDivElement | null>(null);

onMounted(() => {
  // console.log(content.value?.children.length);
  // const showWrapper: Boolean;
  // if(content.value.hasChildNodes)
});
</script>

<template>
  <div
    class="card"
    :style="{
      border: props.border,
      padding: props.padding,
      background: props.background,
      width: props.width,
      height: props.height,
    }"
  >
    <flex :flow="props.cardFlow" :gap="props.gap">
      <wrapper class="content" ref="content">
        <slot name="content"> </slot>
      </wrapper>
      <wrapper class="media" v-show="props.image && props.icon">
        <slot name="image&icon">
          <img v-if="props.image" :src="props.image" alt="" />
          <object
            v-if="props.icon"
            :width="props.iconW"
            :height="props.iconH"
          ></object>
        </slot>
      </wrapper>
    </flex>

    <slot name="anyContent"></slot>
  </div>
</template>

<style scoped>
.card {
  position: relative;
  border-radius: 10px;
  border: none;
}

.card > :is(* + *) {
  margin-block-start: 0.5rem;
}
</style>
