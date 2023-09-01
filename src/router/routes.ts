import type { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/AddTwoMerchantAgreement',
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('../views/Layout/main.vue'),
    children: [
      {
        path: '/AddTwoMerchantAgreement',
        name: 'AddTwoMerchantAgreement',
        component: () =>
          import('../views/NewMerchantAgreement/addTwoMerchantAgreement.vue'),
        meta: {
          title: '新增二级商协议',
        },
      },
    ],
  },
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
]
export default routes
