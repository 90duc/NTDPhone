import UserHome from "@/components/user/UserHome.vue";
import UserNickname from "@/components/user/NickName.vue";
import UserSecurity from "@/components/user/Security.vue";
import UserPerson from "@/components/user/PersonInfo.vue";
import UserHelp from "@/components/user/Help.vue";

import Paths from '@/config/path.js'

let users=Paths.users;
import UserSecurityRoutes from "./userSecurity.js";

let securityRoutes=UserSecurityRoutes.routes;

let user=[
    {
      path: users.userHome,
      name: 'userHome',
      component: UserHome
    },
    {
      path: users.userNickname,
      name: 'userNickname',
      component: UserNickname
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
      component: UserPerson
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