<template>
  <div id='header' class="header">
    <div class="container">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <router-link :to='logo_info.home_path'><img :src="logo_info.logo_path"></router-link>
      <div class="float_right">
        <span v-show="!login_info.isLogin">
         <button class='btn btn-primary' @click="login">登陆</button>
         <button class='btn btn-primary' @click="register">注册</button>
        </span>
        <span v-show="login_info.isLogin">
          <router-link :to='login_info.user_info_path'>
            <span class="user_link">用户</span>
          </router-link>
          <button @mousedown="logout()">退出</button>
        </span>
        </div>
      </div>
    </div>
    <login-box v-if="loginBoxShow" v-model="loginBoxShow"></login-box>
  </div>
</template>
<script>
import Config from "@/config/config";
import LogoPNG from "@/assets/logo3.png";
import Paths from "@/config/path.js";
import LoginBox from "@/components/phone/LoginBox.vue";

let logo_var = {
  logo_path: LogoPNG,
  home_path: Paths.home
};
let login_info = {
  user_info_path: Paths.userInfo,
};

export default {
  components: {
    LoginBox
  },
  data() {
    return {
      logo_info: logo_var,
      login_info: login_info,
      loginBoxShow: false
    };
  },
  methods: {
    login: function() {
      this.$router.push({name:'login',params:{redirect:this.$route}});

    },
    logout: function() {
      this.login_info.isLogin = false;
    },
    register: function() {
      this.$router.push({name:'register',params:{redirect:this.$route}});
    },
    checkLogin: function() {
      return false;
    }
  },
  created() {
    this.login_info.isLogin = this.checkLogin();
    var that = this;
    // that.loginBoxShow=true;
    this.$root.$on("request-login", function(fun) {
      that.loginBoxShow = true;
    });
    this.$root.$on("login", function() {
      that.loginBoxShow = false;
    });
  },
  beforeDestroy() {
    this.$root.$off("request-login");
    this.$root.$off("login");
  }
};
</script>
<style lang="css" scoped>
.header {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  border-bottom: 1px solid #e6e6e6;
  background: #fafaf5;
  text-align: left;
  padding: 5px 0px;
  z-index: 100;
  font-size: 1em;
}

.header img {
  width: 2.8em;
}

.header .float_right {
  float: right;
  vertical-align: center;
  padding-top:.5em;
}
.btn{
  padding:2px 10px;
  font-size: 1em;
}

.header .user_link {
  text-align: center;
}
</style>




