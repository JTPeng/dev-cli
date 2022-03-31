import VueRouter from "vue-router"
import Vue from "vue"
import Test from "../views/test"
import App from "../App"
Vue.use(VueRouter)

const routes = [
	{
		path: "/",
		component: App,
		children: [
			{
				path: "/test",
				component: require(/* webpackChunkName test*/ "../views/test.vue")
					.default,
			},
		],
	},
	{
		path: "/about",
		component: require(/* webpackChunkName about*/ "../views/about.vue").default,
	},
]

const router = new VueRouter({
	routes,
})

export default router
