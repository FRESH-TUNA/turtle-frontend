import { createRouter, createWebHistory } from "vue-router";

/**
 * pages
 */
import ROUTES from "@/const/routes";

import InventoryListPage from "@/component/page/SkuListPage.vue";
import InventoryInModal from "@/component/modal/SkuInModal.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTES.INVENTORY.LIST.PATH,
      name: ROUTES.INVENTORY.LIST.NAME,
      component: InventoryListPage,
      props: (route) => ({
        page: route.query.page === undefined ? 0 : route.query.page,
        size: route.query.size === undefined ? 1 : route.query.size,
        sort: route.query.sort === undefined ? "asc" : route.query.sort,
        query: route.query.query === undefined ? "" : route.query.query
      }),

      children: [
        {
          path: ROUTES.INVENTORY.IN.PATH,
          name: ROUTES.INVENTORY.IN.NAME,
          props: true,
          components: {skuInModal: InventoryInModal}
        }
      ]
    }
  ],
});

export default router;
