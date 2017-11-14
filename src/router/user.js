import UserHome from "@/components/user/UserHome.vue";
import UserSecurity from "@/components/user/Security.vue";
import UserPerson from "@/components/user/PersonInfo.vue";
import UserHelp from "@/components/user/Help.vue";

import Paths from '@/config/path.js'

let users=Paths.users;
import UserSecurityRoutes from "./userSecurity.js";
import UserInfos from './userInfo.js'

let securityRoutes=UserSecurityRoutes.routes;
let userInfoRoutes = UserInfos.routes;
let user=[
    {
      path: users.userHome,
      name: 'userHome',
      component: UserHome
    },
    {
      path: users.userSecurity,
      name: 'userSecurity',
      component: UserSecurity,
      redirect: Paths.userSecuritys.userPassword,
     // redirect: Paths.userSecuritys.userEmail,
      children:securityRoutes
    },
    {
      path: users.userPerson,
      name: 'userPerson',
      component: UserPerson,
      redirect: Paths.userInfos.userIcon,
      children:userInfoRoutes
    },
    {
      path: users.userHelp,
      name: 'userHelp',
      component: UserHelp
    }
  ];
  
  export default{
      routes:user
  }