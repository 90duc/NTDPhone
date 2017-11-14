<template>
  <div class='right_frame'>
    <h3>修改头像</h3>
    <div >
      <div class='info col-xs-12 col-sm-4 col-md-3 col-lg-3 none_padding'>
        <span>昵称：</span><span>{{user.name}}</span>
      </div>
      <div class='info col-xs-12 col-sm-5 col-md-4 col-lg-4 none_padding'>
        <input type='text' placeholder="新昵称">
      </div>
      <div class='clearfix'></div>
    </div>
    <button class='cbtn' @click="upload">修改昵称</button>
  </div>
</template>
<script>
import Paths from "@/config/path.js";

export default {
  data() {
    return {
      modfiyPasswordPath: Paths.userSecuritys.userPassword,
      user: null,
      util: this.$root
    };
  },
  methods: {
    upload:function(){
          alert('upload');
    }
   
  },
  created() {
    this.user = this.util.getUser();
  }
};
</script>
<style lang="scss" scoped>
@import "./default.scss";

.info{
   margin-top: 1em;
}
input{
  width: 100%;
  border: 1px solid #999;
  border-radius: 3px;
  padding: 4px 10px;
}
.cbtn{
  margin-top:1em;
}
</style>
