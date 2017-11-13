import Password from "@/components/user/security/Password.vue";
import Email from "@/components/user/security/Email.vue";
import LoginInfo from "@/components/user/security/LoginInfo.vue";
import Operate from "@/components/user/security/Operate.vue";

import Paths from '@/config/path.js'
let userSecuritys=Paths.userSecuritys;
let routes=[
    {
      path: userSecuritys.userPassword,
      name: 'password',
      component: Password
    },
    {
      path: userSecuritys.userEmail,
      name: 'email',
      component: Email
    },
    {
      path: userSecuritys.userLoginInfo,
      name: 'loginInfo',
      component: LoginInfo
    },
    {
      path: userSecuritys.userOperate,
      name: 'operate',
      component: Operate
    }
  ];
  
  export default{
      routes:routes
  }