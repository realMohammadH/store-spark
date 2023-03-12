<script setup>
import { ref } from "vue";
const cards = ref([
  {
    icon: "",
    title: "Book a call",
    description:
      "A quick 30 minute call to check if we are a good match for each other.",
  },
  {
    icon: "",
    title: "Subscribe to a plan",
    description:
      "Our plans come with no strings attached. Simple and hassle free.",
  },
  {
    icon: "",
    title: "Submit your request",
    description:
      "Use a premade request template or go freestyle. It’s up to you.",
  },
]);
</script>

<template>
  <section-wrapper class="get-started">
    <container>
      <flex gap="140px">
        <grid gridWidth="50%" gap="20px" flow="row">
          <card
            v-for="c in cards"
            :key="c"
            padding="35px 50px"
            background="#FFFFFF"
            iconWidth="40px"
            iconHeight="40px"
            
          >
            <template #content>
              <text-title fontSize="22px">{{ c.title }}</text-title>
              <text-sub-title>{{ c.description }}</text-sub-title>
            </template>
          </card>
        </grid>
        <wrapper width="50%">
          <text-title fontSize="44px" fontWeight="600" lineHeight="52px"
            >A few simple steps to get started</text-title
          >
          <text-sub-title>
            We're on a mission to make you successful with Shopify. We'll become
            part of your team, working alongside for the duration of your
            projects.
          </text-sub-title>
          <base-button :dark="true" padding="20px 40px" margin="40px 0 0 0"
            >See plans</base-button
          >
        </wrapper>
      </flex>
    </container>
  </section-wrapper>
</template>

<style scoped>
.get-started {
  background-color: #f8f4ee;
}
</style>
