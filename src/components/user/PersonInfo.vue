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
let classIcons = ["image", "user", "userInfo", "userDetail"];
export default {
  data() {
    return {
      labels: ["我的头像", "用户昵称", "基本资料", "详细资料"],
      focusedIndex: 0
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
    }
  }
};
</script>
<style lang="scss" scoped>
 @import './default.scss';

.image {
  background-position: 0 -0px;
}
.user {
  background-position: 0 -139px;
}
.userInfo {
  background-position: 0 -36px;
}
.userDetail {
  background-position: 0 -70px;
}
</style>
