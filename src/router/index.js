import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { icon: 'icon-shangchuan', title: '首页' },
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      icon: 'icon-shangchuan',
      title: '关于',
    },
  },
  // 一级菜单
  {
    path: '/page1',
    name: 'page1',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/demo/page1.vue'),
    meta: { icon: 'icon-shouye', title: '一级菜单' },
    children: [
      // 二级菜单
      {
        path: '/page2',
        name: 'page2',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/demo/page2.vue'),
        meta: { icon: 'icon-shoubiao', title: '二级菜单' },
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
export { routes }
