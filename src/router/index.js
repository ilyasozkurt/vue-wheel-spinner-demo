import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/services/randomnamepicker/uniqueidentifier/xyz9876543/generator/chooseyourwinner/selectrandomly/satu',
      name: 'satu',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/satu.vue')
    },
    {
      path: '/services/randomnamepicker/uniqueidentifier/xyz9876543/generator/chooseyourwinner/selectrandomly/dua',
      name: 'dua',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/dua.vue')
    },
    {
      path: '/services/randomnamepicker/uniqueidentifier/xyz9876543/generator/chooseyourwinner/selectrandomly/tiga',
      name: 'tiga',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/tiga.vue')
    },
    {
      path: '/empat',
      name: 'empat',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/empat.vue')
    },
    {
      path: '/lima',
      name: 'lima',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/lima.vue')
    },
    {
      path: '/enam',
      name: 'enam',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/enam.vue')
    },
    {
      path: '/tujuh',
      name: 'tujuh',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/tujuh.vue')
    },
    {
      path: '/delapan',
      name: 'delapan',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/delapan.vue')
    },
    {
      path: '/sembilan',
      name: 'sembilan',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/sembilan.vue')
    },
    {
      path: '/sepuluh',
      name: 'sepuluh',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/sepuluh.vue')
    }
  ]
})

export default router
