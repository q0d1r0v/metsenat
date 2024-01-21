// imports
import { createRouter, createWebHistory } from "vue-router";

// layouts
import DefaultLayout from "../layouts/default.vue";
import AuthLayout from "../layouts/auth.vue";

// pages
import LoginPage from "../pages/auth/login-page.vue";
import IndexPage from "../pages/index.vue";
import SponsorsPage from "../pages/sponsors-page.vue";
import StudentsPage from "../pages/students-page.vue";
import SinglePage from "../pages/single-page.vue";

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
        {
          name: "Sponsors Page",
          path: "/sponsors",
          component: SponsorsPage,
          meta: {
            auth: true,
          },
        },
        {
          name: "Students Page",
          path: "/students",
          component: StudentsPage,
          meta: {
            auth: true,
          },
        },
        {
          name: "Single Page",
          path: "/single",
          component: SinglePage,
          meta: {
            auth: true,
          },
        },
      ],
    },
  ],
});

// auth middlewares
router.beforeEach((to, from, next) => {
  if (to.meta.auth == true && !localStorage.getItem("access_token")) {
    next("/auth/login");
  }
  next();
});
