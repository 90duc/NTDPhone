import Vue from 'vue'
import Router from 'vue-router'
import Default from '@/components/default/Default.vue'
import PhoneDetail from '@/components/page/PhoneDetail.vue'
import TopDetail from '@/components/page/TopDetail.vue'
import Paths from '@/config/path.js'

Vue.use(Router);
let routes= [
  {
    path: '/',
    name: 'default',
    component: Default
  },
  {
    path: Paths.phoneDetail+'/:id',
    name: 'phoneDetail',
    component: PhoneDetail
  },
  {
    path: Paths.topPhone,
    name: 'topPhone',
    component: TopDetail
  },
  {
    path: Paths.searchBy+'/:type/:id',
    name: 'searchBy',
    component: PhoneDetail
  }
];


export default new Router({
  routes:routes
})
