import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/page/HomePage.vue";
import InventoryHomePage from "@/page/InventoryHomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: HomePage,
    },
    {
      path: "/inventory",
      name: "inventory",
      component: InventoryHomePage,
    }
  ],
});

export default router;
