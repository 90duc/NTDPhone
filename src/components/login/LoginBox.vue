<template>
  <div>
    <div class="lb_b">
    </div>
    <div class='lb_form '>
      <div class='lb_box col-xs-offset-1 col-sm-offset-3 col-md-offset-3 col-lg-offset-4 col-xs-10 col-sm-6 col-md-5 col-lg-4'>
        <a class="j_close_dialog dui-dialog-close" @click="close">X</a>
        <div class='lb_content'>
          <div class="lb_title">欢迎来到{{title}}，请登录</div>
          <div class="lb_field">
            <input type="text" name="name" v-model='account' placeholder="邮箱">
          </div>
          <div class="lb_field">
            <input class="login_pwd" type="password" v-model='password' placeholder="密码">
          </div>
          <div class="warn">
            {{text}}
          </div>
          <div class="lb_field">
            <input class="btn btn-movie" type="submit" value="登录" @click="login">
          </div>
          <div class="lb_field lb_field-remember">
            <div class=' relative'>
              <label>
                <input type="checkbox" name="remember">
                <span>下次自动登录</span>
              </label>
              <div @click='register' class='register like_a'>注册</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
var title = "NTD Phone";
import Data from "@/components/default/data.js";
import Verify from "./verify.js";

let emailTexts = ["邮箱为空", "邮箱格式有误", "该邮箱已经注册"];
let passwordTexts = ["密码为空", "密码长度应为6-20个字符", "密码不能全为相同字符"];

export default {
  model: {
    prop: "loginBoxShow",
    event: "loginBoxShow"
  },
  data() {
    return {
      title: title,
      util: this.$root,
      account: "",
      password: "",
      text: ""
    };
  },
  methods: {
    login: function() {
      if (!this.check()) return;

      let that = this;
      let data = { account: this.account, password: this.password };
      this.util.login(data, function(data) {
        if (data.status) {
          that.close();
        } else {
          that.text = data.msg;
        }
      });
    },
    check: function() {
      let res = Verify.checkEmail(this.account);
      if (res >= 0) {
        this.text = emailTexts[res];
        return false;
      }

      res = Verify.checkPassword(this.password);
      if (res >= 0) {
        this.text = passwordTexts[res];
        return false;
      }
      return true;
    },
    close: function() {
      this.$emit("loginBoxShow", false);
    },
    register: function() {
      this.util.toRegister(this.$route);
    }
  },
  created() {
    this.account = "12@qq.com";
    this.password = "123456";
  }
};
</script>
<style scoped>
.lb_b,
.lb_form {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 100;
}
.lb_b {
  background: #1f1f1f;
  opacity: 0.4;
  z-index: 51;
}

.lb_form {
  height: 100%;
  overflow: hidden;
}
.lb_box {
  height: 25em;
  margin-top: calc((100vh - 25em) / 2);
  /* margin-bottom: calc((100vh - 422px) / 2); */
  background: white;
  border: 1px solid #bbb;
  border-radius: 5px;
}
.lb_box > a {
  position: absolute;
  top: 1em;
  right: 1.1em;
  font-size: 1.2em;
  color: #b4b4b4;
  padding: 2px 7px;
  cursor: pointer;
}
.lb_box > a:hover {
  color: #fab0b6;
}
.lb_content {
  height: 70%;
  width: 80%;
  margin: 15% auto;
}
.lb_title {
  width: 100%;
  text-align: center;
  text-align: center;
  font-size: 1.5em;
  font-weight: normal;
  margin-bottom: 30px;
  line-height: 1em;
}
.lb_field {
  height: 3em;
  margin-top: 10px;
  /* overflow: hidden; */
}
.warn {
  color: red;
  padding-left: 10px;
  height: 1.2em;
}
.lb_field input[type="text"],
.lb_field input[type="password"] {
  border: 1px solid #ccc;
  width: 100%;
  height: 2.5em;
  padding: 12px 40px 12px 10px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 3px;
  -webkit-box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.06);
  -moz-box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.06);
  box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.06);
}

.lb_field .btn.btn-movie {
  background-color: green;
}
.lb_field .btn {
  border: none;
  width: 100%;
  height: 2.5em;
  border-radius: 3px;
  background-color: #00ae1c;
  color: white;
  cursor: pointer;
}

.lb_field-remember {
  color: #666;
  font-size: 14px;
  width: 100%;
}
.relative {
  width: 100%;
}
.register {
  position: absolute;
  right: 0px;
  top: 0px;
  font-size: 1em;
}
</style>
