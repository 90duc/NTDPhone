import Vue from 'vue'
import Router from 'vue-router'
import Default from '@/components/default/Default.vue'
import Login from '@/components/login/Login.vue'
import Home from '@/components/page/Home.vue'
import PhoneDetail from '@/components/page/PhoneDetail.vue'
import TopDetail from '@/components/page/TopDetail.vue'
import SearchBy from '@/components/page/SearchBy.vue'
import HobbyList from '@/components/page/HobbyList.vue'
import Paths from '@/config/path.js'

Vue.use(Router);
let chidRoutes= [

  {
    path: Paths.home,
    name: 'home',
    component: Home
  },
  {
    path: Paths.phoneDetail+'/:id',
    name: 'phoneDetail',
    component: PhoneDetail
  },
  {
    path: Paths.topDetail+'/:type',
    name: 'topDetail',
    component: TopDetail
  },
  {
    path: Paths.searchBy+'/:type/:id',
    name: 'searchBy',
    component: SearchBy
  },
  {
    path: Paths.hobbyList+'/:type',
    name: 'hobbyList',
    component: HobbyList
  },

];


let routes=[
    {
      path: '/',
      name: 'default',
      component: Default,
      redirect: Paths.home,
      children:chidRoutes
    },
    {
      path: Paths.login,
      name: 'login',
      component: Login,
    }
];

export default new Router({
  routes:routes
})
