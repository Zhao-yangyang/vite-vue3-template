import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('/@/views/Home.vue'),
    },
    {
      path: '/storetest',
      name: 'storetest',
      component: () => import('/@/views/StoreTest.vue'),
    },
  ],
})

export default router
