import { createApp } from "vue";
import AOS from "aos";
import "@fortawesome/fontawesome-free/css/all.css";
import "./style.css";
import App from "./App.vue";

createApp(App).mount("#app");
AOS.init({
  duration: 1000,
  easing: "ease",
  once: true,
});