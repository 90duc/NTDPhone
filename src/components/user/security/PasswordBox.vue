<template>
  <div>
    <div class="lb_b">
    </div>
    <div class='lb_form '>
      <div class='lb_box col-xs-offset-1 col-sm-offset-3 col-md-offset-3 col-lg-offset-4 col-xs-10 col-sm-6 col-md-5 col-lg-4'>
        <a class="j_close_dialog dui-dialog-close" @click="close">X</a>
        <div class='lb_content'>
          <div class="lb_title">修改密码</div>
          <div class="lb_field">
            <input type="password" name="name" v-model="oldPassword" placeholder="旧密码">
          </div>
          <div class="lb_field">
            <input class="login_pwd" type="password" v-model="newPassword" placeholder="新密码">
          </div>
          <div class="lb_field">
            <input class="login_pwd" type="password" v-model="newPassword2" placeholder="确认密码">
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
import MD5 from '@/util/md5.js';

let password = ["新密码为空", "新密码长度应为6-20个字符", "新密码不能全为相同字符"];
let password2 = ["确认密码为空", "两次新密码输入不一致"];

export default {
  model: {
    prop: "passwordBoxShow",
    event: "passwordBoxShow"
  },
  data() {
    return {
      util: this.$root,
      oldPassword: "",
      newPassword: "",
      newPassword2: "",
      preLogin:"",
      text: ""
    };
  },
  methods: {
    modify: function() {
      if(!this.check()){
        return;
      }
      let that=this;
      let url = this.$config.dataURL + this.$URL.person.modifyPassword;
      var time =new Date().getTime();
      var mdp=this.util.getSafeData(this.oldPassword,this.preLogin,time);
      this.util.$post(
        url,
        {
          old:mdp ,
          time:time, 
          new1: MD5.md5(this.newPassword).toUpperCase(),
          new2: MD5.md5(this.newPassword2).toUpperCase()
        },
        function(res) {
          let data=res.data;
          if(data.status){
              that.close();
          }else{
            that.text=data.msg;
          }

        }
      );
    
    },
    check: function() {
      if (this.oldPassword == "") {
        this.text = "旧密码不能为空";
        return false;
      }
      let res = this.checkPassword(this.newPassword);
      if (res >= 0) {
        this.text = password[res];
        return false;
      }
      res = this.checkPassword2(this.newPassword, this.newPassword2);
      if (res >= 0) {
        this.text = password2[res];
        return false;
      }

       res = this.checkPassword2(this.oldPassword, this.newPassword2);
      if (res < 0) {
        this.text = "新旧密码相同^^";
        return false;
      }
      return true;
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
    },
    checkPassword2: function(v1, v2) {
      if (v2 == null || v2 == "") return 0;
      if (v1 != v2) return 1;
      return -1;
    },
    close: function() {
      this.$emit("passwordBoxShow", false);
    }
  },created () {
     var that=this;
     this.util.preLogin(function(p){
       that.preLogin=p;
    });
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
