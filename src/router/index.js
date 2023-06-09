import { createRouter, createWebHashHistory } from 'vue-router'

import vCatalog from '../components/v-catalog.vue'
// import vCart from '../components/v-cart.vue'
const routes = [
  {
    path: '/',
    name: 'catalog',
    component: vCatalog
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../components/v-cart.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
