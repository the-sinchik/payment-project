import Vue from 'vue'
import VueRouter from 'vue-router'
import Payment from '../views/Payment'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'payment',
    component: Payment
  },
  {
    path: '/history',
    name: 'history',
    component: () => import('../views/PaymentHistory.vue')
  },
  {
    path: '*',
    redirect: '/',
    component: NotFound
  }
];

const router = new VueRouter({
  routes
});

export default router
