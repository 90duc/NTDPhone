<template>
  <div id='header' class="header">
    <div class="margin_auto">
      <router-link :to='logo_info.home_path'><img :src="logo_info.logo_path"></router-link>
      <div class="float_right">
        <span v-show="!login_info.isLogin">
          <button @mousedown="login()">登陆</button>
          <button @mousedown="register()">注册</button>
        </span>
        <span v-show="login_info.isLogin">
          <router-link :to='login_info.user_info_path'><span class="user_link">用户</span></router-link>
          <button @mousedown="logout()">退出</button>
        </span>
      </div>
    </div>

  </div>
</template>
<style lang="css" scoped>
.header {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100vw;
  border-bottom: 1px solid #e6e6e6;
  background: #fafaf5;
  text-align: left;
  padding: 5px 0px;
  z-index: 100;
}

.header img {
  width: 40px;
}

.header .float_right {
  float: right;
  vertical-align: center;
}

.header .float_right button {
  width: 60px;
  height: 25px;
  margin: 8px 0px 8px 6px;
  background-color: #FBB03B;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
}
.header .user_link{
  text-align: center; 
  
}
</style>
<<script>
import Config from '@/config/config'
import LogoPNG from '@/assets/logo3.png'

let logo_var={
      logo_path:LogoPNG,
      home_path:'/'
}
let  login_info={
    user_info_path:'user_info',
        isLogin:false,
}

export default {  
   
    data () {
      return {
        logo_info:logo_var,
        login_info:login_info,
      }
    },
    methods: {
      login:function() {

        this.login_info.isLogin=true;
      },
      logout:function() {

        this.login_info.isLogin=false;
      },
      register:function () {
        
         this.login_info.isLogin=true;
      },
      checkLogin:function() {
         return true;
      }
    },
    created () {
       this.login_info.isLogin=this.checkLogin();
      
    }

}
</script>



