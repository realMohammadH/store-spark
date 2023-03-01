import { createApp } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
// import Lenis from "@studio-freight/lenis";
import "./style.css";
import App from "./App.vue";

//*Plugins
import renderImage from "./components/plugins/renderImage";

//*Components
import SectionWrapper from "./components/layouts/SectionWrapper.vue";
import Container from "./components/layouts/Container.vue";
import BaseButton from "./components/ui/BaseButton.vue";
import Wrapper from "./components/layouts/Wrapper.vue";
import ImageWrapper from "./components/layouts/ImageWrapper.vue";
import Flex from "./components/layouts/Flex.vue";
import Grid from "./components/layouts/Grid.vue";
import TextTitle from "./components/ui/TextTitle.vue";
import TextSubTitle from "./components/ui/TextSubTitle.vue";

const app = createApp(App);
app.component("text-sub-title", TextSubTitle);
app.component("text-title", TextTitle);
app.component("grid", Grid);
app.component("flex", Flex);
app.component("image-wrapper", ImageWrapper);
app.component("wrapper", Wrapper);
app.component("base-button", BaseButton);
app.component("container", Container);
app.component("section-wrapper", SectionWrapper);

// app.use(Lenis);
app.use(Splitting);
app.use(renderImage);
app.mount("#app");
