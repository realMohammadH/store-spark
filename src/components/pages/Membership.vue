<script setup>
import { ref, reactive } from "vue";

const cards = ref([
  {
    mediaPath: "../../assets/icons/membershipI1.svg",
    title: "Unlimited requests",
    description:
      "Delegate all your website tasks to professional Shopify experts.",
  },
  {
    mediaPath: "../../assets/icons/membershipI2.svg",
    title: "Fast delivery",
    description:
      "Create task in 5 minutes and get it back in 12 to 48 hours on average.",
  },
  {
    mediaPath: "../../assets/icons/membershipI3.svg",
    title: "Fixed monthly rate",
    description: "No hidden costs. Pay the same price every month.",
  },
  {
    mediaPath: "../../assets/icons/membershipI4.svg",
    title: "Collaborate with your team",
    description: "Speed up the process by inviting all your team members.",
  },
  {
    mediaPath: "../../assets/icons/membershipI5.svg",
    title: "Friendly human support",
    description: "Turn to our caring support team for help and advise.",
  },
  {
    mediaPath: "../../assets/icons/membershipI6.svg",
    title: "Flexible & scalable",
    description:
      "No contracts. Scale up and down as you go, cancel at anytime.",
  },
]);
</script>

<template>
  <section-wrapper class="membership">
    <container>
      <wrapper
        textFlow="center"
        width="680px"
        :centerWrapper="true"
        margin="0 auto 60px"
      >
        <text-title fontSize="44px">Membership benefits</text-title>
        <text-sub-title
          >Storespark is a new and exciting way to outsource all of your Shopify
          development work for you to finally focus on growth and
          strategy.</text-sub-title
        >
        <base-button :dark="true" padding="20px 40px" marginB="40px 0 0 0"
          >See plans</base-button
        >
      </wrapper>
      <grid gridCardHeight="203px" gridCardWidth="360px">
        <card
          v-for="c in cards"
          :key="cards.indexOf(c)"
          height="203px"
          width="360px"
        ></card>
      </grid>
    </container>
  </section-wrapper>
</template>

<style scoped>
.membership {
  background-color: #f8f4ee;
}
</style>
