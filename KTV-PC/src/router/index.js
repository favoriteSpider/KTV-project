import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Header from '../views/Header.vue'
import Footer from '../views/Footer.vue'
import Contactnav from '../views/Contactnav.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'Index',
    component: Index
  },
  {
    path: '/header',
    name: 'Header',
    component: Header
  },
  {
    path: '/footer',
    name: 'Footer',
    component: Footer
  },
  {
    path: '/contactnav',
    name: 'Contactnav',
    component: Contactnav
  }
]

const router = new VueRouter({
  routes
})

export default router
