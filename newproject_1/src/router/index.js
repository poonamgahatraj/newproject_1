import { createRouter, createWebHistory } from 'vue-router'
import Loginpage from '../pages/Loginpage.vue';
import shipment from '../pages/shipment.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Loginpage',
      component: Loginpage
    },
    
     

    {
      path: '/shipment',
      name: 'shipment',
      component: shipment
    },

  ]
})

export default router
