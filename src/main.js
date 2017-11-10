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
      loginInfo: null
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
    checkLogin: function () {
      return this.loginInfo != null;
    },
    login: function (data) {
      this.loginInfo = data;
    },
    logout: function () {
     this.loginInfo = null;
    },
    getUser: function () {
      return this.loginInfo;
    }
  },
  components: { App }
}).$mount('#apps');
