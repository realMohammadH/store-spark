<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
gsap.registerPlugin(ScrollTrigger);

const hero_main_img = ref("../../assets/images/hero-main-img.png");
const hero_float_img = ref("../../assets/images/hero-float-img.png");
const text_title = ref(null);
onMounted(() => {
  Splitting();

  const myText = text_title.value.$el;

  const results = Splitting(myText);
  let myDuration = 2;
  results[0].chars.forEach((char) => {
    // gsap.fromTo(
    //   chars,
    //   {
    //     "will-change": "transform",
    //     y: (position) => {
    //       const factor =
    //         position < Math.ceil(charsTotal / 2)
    //           ? position
    //           : Math.ceil(charsTotal / 2) -
    //             Math.abs(Math.floor(charsTotal / 2) - position) -
    //             1;
    //       return (charsTotal / 2 - factor + 6) * 130;
    //     },
    //   },
    //   {
    //     duration: myDuration,
    //     ease: "elastic.out(.4)",
    //     y: 0,
    //     stagger: {
    //       amount: 0.1,
    //       from: "center",
    //     },
    //   }
    // );
    gsap.fromTo(
      char,
      { opacity: 0, y: -80, x: -80 },
      {
        opacity: 1,
        duration: myDuration,
        ease: "elastic.out(.4)",
        y: 0,
        x: 0,
        stagger: {
          amount: 0.2,
          from: "left",
        },
      }
    );
    myDuration = myDuration + 0.4;
  });
});
</script>

<template>
  <section-wrapper class="hero">
    <container>
      <flex gap="140px">
        <wrapper width="50%">
          <text-title fontSize="62px" ref="text_title" data-splitting>
            Shopify experts <br />
            on demand
          </text-title>
          <text-sub-title>
            Delegate unlimited Shopify design and development tasks without the
            need of hiring freelance or in-house specialists. Fixed monthly
            subscription. No contracts, cancel anytime.
          </text-sub-title>
        </wrapper>
        <wrapper width="50%">
          <image-wrapper
            width="500px"
            height="600px"
            :mainImg="$renderImage(hero_main_img)"
            :floatImg="$renderImage(hero_float_img)"
            floatImgWidth="245px"
            floatImgHeight="210px"
            translate="-30%"
            bottom="5%"
            left="0"
          >
          </image-wrapper>
        </wrapper>
      </flex>
    </container>
  </section-wrapper>
</template>

<style scoped>
.hero {
  background: #f8f4ee;
}
</style>