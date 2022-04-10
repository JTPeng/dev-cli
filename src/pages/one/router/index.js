const { createRouter, createWebHashHistory } = require('vue-router')
const Index = () => import('../views/index.vue')
const About = () => import('../views/about.vue')
const Other = () => import('../views/other.vue')

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
  {
    path: '/other',
    name: 'other',
    component: Other,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
