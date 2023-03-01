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

  const fx1Titles = [...document.querySelectorAll("[data-splitting]")];
  console.log(fx1Titles[0].chars);

  // const myText = text_title.value.$el;
  // console.log(myText.querySelectorAll(".chars"));
  // const myChars = [...document.querySelectorAll(".chars")];
  // console.log(myChars[0]);
  // myChars.forEach((chars) => {
  //   console.log(chars);
  //   gsap.fromTo(
  //     chars,
  //     {
  //       "will-change": "opacity, transform",
  //       opacity: 0,
  //       scale: 0.6,
  //       rotationZ: () => gsap.utils.random(-20, 20),
  //     },
  //     {
  //       ease: "power4",
  //       opacity: 1,
  //       scale: 1,
  //       rotation: 0,
  //       stagger: 0.4,
  //       direction: 2,
  //       // scrollTrigger: {
  //       //   trigger: chars,
  //       //   start: "center+=20% bottom",
  //       //   end: "+=50%",
  //       //   scrub: true,
  //       // },
  //     }
  //   );
  // });
  console.log(myChars);
  // myText.innerText
  //   .replaceAll(/\s/g, "")
  //   .split("")
  //   .forEach((char) => {
  //     const myCharText = document.createTextNode(char);
  //     const myChar = document.createElement("span");
  //     myChar.append(myCharText);
  //     myChar.style.display = "inline-block";
  //     // myText.textContent = m;
  //     myText.appendChild(myChar);
  //     gsap.fromTo(
  //       myChar,
  //       { opacity: 0, duration: 1, scale: 0 },
  //       { opacity: 1, duration: 1, scale: 1 }
  //     );
  //   });

  // const mySplitTitle = new SplitText(myText, { type: "words,chars" });
  // console.log(mySplitTitle);
  /*
  const mySplitTitle = Splitting({
    target: myText,
    by: "words",
    whitespace: true,
  });
  mySplitTitle[0].words.forEach((w) => {
    gsap.fromTo(
      w,
      { opacity: 0, scale: 0 },
      { opacity: 1, duration: 1, scale: 1 }
    );
  });
*/
  const results = Splitting(myText);
  let myDuration = 2;
  // const charsTotal = results[0].chars.length;
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