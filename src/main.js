import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import SectionWrapper from "./components/layouts/SectionWrapper.vue";
import Container from "./components/layouts/Container.vue";
import BaseButton from "./components/ui/BaseButton.vue";
const app = createApp(App);
app.component("base-button", BaseButton);
app.component("container", Container);
app.component("section-wrapper", SectionWrapper);
app.mount("#app");
