<template>
  <div class='right_frame'>
    <h3>修改头像</h3>
    <div>
      <div id='imageIcon'class='icon col-xs-12 col-sm-4 col-md-3 col-lg-3 none_padding'>
        <img  :src='getIcon(getUser().image)' onerror="javascript:this.src='./static/default.jpg'"/>
      </div>
      <div class='col-xs-12 col-sm-5 col-md-4 col-lg-4 none_padding'>
        <input type='file'  @change="change($event)">
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
   
      fileIcon:null,
      util: this.$root
    };
  },
  methods: {
    upload:function(){
        if(!this.fileIcon){
          alert('a');
          return;
        }
        let that =this;
        let url= this.$config.dataURL + this.$URL.person.uploadIcon;
        this.$formPost(url,{icon:this.fileIcon,image:this.getUser().image},function(res){
             that.getUser().image=res.data.url+"?t="+Math.random();
        });
    },
    change:function(e){
      this.fileIcon=e.target.files[0];
    },
    getIcon: function(v) {
      if (!v) v = "./static/default.jpg";
      return this.$config.imageURL+'/'+v;
    },getUser:function(){
       return this.util.getUser();
    }
  },
  mounted () {
    $('#imageIcon').height($('#imageIcon').width()*0.8);
     window.onresize = function() {
      $('#imageIcon').height($('#imageIcon').width()*0.8);
    };
  }
};
</script>
<style lang="scss" scoped>
@import "./default.scss";

.icon {
  margin-right: 1.2em;
  margin-bottom: 1em;
  height: auto;
}
.icon img {
  width: 100%;
  height: 100%;
}

input{
  width: 100%;
}
</style>
