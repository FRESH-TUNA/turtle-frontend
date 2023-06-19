import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/page/HomePage.vue";
import InventoryHomePage from "@/page/InventoryHomePage.vue";
import InventoryInPage from "@/page/InventoryInPage.vue";

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
    },
    {
      path: "/inventory/sku/:id/in",
      name: "inventory-in",
      component: InventoryInPage,
      props: true
    }
  ],
});

export default router;
