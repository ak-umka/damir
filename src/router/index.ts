import { createRouter, createWebHistory } from "vue-router";
import Users from "../views/Users.vue";
import CountryVue from "@/views/Country.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Users,
    },
    {
      path: "/countries",
      name: "countries",
      component: CountryVue,
    },
  ],
});

export default router;
