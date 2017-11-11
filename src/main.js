// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/bootstrap/js/bootstrap.min.js'
import '@/assets/bootstrap/css/bootstrap.min.css'
import 'babel-polyfill'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  template: '<App/>',
  data() {
    return {
      loginInfo: {
        status: false,
        user: null
      }
    }
  },
  methods: {
    requestLogin: function () {
      if (!this.checkLogin()) {
        this.$emit('request-login');
        return false;
      }
      return true;
    },
    toLogin: function (route) {
      this.$router.push({ name: "login", params: { redirect: route } });
    },
    toRegister: function (route) {
      this.$router.push({
        name: "register",
        params: { redirect: route }
      });
    },
    checkLogin: function () {
      return this.loginInfo.status;
    },
    login: function (data) {
      this.loginInfo.status = true;
      this.loginInfo.user = data;
    },
    logout: function () {
      this.loginInfo.status = false;
      this.$emit('logout');
    },
    getUser: function () {
      return this.loginInfo.user;
    },
    getLoginInfo: function () {
      return this.loginInfo;
    }
  },
  components: { App }
}).$mount('#apps');
