<template>
  <div>
    <div class="lb_b">
    </div>
    <div class='lb_form '>
      <div class='lb_box col-xs-offset-1 col-sm-offset-3 col-md-offset-3 col-lg-offset-4 col-xs-10 col-sm-6 col-md-5 col-lg-4'>
        <a class="j_close_dialog dui-dialog-close" @click="close">X</a>
        <div class='lb_content'>
          <div class="lb_title">修改邮箱</div>
          <div class="lb_field" style='height:2em;'>
            <span>原邮箱：</span>
            <span>{{getUser().email}}</span>
          </div>
          <div class="lb_field">
            <input class="login_pwd" type="text" v-model="newEmail" placeholder="新邮箱">
          </div>
          <div class='warn'>{{text}}</div>
          <div class="lb_field">
            <input class="btn btn-movie" type="button" value="修改" @click="modify">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Data from "@/components/default/data.js";

let email = ["新邮箱为空", "新邮箱格式有误", "新旧邮箱相同"];
export default {
  model: {
    prop: "emailBoxShow",
    event: "emailBoxShow"
  },
  data() {
    return {
      util: this.$root,
      newEmail: "",
      text: ""
    };
  },
  methods: {
    getUser: function() {
      return this.util.getUser();
    },
    modify: function() {
      if(!this.check()){
        return;
      }
      let that = this;
      let url = this.$config.dataURL + this.$URL.person.modifyEmail;
      this.util.$post(
        url,
        {
          old: this.getUser().email,
          new1: this.newEmail
        },
        function(res) {
          let data = res.data;
          if (data.status) {
            window.location.reload();
          } else {
            that.text = data.msg;
          }
        }
      );
    },
    check: function() {
      let res = this.checkEmail(this.newEmail, this.getUser().email);
      if (res >= 0) {
        this.text = email[res];
        return false;
      }
      return true;
    },
    checkEmail: function(value, old) {
      if (value == null || value == "") return 0;
      let regx = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
      let res = regx.test(value);
      if (!res) return 1;
      if (value == old) return 2;
      return -1;
    },
    close: function() {
      this.$emit("emailBoxShow", false);
    }
  },
  created() {

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
  height: 20em;
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
  margin: 8% auto;
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
  margin-top: 5px;
  border: none;
  width: 100%;
  height: 2.5em;
  border-radius: 3px;
  background-color: #00ae1c;
  color: white;
  cursor: pointer;
}

.warn {
  color: red;
  padding-left: 1em;
}
</style>
