import { createRouter, createWebHistory } from "vue-router";
import HomeIndex from "../app/HomeIndex.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeIndex,
    },
  ],
});

export default router;
