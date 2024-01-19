// Import the Essentials
import { createApp } from "vue";
import "./assets/styles/globalStyles.css";
import App from "./App.vue";

// Import Core Packages: Vue-Router, Pinia, Apexcharts
import router from "./router";
import { createPinia } from "pinia";

const app = createApp(App);

// Add Core Packages: Vue-Router, Pinia, Apexcharts
app.use(router);
const pinia = createPinia();
app.use(pinia);

app.mount("#app");
