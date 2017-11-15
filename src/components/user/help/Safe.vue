<template>
  <div class='right_frame'>
    <h3>安全问题</h3>
    <div class='info'>
      <div>为什么帐号卫士没有最新的登录记录？</div>
      <div>登录地点不对怎么办？</div>
      <div>关于帐号卫士</div>
    </div>
    <div class='bdf'>
      <h3>上面的说明没有解决您的问题？</h3>
      <div>您可以联系客服人工帮您解决</div>
      <div>来电秀相关问题反馈请拨打{{dataInfo.name}}自助客服<span :tel='dataInfo.phone'>{{dataInfo.phone}}</span></div>
    </div>
  </div>
</template>
<script>
import Paths from "@/config/path.js";

export default {
  data() {
    return {
      modfiyPasswordPath: Paths.userSecuritys.userPassword,
      user: null,
      util: this.$root,
      dataInfo:{
        name:'NTD Phone',
        phone:'020-00000000'
      }
    };
  },
  methods: {
    upload: function() {
      alert("upload");
    }
  },
  created() {
    this.user = this.util.getUser();
  }
};
</script>
<style lang="scss" scoped>
@import "./default.scss";


</style>
