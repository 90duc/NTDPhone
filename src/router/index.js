import Vue from 'vue'
import Router from 'vue-router'
import Default from '@/components/default/Default.vue'
import PhoneDetail from '@/components/page/PhoneDetail.vue'
import TopPhone from '@/components/page/TopPhone.vue'

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
    },
    {
      path: '/topList',
      name: 'topPhone',
      component: TopPhone
    },
    {
      path: '/searchBy/:type/:id',
      name: 'ss',
      component: PhoneDetail
    }
  ]
})
