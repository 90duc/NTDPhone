<template>
  <div>
    <div class="container text_left ">
      <div class='row '>
        <div class='col-xs-12 col-sm-6 col-md-4 col-lg-4 col-md-offset-1 col-lg-offset-1 none_padding'>
          <router-link :to='path.homePath'>
            <img :src="logo">
          </router-link>
          <div class='title'>
            <h4>NTD Phone注册</h4>
          </div>
        </div>
      </div>
      <div class='row top_padding'>
        <div class='col-xs-12 col-sm-6 col-md-5 col-lg-4 col-md-offset-1 col-lg-offset-1 '>
          <p class='row none_margin top_padding' v-for='data in dataInfo' :key="data.index">
            <label class='label_n' @click="opBlur(data)">{{data.name}}</label>
            <span class='input_field'>
              <input type="text" v-if='data.type=="text"' v-model='data.value' :placeholder="data.placeHolder" class="form-control" :class='data.color' @click="opFocus($event,data)" />
              <input type="password" v-else v-model='data.value' :placeholder="data.placeHolder " class="form-control " :class='data.color' @click="opFocus($event,data)" />
            </span>
            <span class='tip' :class='data.color'>{{data.text[data.index]}}</span>
          </p>
          <div class='row none_margin top_padding tip warn_text'>{{tipInfo}}</div>
          <div class='row none_margin  top_padding'>
            <button @click="register" class="btn btn-success col-xs-offset-1 col-sm-offset-2 col-md-offset-2 col-lg-offset-2 col-xs-10 col-sm-8 col-md-8 col-lg-8">提交</button>
          </div>
          <div class='row none_margin  top_padding'>
            <span class='col-xs-offset-6 col-sm-offset-5 col-md-offset-5 col-lg-offset-5 col-xs-5 col-sm-5 col-md-5 col-lg-5 none_padding' style='text-align:right;padding-right:10px;'>
              <span class='like_a ' @click='login'>已注册，请登录</span>
            </span>
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
import Verify from "./verify.js";

let path = {
  homePath: Paths.pages.home,
  registerPath: Paths.roots.register
};
let colors = {
  default: "default",
  warn: "warn",
  focus: "focuse"
};
export default {
  components: {
    myFooter
  },
  data() {
    return {
      logo: logo,
      path: path,
      util: this.$root,
      focusItem: null,
      tipInfo:'',
      dataInfo: {
        email: {
          name: "邮箱",
          placeHolder: "请输入邮箱作为账号",
          type: "text",
          text: ["请输入您的常用邮箱", "邮箱格式有误", "该邮箱已经注册"],
          value: "",
          index: 0,
          color: ""
        },
        user: {
          name: "用户名",
          placeHolder: "请输入用户名",
          type: "text",
          text: ['2-14个字符：英文、数字或中文或"_"', '用户名应为2-14个字符,支持中英文、数字或"_"'],
          value: "",
          index: 0,
          color: ""
        },
        password: {
          name: "密码",
          placeHolder: "请输入密码",
          type: "password",
          text: ["6-20个字符(区分大小写)", "密码长度应为6-20个字符", "密码不能全为相同字符"],
          value: "",
          index: 0,
          color: ""
        },
        password2: {
          name: "确认密码",
          placeHolder: "请输入确认密码",
          type: "password",
          text: ["请再次输入密码", "两次密码输入不一致"],
          value: "",
          index: 0,
          color: ""
        }
      }
    };
  },
  methods: {
    login: function() {
      var url = this.$route.params.redirect;
      this.util.toLogin(url);
    },
    register: function() {
       if (!this.check()) return;
      let that = this;
      let data = {
        account: this.dataInfo.email.value,
        userName:this.dataInfo.user.value,
        password: this.dataInfo.password.value,
        password2: this.dataInfo.password2.value
      };
      this.util.register(data, function(data) {
        if (data.status) {
          var url = that.$route.params.redirect;
          if (url) that.$router.push({ path: url.path, query: url.query });
          else that.$router.push({ path: "/" });
        }else{
           that.tipInfo=data.msg;
        }
      });
    },
    opBlur: function(value) {
      if (value == null) return;
      let res = 0;
      let data = this.dataInfo;
      switch (value) {
        case data.email:
          res = Verify.checkEmail(value.value);
          break;
        case data.user:
          res = Verify.checkUser(value.value);
          break;
        case data.password:
          res = Verify.checkPassword(value.value);
          break;
        case data.password2:
          res = Verify.checkPassword2(value.value,data.password.value);
          break;
      }
      if (res < 0) res = 0;
      value.index = res;
      if (res == 0) value.color = colors.default;
      else value.color = colors.warn;
    },
    opFocus: function(e, data) {
      this.opBlur(this.focusItem);
      this.focusItem = data;
      data.index = 0;
      data.color = colors.focus;
    },
    check: function() {
      var result = true;
      let data = this.dataInfo;
      let da = [data.email, data.user, data.password, data.password2];
      let op = [
        Verify.checkEmail,
        Verify.checkUser,
        Verify.checkPassword,
        Verify.checkPassword2
      ];
      for (var i = 0; i < da.length; i++) {
        let value = da[i];
        let res = op[i](value.value,da[2].value);
        result = result && res < 0;
        this.setColor(value, res);
      }
      return result;
    },
    setColor: function(value, res) {
      value.index = res < 0 ? 0 : res;
      if (res < 0) value.color = colors.default;
      else value.color = colors.warn;
    }
    
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
  width: 4.5em;
  text-align: right;
  margin-right: 0.5em;
}
div.warn_text{
  padding-left: 5.7em;
   color: red;
}
.tip {
  display: inline-block;
  margin-left: 5.5em;
  outline: none;
}
.tip.warn{
  color: red;
}
.tip,
.tip.focuse,
.tip.default {
  color: #959393;
}
.input_field {
  display: inline-block;
  width: calc(100% - 5.5em);
  padding-bottom: 5px;
}
.form-control {
  margin: 2px 0px;
  display: inline-block;
  height: 2.5em;
  padding: 5px 5px;
  width: 100%;
}

.form-control.warn {
  border-color: rgb(255, 99, 8);
  box-shadow: 0px 0px 5px rgb(255, 59, 8);
}
.form-control.default {
  border-color: #ccc;
  box-shadow: none;
}
.form-control:focus,
.form-control.focuse {
  border-color: #5cb85c;
  box-shadow: 0px 0px 5px #5cb85c;
}
</style>
