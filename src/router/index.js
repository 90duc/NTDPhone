import Vue from 'vue'
import Router from 'vue-router'
import Default from '@/components/default/Default.vue'
import PhoneDetail from '@/components/phone/PhoneDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      component: Default
    },
    {
      path: '/phoneDetail/:id',
      name: 'phoneDetail',
      component: PhoneDetail
    }
  ]
})
