// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
import Config from '@/config/config.js';
import URL from '@/config/url.js';
import MD5 from '@/util/md5.js';
import SHA1 from '@/util/sha1.js';
import Base64 from '@/util/base64.js';

import '@/assets/bootstrap/js/bootstrap.min.js'
import '@/assets/bootstrap/css/bootstrap.min.css'
import 'babel-polyfill'

function bodySize() {
  let w = document.body.clientWidth;
  let size;
  if (w >= 1200) {
    size = 6;
  } else if (w >= 992) {
    size = 6;
  } else if (w >= 768) {
    size = 4;
  }else{
    size = 3;
  }
  return size;
}
Config.lineNumber=bodySize();

axios.defaults.withCredentials = true;
Vue.prototype.$post = function (url, params, func) {
  let param = new URLSearchParams();
  for (var i in params)
    param.append(i, params[i]);

  axios.post(url, param).then(func)
    .catch(function (error) {
      console.error(error);
    });
}
Vue.prototype.$get = axios.get;
Vue.prototype.$formPost=function (url, params, func) {
  
    let formdata = new FormData();
    for (var i in params)
    formdata.append(i,params[i]);

    axios({
        url:url,
        method:'post',
        data:formdata,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).then(func).catch(function (error) {
      console.error(error);
    });
}
Vue.prototype.$config = Config;
Vue.prototype.$URL = URL;
Vue.config.productionTip = false

/* eslint-disable no-new */
let vm = new Vue({
  router,
  template: '<App/>',
  data() {
    return {
      isInit: false,
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
    isNoLogin: function () {
      if (this.isInit)
        return !this.loginInfo.status;
      else {
        return false;
      }
    },
    login: function (data, func) {
      let url = this.$config.dataURL + this.$URL.person.login;
      let that = this;
      this.$post(url, data, function (res) {
        let data = res.data;
        that.loginInfo.status = data.status;
        that.loginInfo.user = data.user;
        func(data);

      });

    },
    register: function (data, func) {
      let url = this.$config.dataURL + this.$URL.person.register;
      let that = this;
      this.$post(url, data, function (res) {
        let data = res.data;
        that.loginInfo.status = data.status;
        that.loginInfo.user = data.user;
        func(data);

      });
    },
    logout: function () {
      let url = this.$config.dataURL + this.$URL.person.logout;
      let that = this;
      this.$post(url, {}, function (res) {

        that.loginInfo.status = false;
        that.loginInfo.user = null;
        that.$emit('logout');

      });

    },
    getUser: function () {
      if (!this.isInit) {
        return {};
      }
      else if (this.loginInfo.user == null) {
        this.toLogin(this.$route);
        return {};
      }
      return this.loginInfo.user;
    },
    getUserInfo: function () {
      if (this.loginInfo.user == null) {
        return {};
      }
      return this.loginInfo.user;
    },
    getLoginInfo: function () {
      return this.loginInfo;
    },
    getSafeData: function (data) {
      let sha1 = SHA1.sha1(data.password);

      let sAcount = SHA1.sha1(data.account);
      document.writeln(sAcount);
      let msAcount = MD5.md5(sAcount);
      let time = new Date().getMilliseconds() + '';
      let stime = MD5.md5(time);
      let pass = Base64.encode(msAcount + sha1 + '0000' + stime);
      data.password = pass;
    },
    getData: function () {
      let url = this.$config.dataURL + this.$URL.person.checkLogin;
      let that = this;
      this.$post(url, {}, function (res) {
        let data = res.data;
        that.isInit = true;
        that.loginInfo.status = data.status;
        that.loginInfo.user = data.user;
      }
      );
    }

  },
  components: { App },
  created() {
    this.getData();
  }
});
vm.$mount('#apps');
