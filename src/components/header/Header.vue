<template>
  <div id='header' class="header">
    <div class="container">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 none_padding">
        <router-link :to='logo_info.home_path'><img :src="logo_info.logo_path"></router-link>
        <div class="float_right">
          <span v-if="!checkLogin()">
            <button class='btn btn-primary' @click="login">登陆</button>
            <button class='btn btn-primary' @click="register">注册</button>
          </span>
          <div v-else class="login_box">
            <button class="user_link like_a" @click="click($event)" @blur="clearBox">{{getUser().name}}的账号
              <span class='arrow'></span>
            </button>
            <div class='login_item' ref='userItem'>
              <router-link :to='userInfoPath'>
                <div>个人主页</div>
              </router-link>
              <div class='like_a' @click="logout">退出</div>
            </div>
          </div>
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

let requestLoginBox = "request-login";
export default {
  components: {
    LoginBox
  },
  data() {
    return {
      logo_info: logo_var,
      userInfoPath: Paths.userInfo,
      loginBoxShow: false
    };
  },
  methods: {
    login: function() {
      this.$router.push({ name: "login", params: { redirect: this.$route } });
    },
    logout: function() {
      this.$root.logout();
    },
    register: function() {
      this.$router.push({
        name: "register",
        params: { redirect: this.$route }
      });
    },
    checkLogin: function() {
      return this.$root.checkLogin();
    },
    getUser: function() {
      return this.$root.getUser();
    },
    showBox: function() {
      $(this.$refs.userItem).fadeIn("slow");
    },
    clearBox: function() {
      $(this.$refs.userItem).fadeOut("slow");
    },
    click: function(e) {
      if ($(this.$refs.userItem).is(":hidden")) this.showBox();
      else e.target.blur();
    }
  },
  created() {
    var that = this;
    // that.loginBoxShow=true;
    this.$root.$on(requestLoginBox, function(fun) {
      that.loginBoxShow = true;
    });
  },
  beforeDestroy() {
    this.$root.$off(requestLoginBox);
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
  padding-top: 0.5em;
}
.btn {
  padding: 2px 10px;
  font-size: 1em;
}
.login_box {
  position: relative;
}
.user_link {
  text-align: center;
  padding: 5px 0px 5px 0px;
  border: none;
  background: transparent;
}
.user_link:focus {
  outline: none;
}
.user_link:focus .arrow {
  border-width: 7px 5px 0 5px;
  border-color: gray transparent transparent transparent;
}
.login_item {
  display: none;
  position: absolute;
  top: 2.6em;
  right: 0;
  width: 6em;
  padding: 15px 0px 5px 0px;
  border: 1px solid #e6e6e6;
  background: #fff;
  z-index: -1;
}
.login_item div {
  width: 70%;
  margin: 0px auto;
  padding-bottom: 10px;
}
.arrow {
  width:10px;
  display: inline-block;
  vertical-align: middle;
  border-style: solid dashed dashed dashed;
  border-width: 5px 0px 5px 7px;
  border-color: transparent transparent transparent gray;
}
</style>




