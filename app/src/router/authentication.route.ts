import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
	{
		path: '/login',
		name: 'login',
		component: ()=>import('../pages/login.vue')
	}
]

export default routes