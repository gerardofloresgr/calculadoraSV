import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { transition: 'fade-in-left' }
  },
  {
    path: '/salario',
    name: 'Salario',
    component: () => import(/* webpackChunkName: "about" */ '../views/Salario.vue')
  },
  {
    path: '/cesc',
    name: 'Iva y CESC',
    component: () => import(/* webpackChunkName: "about" */ '../views/CESC.vue')
  },
  {
    path: '/despido',
    name: 'Despido',
    component: () => import(/* webpackChunkName: "about" */ '../views/Despido.vue')
  },
  {
    path: '/muypronto',
    name: 'Muy Pronto',
    component: () => import(/* webpackChunkName: "about" */ '../views/MuyPronto.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
