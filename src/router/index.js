import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Redirect root URL ('/') to the specific path you want
    {
      path: '/',
      redirect: '/services/randomnamepicker/uniqueidentifier/xyz9876543/generator/chooseyourwinner/selectrandomly/satu'
    },
    {
      path: '/services/randomnamepicker/uniqueidentifier/xyz9876543/generator/chooseyourwinner/selectrandomly/satu',
      name: 'satu',
      component: () => import('../views/satu.vue')
    },
    {
      path: '/services/randomnamepicker/uniqueidentifier/xyz9876543/generator/chooseyourwinner/selectrandomly/dua',
      name: 'dua',
      component: () => import('../views/dua.vue')
    },
    {
      path: '/services/randomnamepicker/uniqueidentifier/xyz9876543/generator/chooseyourwinner/selectrandomly/tiga',
      name: 'tiga',
      component: () => import('../views/tiga.vue')
    },
    {
      path: '/services/randomnamepicker/uniqueidentifier/xyz9876543/generator/chooseyourwinner/selectrandomly/empat',
      name: 'empat',
      component: () => import('../views/empat.vue')
    },
    {
      path: '/services/randomnamepicker/uniqueidentifier/xyz9876543/generator/chooseyourwinner/selectrandomly/lima',
      name: 'lima',
      component: () => import('../views/lima.vue')
    },
    {
      path: '/services/randomnamepicker/uniqueidentifier/xyz9876543/generator/chooseyourwinner/selectrandomly/enam',
      name: 'enam',
      component: () => import('../views/enam.vue')
    },
    {
      path: '/services/randomnamepicker/uniqueidentifier/xyz9876543/generator/chooseyourwinner/selectrandomly/tujuh',
      name: 'tujuh',
      component: () => import('../views/tujuh.vue')
    },
    {
      path: '/services/randomnamepicker/uniqueidentifier/xyz9876543/generator/chooseyourwinner/selectrandomly/delapan',
      name: 'delapan',
      component: () => import('../views/delapan.vue')
    },
    {
      path: '/services/randomnamepicker/uniqueidentifier/xyz9876543/generator/chooseyourwinner/selectrandomly/sembilan',
      name: 'sembilan',
      component: () => import('../views/sembilan.vue')
    },
    {
      path: '/services/randomnamepicker/uniqueidentifier/xyz9876543/generator/chooseyourwinner/selectrandomly/sepuluh',
      name: 'sepuluh',
      component: () => import('../views/sepuluh.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/services/randomnamepicker/uniqueidentifier/xyz9876543/generator/chooseyourwinner/selectrandomly/sembilan'
    }
  ]
})

export default router
