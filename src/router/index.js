import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/services/randomnamepicker/uniqueidentifier/xyz9876543/generator/chooseyourwinner/selectrandomly/satu',
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
      path: '/services/randomnamepicker/uniqueidentifier/xyz9876543/generator/chooseyourwinner/selectrandomly/empat',
      name: 'empat',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/empat.vue')
    },
    {
      path: '/services/randomnamepicker/uniqueidentifier/xyz9876543/generator/chooseyourwinner/selectrandomly/lima',
      name: 'lima',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/lima.vue')
    },
    {
      path: '/services/randomnamepicker/uniqueidentifier/xyz9876543/generator/chooseyourwinner/selectrandomly/enam',
      name: 'enam',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/enam.vue')
    },
    {
      path: '/services/randomnamepicker/uniqueidentifier/xyz9876543/generator/chooseyourwinner/selectrandomly/tujuh',
      name: 'tujuh',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/tujuh.vue')
    },
    {
      path: '/services/randomnamepicker/uniqueidentifier/xyz9876543/generator/chooseyourwinner/selectrandomly/delapan',
      name: 'delapan',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/delapan.vue')
    },
    {
      path: '/services/randomnamepicker/uniqueidentifier/xyz9876543/generator/chooseyourwinner/selectrandomly/sembilan',
      name: 'sembilan',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/sembilan.vue')
    },
    {
      path: '/services/randomnamepicker/uniqueidentifier/xyz9876543/generator/chooseyourwinner/selectrandomly/sepuluh',
      name: 'sepuluh',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/sepuluh.vue')
    }
  ]
})

export default router
