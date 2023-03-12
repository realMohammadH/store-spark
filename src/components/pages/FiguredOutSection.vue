<script setup>
import { ref } from "vue";

const cards = ref([
  {
    img: "../../assets/images/figure-out-1.png",
    title: "Manage with Trello",
    description:
      "Manage your request queue using Trello. View current, queued and completed tasks with ease.",
  },
  {
    img: "../../assets/images/figure-out-2.png",
    title: "Version control with Git",
    description:
      "Separate live and development versions so that your customers only see the finished result.",
  },
  {
    img: "../../assets/images/figure-out-3.png",
    title: "Work with your team",
    description:
      "Invite unlimited amount of team members. Anyone can submit and track requests.",
  },
]);
</script>

<template>
  <section-wrapper class="figured-out-section">
    <container>
      <wrapper width="680px" textFlow="center" margin="0 auto">
        <text-title>Membership benefits</text-title>
        <text-sub-title
          >Storespark is a new and exciting way to outsource all of your Shopify
          development work for you to finally focus on growth and
          strategy.</text-sub-title
        >
      </wrapper>

      <grid
        flow="column"
        gap="60px"
        gridCardWidth="373px"
        gridCardHeight="352px"
      >
        <card
          cardFlow="column-reverse"
          v-for="c in cards"
          :key="c"
          padding="50px 34px"
        >
          <template #content>
            <text-title :fontWeight="600" fontSize="22px">{{
              c.title
            }}</text-title>
            <text-sub-title>{{ c.description }}</text-sub-title>
          </template>
          <template #anyContent>
            <wrapper class="card-img">
              <img :src="$renderImage(c.img)" alt="" />
            </wrapper>
          </template>
        </card>
      </grid>
    </container>
  </section-wrapper>
</template>

<style scoped>
.figured-out-section {
}
:deep(.card) {
  background: linear-gradient(#f8f4ee 40%, #f8f4ee 40%);
  background-size: 70%;
  text-align: center;
}
.card-img {
  border-radius: 10px;
  border: none;
}
.card-img img {
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  border: none;
  overflow: hidden;
}
</style>
