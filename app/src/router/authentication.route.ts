import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "login",
    component: () => import("../pages/login.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("../pages/signup.vue"),
  },
  {
    path: "/verify/:_id/:verificationCode",
    name: "verify-account",
    component: () => import("../pages/verify-account.vue"),
  },
  {
    path: "/verify/:email",
    name: "verify-prompt",
    component: () => import("../pages/verify-prompt.vue"),
  },
];

export default routes;
