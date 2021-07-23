import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: "/",
    name: "login",
    component: () =>import("../views/acount/Login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () =>import("../views/acount/register.vue"),
  },
  {
    path: "/forget",
    name: "Forget",
    component: () =>import("../views/acount/Forget.vue"),
  },
  // 首页
  {
    path: "/index",
    name: "Index",
    component: () =>import("../views/layout/Index"),
  },
  // 信息管理
  {
    path: "/news",
    name: "NewsIndex",
    component: () =>import("../views/layout/Index"),
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
