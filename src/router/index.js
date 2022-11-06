import { createRouter, createWebHistory } from "vue-router";
import RememberPage from "@/pages/RememberPage.vue";
import SigninPage from "@/pages/SigninPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: RememberPage,
    },
    {
      path: "/signin",
      name: "signin",
      component: SigninPage,
    },
  ],
});

export default router;
