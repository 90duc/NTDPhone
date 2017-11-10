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
            <input type="text" name="name" placeholder="邮箱">
          </div>
          <div class="lb_field">
            <input class="login_pwd" type="password" name="password" placeholder="密码">
          </div>
          <div class="lb_field">
            <input class="btn btn-movie" type="submit" value="登录" @click="login">
          </div>
          <div class="lb_field lb_field-remember">
            <label>
              <input type="checkbox" name="remember"> 下次自动登录
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
var title = "NTD Phone";

export default {
  model: {
    prop: "loginBoxShow",
    event: "loginBoxShow"
  },
  data() {
    return {
      title: title
    };
  },
  methods: {
    login: function() {
      this.$root.login({name:'张三',account:'244831.@qq.com'});
      this.close();
    },
    check: function() {},
    close: function() {
      this.$emit("loginBoxShow", false);
    }
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
  margin-top: calc((100vh - 30em) / 2);
  /* margin-bottom: calc((100vh - 422px) / 2); */
  background: white;
  border: 1px solid #bbb;
  border-radius: 5px;
}
.lb_box > a {
  position: absolute;
  top: 1em;
  right:1.1em;
  font-size: 1.2em;
  color: #b4b4b4;
  padding:2px 7px;
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
  overflow: hidden;
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
  margin-top: 10px;
  border: none;
  width: 100%;
  height: 2.5em;
  border-radius: 3px;
  background-color: #00ae1c;
  color: white;
  cursor: pointer;
}

.lb_field-remember {
  padding-top: 10px;
  color: #666;
  font-size: 14px;
}
</style>
