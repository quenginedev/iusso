import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import buyerRoutes from "./buyer.route";
import authenticationRoutes from './authentication.route'

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("../layouts/buyer.vue"),
    children: buyerRoutes,
  },
	{
		path: "/auth",
		component: ()=>import("../layouts/authentication.vue"),
		children: authenticationRoutes
	}
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
