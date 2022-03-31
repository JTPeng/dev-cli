const { createRouter, createWebHistory } = require("vue-router")
const Home = () => import("../views/home.vue")
const About = () => import("../views/about.vue")

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/about",
		name: "about",
		component: About,
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
