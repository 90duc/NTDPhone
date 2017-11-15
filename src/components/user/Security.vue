<template>
  <div style='margin-top:20px'>
    <div class='col-xs-5 col-sm-4 col-md-3 col-lg-3 none_padding'>
      <div class='aside'>
        <div class='item' v-for="(la,i) in labels" :key='la' :class='getFocus(i)' @click="focus(i)">
          <span class='icon' :class='getIcon(i)'></span>
          <span>{{la}}</span>
        </div>
      </div>
    </div>
    <div class=' col-xs-7 col-sm-8 col-md-9 col-lg-9 right_info'>
      <transition name="tsfade" mode="out-in">
        <router-view class="child-view" v-if="!$route.meta.keepAlive"></router-view>
      </transition>
      <transition name="tsfade" mode="out-in">
        <keep-alive>
          <router-view class="child-view" v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
      </transition>
    </div>
  </div>
</template>
<script>
import Paths from '@/config/path.js'

let classIcons = ["password", "email", "login", "warn"];
export default {
  data() {
    return {
      labels: ["修改密码", "登录邮箱", "登录记录", "敏感操作"],
      focusedIndex: 0,
       paths: [
        Paths.userSecuritys.userPassword,
        Paths.userSecuritys.userEmail,
        Paths.userSecuritys.userLoginInfo,
        Paths.userSecuritys.userOperate
      ]
    };
  },
  methods: {
    getIcon: function(i) {
      return classIcons[i];
    },
    getFocus: function(i) {
      let a = "";
      if (this.focusedIndex == i) a = "focused";

      return a;
    },
    focus: function(i) {
      this.focusedIndex = i;
       this.$router.push({ path: this.paths[i] });
    },
    getIndex: function(rpath) {
      for (var i in this.paths) {
        if (rpath.indexOf(this.paths[i]) == 0) {
          return i;
        }
      }
      return 0;
    },
    init: function() {
      this.focusedIndex = this.getIndex(this.$route.path);
    }
  },
   watch: {
    $route:function(news,old){
         this.init();
    }
  },
  created () {
    this.init();
    //this.focusedIndex=1;
  }
};
</script>
<style lang="scss" scoped>
 @import './default.scss';

.password {
  background-position: 0 -211px;
}
.email {
  background-position: 0 -282px;
}
.login {
  background-position: 0 -388px;
}
.warn {
  background-position: 0 -424px;
}
</style>
