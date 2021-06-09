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
    component: Index,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/header',
    name: 'Header',
    component: Header,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/footer',
    name: 'Footer',
    component: Footer,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/contactnav',
    name: 'Contactnav',
    component: Contactnav,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/aboutus',
    name: 'Aboutus',
    component: () => import('../components/Aboutus.vue'),
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/showmodel',
    name: 'Showmodel',
    component: () => import('../components/Showmodel.vue'),
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/showenviron',
    name: 'Showenviron',
    component: () => import('../components/Showenviron.vue'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/environdetail/:id',
    name: 'Environdetail',
    component: () => import('../components/Environdetail.vue'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/nightnews',
    name: 'Nightnews',
    component: () => import('../components/Nightnews.vue'),
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/contactus',
    name: 'Contactus',
    component: () => import('../components/Contactus.vue'),
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/recruit',
    name: 'Recruit',
    component: () => import('../components/Recruit.vue'),
    meta: {
      keepAlive: true
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
