import type { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/test',
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('../views/Layout/main.vue'),
    children: [
      {
        path: '/test',
        name: 'test',
        component: () => import('../views/Test.vue'),
      },
      {
        path: '/storetest',
        name: 'storetest',
        component: () => import('/@/views/StoreTest.vue'),
      },
    ],
  },
]
export default routes
