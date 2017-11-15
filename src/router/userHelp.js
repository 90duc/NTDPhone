import Account from "@/components/user/help/Account.vue";
import Safe from "@/components/user/help/Safe.vue";
import Other from "@/components/user/help/Other.vue";


import Paths from '@/config/path.js'
let userHelps=Paths.userHelps;
let routes=[
    {
      path: userHelps.account,
      name: 'account',
      component: Account
    },
    {
      path: userHelps.safe,
      name: 'safe',
      component: Safe
    },
    {
      path: userHelps.other,
      name: 'other',
      component: Other
    }
  ];
  
  export default{
      routes:routes
  }