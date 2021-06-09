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
  },
  {
    path: '/aboutus',
    name: 'Aboutus',
    component: () => import('../components/Aboutus.vue')
  },
  {
    path: '/showmodel',
    name: 'Showmodel',
    component: () => import('../components/Showmodel.vue')
  },
  {
    path: '/showenviron',
    name: 'Showenviron',
    component: () => import('../components/Showenviron.vue')
  },
  {
    path: '/nightnews',
    name: 'Nightnews',
    component: () => import('../components/Nightnews.vue')
  },
  {
    path: '/contactus',
    name: 'Contactus',
    component: () => import('../components/Contactus.vue')
  },
  {
    path: '/recruit',
    name: 'Recruit',
    component: () => import('../components/Recruit.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
