// Cleaned

import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import NextPage from "../views/NextPage.vue"

const routes = [
	{
		path: "/",
		name: "home",
		component: HomePage,
	},
	{
		path: '/next',
		name: 'next',
		component: NextPage
	},
	{
		path: "/:pathMatch(.*)*",
		name: "notFoundRedirect",
		redirect: "/",
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	base: import.meta.env.BASE_URL,
	routes,
});

export default router;
