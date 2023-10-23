import { createRouter, createWebHistory } from "vue-router";

/**
 * pages
 */
import ROUTES from "@/const/routes";

import InventoryListPage from "@/component/page/InventoryListPage.vue";
import InventoryInPage from "@/component/page/InventoryInPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTES.INVENTORY.LIST.PATH,
      name: ROUTES.INVENTORY.LIST.NAME,
      component: InventoryListPage,
    },
    {
      path: ROUTES.INVENTORY.IN.PATH,
      name: ROUTES.INVENTORY.IN.NAME,
      component: InventoryInPage,
      props: true
    }
  ],
});

export default router;
