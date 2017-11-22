<template>
  <div class='right_frame'>
    <h3>修改昵称</h3>
    <div>
      <div class='info col-xs-12 col-sm-4 col-md-3 col-lg-3 none_padding'>
        <span>昵称：</span>
        <span>{{getUser().name}}</span>
      </div>
      <div class='info col-xs-12 col-sm-5 col-md-4 col-lg-4 none_padding' style="margin-right:2em">
        <input type='text' v-model='nickname' placeholder="新昵称">
      </div>
      <div class='info warn col-xs-12 col-sm-3 col-md-4 col-lg-4'>{{text}}</div>
      <div class='clearfix'></div>
    </div>
    <button class='cbtn' @click="save">修改昵称</button>
  </div>
</template>
<script>
import Paths from "@/config/path.js";

let nickname = ["昵称为空", '昵称应为2-14个字符,支持中英文、数字或"_"'];
export default {
  data() {
    return {
      modfiyPasswordPath: Paths.userSecuritys.userPassword,
      util: this.$root, 
      text: "",
      nickname: ""
    };
  },
  methods: {
    save:function(){
        // if(!this.check())
        // return;
         let that = this;
      let url = this.$config.dataURL + this.$URL.person.modifyUserName;
      this.util.$post(
        url,
        {
          oldName: this.getUser().name,
          newName: this.nickname
        },
        function(res) {
          let data = res.data;
          if (data.status) {
           that.getUser().name=that.nickname;
           that.init();
          } else {
            that.text = data.msg;
          }
        }
      );
    },
    check: function() {
      let res = this.checkUser(this.nickname);
      if (res >= 0) {
        this.text = nickname[res];
        return false;
      }
      return true;
    },
    checkUser: function(value) {
      if (value == null || value == "") return 0;
      let regx = /^[\u4e00-\u9fa5a-zA-Z0-9_]{2,14}$/;
      let res = regx.test(value);
      if (!res) return 1;
      return -1;
    },
    getUser: function() {
      return this.util.getUser();
    },
    init:function(){
         this.text='';
         this.nickname='';
    }
  },
  created() {
    this.init();
  },
};
</script>
<style lang="scss" scoped>
@import "./default.scss";

.info {
  margin-top: 1em;
}
input {
  width: 100%;
  border: 1px solid #999;
  border-radius: 3px;
  padding: 4px 10px;
}
.cbtn {
  margin-top: 1em;
  margin-right: 5em;
}
.warn {
  color: red;
  padding: 2px 0px 0px 0px;
}
</style>
