import { RouteRecordRaw } from "vue-router";

const buyerRoutes: RouteRecordRaw[] = [
  {
    name: "discovery",
    path: "",
    component: () => import("../pages/discovery.vue"),
  },
  {
    name: "product-by-id",
    path: "product/:id",
    component: () => import("../pages/view-product-by-id.vue"),
  },
  {
    name: "checkout",
    path: "checkout",
    component: ()=>import('../pages/checkout.vue')
  },
];

export default buyerRoutes;
