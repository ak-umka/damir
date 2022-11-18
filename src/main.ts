import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "./plugin/axios";

import "./assets/index.css";

const app = createApp(App);
app.use(router);
app.use(store);
// app.use(axios, {
//   baseUrl: "http://localhost:8000/api/",
// });
app.mount("#app");
