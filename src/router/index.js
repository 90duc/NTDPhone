import Vue from 'vue'
import Router from 'vue-router'
import Default from '@/components/default/Default.vue'
import Login from '@/components/login/Login.vue'
import Register from '@/components/login/Register.vue'
import Home from '@/components/page/Home.vue'
import PhoneDetail from '@/components/page/PhoneDetail.vue'
import TopDetail from '@/components/page/TopDetail.vue'
import SearchBy from '@/components/page/SearchBy.vue'
import HobbyList from '@/components/page/HobbyList.vue'
import UserInfo from '@/components/user/UserInfo.vue'
import UserHome from "@/components/user/UserHome.vue";
import UserNickname from "@/components/user/NickName.vue";
import Picture3D from '@/components/page/3d/Picture3D.vue'

import Paths from '@/config/path.js'

Vue.use(Router);
let chidRoutes = [

  {
    path: Paths.home,
    name: 'home',
    component: Home
  },
  {
    path: Paths.phoneDetail + '/:id',
    name: 'phoneDetail',
    component: PhoneDetail
  },
  {
    path: Paths.topDetail + '/:type',
    name: 'topDetail',
    component: TopDetail
  },
  {
    path: Paths.searchBy + '/:type/:id',
    name: 'searchBy',
    component: SearchBy
  },
  {
    path: Paths.hobbyList + '/:type',
    name: 'hobbyList',
    component: HobbyList
  }


];

let userRoutes = [
  {
    path: Paths.userHome,
    name: 'userHome',
    component: UserHome
  },
  {
    path: Paths.userNickname,
    name: 'userNickname',
    component: UserNickname
  }
];

let routes = [
  {
    path: '/',
    name: 'default',
    component: Default,
    redirect: Paths.home,
    children: chidRoutes
  },
  {
    path: Paths.login,
    name: 'login',
    component: Login,
  },
  {
    path: Paths.register,
    name: 'register',
    component: Register,
  },
  {
    path: Paths.picture3D,
    name: '3d',
    component: Picture3D
  },
  {
    path: Paths.userInfo,
    name: 'userInfo',
    component: UserInfo,
    redirect: Paths.userHome,
    children: userRoutes
  }
];

export default new Router({
  routes: routes
})
