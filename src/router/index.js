import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { modes } from 'vuetify/lib/components/VColorPicker/VColorPickerEdit'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '@/components/Auth/Login')
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import( '@/components/Auth/Registration')
  },
  {
    path: '/add/:id',
    name: 'add',
    component: () => import( '@/components/Add/Add')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import( '@/components/Add/AddList')
  },
  {
    path: '/new',
    name: 'newAdd',
    component: () => import( '@/components/Add/NewAdd')
  },
  {
    path: '/oreders',
    name: 'orders',
    component: () => import( '@/components/User/Orders')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
