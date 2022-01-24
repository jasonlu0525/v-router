import { createRouter, createWebHashHistory } from 'vue-router';
import Cart from '@/views/client/Cart.vue';
import Product from '@/views/client/Product.vue';

import Home from '@/views/client/Home.vue';

import Login from '@/views/manager/Login.vue';

import Dashboard from '@/views/manager/Dashboard.vue';

import Orders from '@/views/manager/Orders.vue';

import managerProduct from '@/views/manager/Product.vue';

const routes = [
  // 前台
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        name: 'product',

        component: Product,
      },
      {
        path: 'cart',
        name: 'cart',

        component: Cart,
      },

      {
        path: 'login',
        name: 'login',
        component: Login,
      },
    ],
  },

  // 後台
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    children: [
      {
        path: '',
        name: 'orders',
        component: Orders,
      },
      {
        path: 'product',
        name: 'dashboardProduct',
        component: managerProduct,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
