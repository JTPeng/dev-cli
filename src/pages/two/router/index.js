const { createRouter, createWebHashHistory } = require('vue-router')
const Index = () => import('../views/index.vue')
const About = () => import('../views/about.vue')

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
