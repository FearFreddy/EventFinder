import { createRouter, createWebHistory } from 'vue-router'
import StuttgartView from '../views/StuttgartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'stuttgart',
      component: StuttgartView
    },
    {
      path: '/offenburg',
      name: 'offenburg',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/OffenburgView.vue')
    },
    {
      path: '/berlin',
      name: 'berlin',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/BerlinView.vue')
    }
  ]
})

export default router
