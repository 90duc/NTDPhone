<template>
  <div class='right_frame'>
    <h3>修改头像</h3>
    <div>
      <div class='icon col-xs-12 col-sm-4 col-md-3 col-lg-3 none_padding'>
        <img :src='getIcon(user.image)' />
      </div>
      <div class='col-xs-12 col-sm-5 col-md-4 col-lg-4 none_padding'>
        <input type='file' @change="change($event)">
      </div>
      <div class='clearfix'></div>
    </div>
    <button class='cbtn' @click="upload">上传图片</button>
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
    },
    change:function(e){
        alert(e.target.value);
    },
    getIcon: function(v) {
      if (!v) v = "./static/default.jpg";
      return v;
    }
  },
  created() {
    this.user = this.util.getUser();
  }
};
</script>
<style lang="scss" scoped>
@import "./default.scss";

.icon {
  margin-right: 1.2em;
  margin-bottom: 1em;
}
.icon img {
  width: 100%;
  height: 100%;
}

input{
  width: 100%;
}
</style>
