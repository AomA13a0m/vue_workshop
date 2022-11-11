import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Me from '../views/Me.vue'
import products from '../views/products.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'products',
    component: products
  },
  {
    path: '',
    name: 'toolbar',
    component: () => import('../views/toolbar.vue'),
    children: [
      {
        path: '/Me',
        name: 'me',
        component: Me
      },
      {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
      },
      {
        path: '/simple',
        name: 'simple',
        component: () => import('../views/simple.vue')
      },
      {
        path: '/apicon',
        name: 'apicon',
        component: () => import('../views/apicon.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
