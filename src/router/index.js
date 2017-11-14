import Vue from 'vue'
import Router from 'vue-router'
import Default from '@/components/default/Default.vue'
import Login from '@/components/login/Login.vue'
import Register from '@/components/login/Register.vue'
import Picture3D from '@/components/page/3d/Picture3D.vue'
import User from '@/components/user/User.vue'

import Paths from '@/config/path.js'

import Users from './user.js'
import Pages from './page.js'


let roots=Paths.roots; 
Vue.use(Router);

let pageRoutes =Pages.pageRoutes; 
let userRoutes = Users.routes;

let routes = [
  {
    path: '/',
    name: 'default',
    component: Default,
    redirect: Paths.pages.home,
    children: pageRoutes
  },
  {
    path: roots.login,
    name: 'login',
    component: Login,
  },
  {
    path: roots.register,
    name: 'register',
    component: Register,
  },
  {
    path: roots.picture3D,
    name: '3d',
    component: Picture3D
  },
  {
    path: roots.user,
    name: 'user',
    component: User,
    redirect: Paths.users.userHome,
    children: userRoutes
  }
];

export default new Router({
  routes: routes
})
