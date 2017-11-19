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

axios.defaults.withCredentials = true;
Vue.prototype.$post = function (url,params, func) {
  let param = new URLSearchParams();
  for(var i in params)
   param.append(i, params[i]);

  axios.post(url,param).then(func)
    .catch(function (error) {
      console.error(error);
    });
}
Vue.prototype.$get = axios.get;
Vue.prototype.$config = Config;
Vue.prototype.$URL=URL; 
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
      let url=this.$config.dataURL+this.$URL.person.login;
     
      this.$post(url,data,function(res){

        this.loginInfo.status = true;
        this.loginInfo.user = data;
      });  
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
    },
    getSafeData: function(data){
      let sha1=SHA1.sha1(data.password);
     
      let sAcount=SHA1.sha1(data.account);
      document.writeln(sAcount);
      let msAcount=MD5.md5(sAcount);
      let time=new Date().getMilliseconds()+'';
      let stime=MD5.md5(time);
      let pass=Base64.encode(msAcount+sha1+'0000'+stime);
      data.password=pass;
    }
  },
  components: { App },
  created() {
    let data={
      account:'张三',
      password:'123456'
    };
    this.getSafeData(data);

   
  }

}).$mount('#apps');
