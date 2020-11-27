import { createApp } from "vue";
import App from "./App.vue";
import VueStripeMenu from "vue-stripe-menu";

import "tippy.js/dist/tippy.css";
import "bootstrap-css";

createApp(App).use(VueStripeMenu).mount("#app");
