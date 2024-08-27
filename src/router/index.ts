import { createRouter, createWebHistory } from "vue-router";
import HomeIndex from "../app/HomeIndex.vue";
import PanelIndex from "../app/Panel.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeIndex,
    },
    {
      path: "/panel",
      name: "panel",
      component: PanelIndex,
    }
  ],
});

export default router;
