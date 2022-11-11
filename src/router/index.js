import { createRouter, createWebHistory } from "vue-router";
import RememberPage from "@/pages/RememberPage.vue";
import SigninPage from "@/pages/SigninPage.vue";
import SignupPage from "@/pages/SignupPage.vue";
import MeQuestionsPage from "@/pages/MeQuestionsPage.vue";
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
    {
      path: "/signup",
      name: "signup",
      component: SignupPage,
    },
    {
      path: "/me/questions",
      name: "meQuestionsPage",
      component: MeQuestionsPage,
    },
  ],
});

export default router;
