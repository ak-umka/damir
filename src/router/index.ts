import { createRouter, createWebHistory } from "vue-router";
import Users from "@/views/Users.vue";
import CountryVue from "@/views/Country.vue";
import DoctorVue from "@/views/Doctor.vue";
import DiseaseTypeVue from "@/views/DiseaseType.vue";
import DiseaseVue from "@/views/Disease.vue";
import SpecializeVue from "@/views/Specialize.vue";
import PublicServantVue from "@/views/PublicServant.vue";
import RecordVue from "@/views/Record.vue";
import DiscoverVue from "@/views/Discover.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: CountryVue,
    },
    {
      path: "/users",
      name: "users",
      component: Users,
    },
    {
      path: "/doctors",
      name: "doctors",
      component: DoctorVue,
    },
    {
      path: "/diseasetypes",
      name: "diseasetypes",
      component: DiseaseTypeVue,
    },
    {
      path: "/disease",
      name: "disease",
      component: DiseaseVue,
    },
    {
      path: "/specialize",
      name: "specialize",
      component: SpecializeVue,
    },
    {
      path: "/publicservant",
      name: "publicservant",
      component: PublicServantVue,
    },
    {
      path: "/record",
      name: "record",
      component: RecordVue,
    },
    {
      path: "/discover",
      name: "discover",
      component: DiscoverVue,
    },
  ],
});

export default router;
