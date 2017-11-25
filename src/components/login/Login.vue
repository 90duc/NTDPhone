<template>
  <div>
    <div class="container text_left ">
      <div class='row '>
        <div class='col-xs-12 col-sm-6 col-md-4 col-lg-4 col-md-offset-1 col-lg-offset-1 none_padding'>
          <router-link :to='path.homePath'>
            <img :src="logo">
          </router-link>
          <div class='title'>
            <h4>NTD Phone登录</h4>
          </div>
        </div>
      </div>
      <div class='row top_padding'>
        <div class='col-xs-12 col-sm-6 col-md-5 col-lg-4 col-md-offset-1 col-lg-offset-1 '>
          <div class='row none_margin top_padding'>
            <label class='label_n'>账号</label>
            <input type="text" class="form-control " v-model="dataInfo.account" placeholder="请输入账号" />

          </div>
          <div class='row none_margin top_padding'>
            <label class='label_n'>密码</label>
            <input type="password" class="form-control " v-model="dataInfo.password" placeholder="请输入密码" />
          </div>
          <div class='row none_margin top_padding tip'>{{tipInfo}}</div>
          <div class='row none_margin  top_padding'>
            <button @click="login" class="btn btn-success col-xs-offset-1 col-sm-offset-2 col-md-offset-2 col-lg-offset-2 col-xs-10 col-sm-8 col-md-8 col-lg-8">提交</button>
          </div>
          <div class='row none_margin  top_padding'>
            <span class='col-xs-offset-1 col-sm-offset-2 col-md-offset-2 col-lg-offset-2 col-xs-5 col-sm-4 col-md-3 col-lg-3 none_padding'>
              <span class='like_a '>忘记密码</span>
            </span>
            <div @click='register'>
              <span class='col-xs-5 col-sm-4 col-md-5 col-lg-5 none_padding' style='text-align:right'>
                <span class='like_a '>注册</span>
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
import myFooter from "@/components/footer/Footer.vue";
import logo from "@/assets/logo_account.png";
import Paths from "@/config/path.js";
import Data from "@/components/default/data.js";

let path = {
  homePath: Paths.pages.home,
  registerPath: Paths.roots.register
};

let texts = ["账号不存在", "密码错误"];
export default {
  components: {
    myFooter
  },
  data() {
    return {
      logo: logo,
      path: path,
      dataInfo: {
        account: "",
        password: ""
      },
      tipInfo: "",
      util: this.$root
    };
  },
  methods: {
    login: function() {
      //if (!this.check()) return;
      let data = {
        account: this.dataInfo.account,
        password: this.dataInfo.password
      };
      let that = this;
      this.util.login(data, function(data) {
        if (data.status) {
          var url = that.$route.params.redirect;
          if (url) that.$router.push({ path: url.path, query: url.query });
          else that.$router.push({ path: "/" });
        } else {
          that.tipInfo = data.msg;
        }
      });
    },
    register: function() {
      var url = this.$route.params.redirect;
      this.util.toRegister(url);
    },
    check: function() {
      let result = true;
      let res = this.checkEmail(this.dataInfo.account);
      result = result && res < 0;
      if (res >= 0) {
        this.tipInfo = texts[0];
        return result;
      }

      res = this.checkPassword(this.dataInfo.account);
      if (res >= 0) this.tipInfo = texts[1];
      result = result && res < 0;
      return result;
    },
    checkEmail: function(value) {
      if (value == null || value == "") return 0;
      let regx = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
      let res = regx.test(value);
      if (!res) return 1;

      return -1;
    },
    checkPassword: function(value) {
      if (value == null || value == "") return 0;
      let regx = /^\w{6,20}$/;
      let res = regx.test(value);
      if (!res) return 1;

      regx = /^(\w)\1{1,}$/;
      res = regx.test(value);
      if (res) return 2;
      return -1;
    }
  },
  created() {
    this.dataInfo.account = "12@qq.com";
    this.dataInfo.password = "123456";
  }
};
</script>

<style scoped>
.none_padding img {
  width: 100%;
}
.title {
  width: 100%;
  text-align: center;
}
.container {
  min-height: calc(100vh - 11.4em);
}
.top_padding {
  padding-top: 1.2em;
}
.label_n {
  width: 2.5em;
}
.form-control {
  display: inline-block;
  width: calc(100% - 3em);
}

.tip {
  margin-left: 3.5em;
  outline: none;
  color: red;
}
</style>
