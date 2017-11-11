<template>
    <div>
        <div class='aside col-xs-5 col-sm-4 col-md-3 col-lg-3 none_padding'>
            <div class='logo'>
                <img :src='user.image' class="col-xs-12 col-sm-6 col-md-6 col-lg-6 ">
                <div class="col-xs-12 col-sm-5 col-md-5 col-lg-5 info">
                    <h2 class='name'>{{user.name}}</h2>
                    <router-link :to='nicknamePath'>
                        <div>修改昵称</div>
                    </router-link>
                    <router-link :to='nicknamePath'>
                        <div>修改个人信息</div>
                    </router-link>
                </div>
                <div class='clearfix'></div>
            </div>
            <div>as</div>
        </div>
        <div class='left col-xs-7 col-sm-8 col-md-9 col-lg-9'></div>
    </div>
</template>
<script>
import Paths from "@/config/path.js";

export default {
  data() {
    return {
      nicknamePath: Paths.userNickname,
      user: null,
      util: this.$root
    };
  },
  created() {
    if (!this.util.checkLogin()) {
      this.util.toLogin(this.$route);
      return;
    }
    this.user = this.util.getUser();
  }
};
</script>
<style scoped>
.left,
.aside {
  border: 1px solid #ddd;
  background: #fcfcfc;
  min-height: calc(100vh - 15em);
  margin-top: 1.2em;
}
.logo {
  border-bottom: 1px solid #ddd;
  padding:17px 15px ;
}
.logo img {
  padding:0px;
  height: 30vw;
  max-height: 10em;
  margin-right: 12px;
}
.info {
   padding: 0px; 
}
.name {
  margin-top: 20px;
  font-weight: 400;
  color: #444;
  font-size: 1.2em;
  font-family: "Microsoft Yahei";
  overflow: hidden;
}
.info div {
  padding: 5px 0px;
}
a:hover {
  color: green;
}
</style>
