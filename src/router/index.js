import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  // 前台
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/client/Home.vue'),
    children: [
      {
        path: '',
        name: 'product',

        component: () => import('@/views/client/Product.vue'),
      },
      {
        path: 'cart',
        name: 'cart',

        component: () => import('@/views/client/Cart.vue'),
      },

      {
        path: 'login',
        name: 'login',
        component: () => import('@/views/manager/Login.vue'),
      },
    ],
  },

  // 後台
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/manager/Dashboard.vue'),
    children: [
      {
        path: '',
        name: 'orders',
        component: () => import('@/views/manager/Orders.vue'),
      },
      {
        path: 'product',
        name: 'dashboard/product',
        component: () => import('@/views/manager/Product.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
