// imports
import { createRouter, createWebHistory } from "vue-router";

// layouts
import DefaultLayout from "../layouts/default.vue";
import AuthLayout from "../layouts/auth.vue";

// pages
import IndexPage from "../pages/index.vue";
import LoginPage from "../pages/auth/login-page.vue";

// export router
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/auth/",
      component: AuthLayout,
      children: [
        {
          name: "Login Page",
          path: "login",
          component: LoginPage,
        },
      ],
    },
    {
      path: "/",
      component: DefaultLayout,
      children: [
        {
          name: "Index Page",
          path: "/",
          component: IndexPage,
          meta: {
            auth: true,
          },
        },
      ],
    },
  ],
});

// auth middleware
router.beforeEach((to, from, next) => {
  if (to.meta.auth == true && !localStorage.getItem("access_token")) {
    next("/auth/login");
  }
  next();
});
