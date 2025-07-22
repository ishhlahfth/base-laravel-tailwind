import Notfound from "@/views/Notfound.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    component: () => import("@/views/guest/Login.vue"),
  },
  {
    path: "/",
    redirect: "/home",
    component: () => import("@/components/layout/AdminLayout.vue"),
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "/user",
        name: "User Account",
        component: () => import("@/views/Users.vue"),
      },
    ],
  },

  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: Notfound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
