import { createRouter, createWebHistory } from "vue-router";

/**
 * pages
 */
import ROUTES from "@/const/routes";

import ItemListPage from "@/component/page/ItemListPage.vue";
import NewItemPage from "@/component/page/NewItemPage.vue";
import ItemShowPage from "@/component/page/ItemShowPage.vue";
import EditItemPage from "@/component/page/EditItemPage.vue";
import ItemInPage from "@/component/page/ItemInPage.vue";
import ItemOutPage from "@/component/page/ItemOutPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTES.ITEM.LIST.PATH,
      name: ROUTES.ITEM.LIST.NAME,
      component: ItemListPage,
      props: (route) => {
        return {
          page: route.query.page === undefined ? 1 : route.query.page,
          size: route.query.size === undefined ? 4 : route.query.size,
          sort: route.query.sort === undefined ? "asc" : route.query.sort,
          query: route.query.query === undefined ? "" : route.query.query,
        }
      }
    },
    {
      path: ROUTES.ITEM.IN.PATH,
      name: ROUTES.ITEM.IN.NAME,
      props: true,
      component: ItemInPage,
    },
    {
      path: ROUTES.ITEM.OUT.PATH,
      name: ROUTES.ITEM.OUT.NAME,
      props: true,
      component: ItemOutPage,
    },
    {
      path: ROUTES.ITEM.NEW.PATH,
      name: ROUTES.ITEM.NEW.NAME,
      component: NewItemPage,
    },
    {
      path: ROUTES.ITEM.SHOW.PATH,
      name: ROUTES.ITEM.SHOW.NAME,
      props: true,
      component: ItemShowPage,
    },
    {
      path: ROUTES.ITEM.EDIT.PATH,
      name: ROUTES.ITEM.EDIT.NAME,
      props: true,
      component: EditItemPage,
    },
  ],
});

export default router;
