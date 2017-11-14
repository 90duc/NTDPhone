import UserIcon from "@/components/user/personInfo/Icon.vue";
import Nickname from "@/components/user/personInfo/NickName.vue";
import UserInfo from "@/components/user/personInfo/userInfo.vue";
import UserDetail from "@/components/user/personInfo/userInfo.vue";

import Paths from '@/config/path.js'
let userInfos=Paths.userInfos;
let routes=[
    {
      path: userInfos.userIcon,
      name: 'userIcon',
      component: UserIcon
    },
    {
      path: userInfos.userNickname,
      name: 'userNickname',
      component: Nickname
    },
    {
      path: userInfos.userInfo,
      name: 'userInfo',
      component: UserInfo
    },
    {
      path: userInfos.userDetail,
      name: 'userDetail',
      component: UserDetail
    }
  ];
  
  export default{
      routes:routes
  }