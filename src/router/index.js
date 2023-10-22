import { createRouter, createWebHistory } from "vue-router";

/**
 * pages
 */
import InventoryListPage from "@/component/page/InventoryListPage.vue";
import ROUTES from "@/const/routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTES.INVENTORY.LIST.PATH,
      name: ROUTES.INVENTORY.LIST.NAME,
      component: InventoryListPage,
    }
  ],
});

export default router;
