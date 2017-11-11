<template>
  <div>
    <my-header></my-header>
    <div class='min_height text_left'>
      <div class='uc_nav'>
        <div class='container'>
          <div :class='getClass(i)' @click="select(i)" v-for='(t,i) in titles' :key="t">{{t}}</div>
        </div>
      </div>
      <div class='container'>
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
    <my-footer></my-footer>
  </div>
</template>
<script>
import myHeader from "@/components/header/Header.vue";
import myFooter from "@/components/footer/Footer.vue";


let title_list = ["首页", "账号安全", "账号信息", "帮助中心"];
export default {
  components: {
    myHeader,
    myFooter
  },
  data() {
    return {
      fousedIndex: 0,
      titles: title_list,
       util: this.$root,
    };
  },
  methods: {
    select: function(i) {
      this.fousedIndex = i;
    },
    getClass: function(i) {
      let clas = "";
      if (this.fousedIndex == i) clas = "current";
      return clas;
    }
  },
  created () {
     let that=this;
     this.util.$on('logout',()=>{
        that.util.toLogin(that.$route);
     });
  },beforeDestroy () {
      this.utl.$off('logout');
  }
  
};
</script>
<style scoped>
.uc_nav {
  background: #497e6a;
  width: 100%;
}

.uc_nav > .container > div {
  display: inline-block;
  color: #fff;
  text-align: center;
  width: 5em;
  padding: 8px 0px;
  cursor: pointer;
}

@media (min-width: 768px) {
  .uc_nav > .container > div {
    width: 7em;
  }
}
@media (min-width: 992px) {
  .uc_nav > .container > div {
    width: 8em;
  }
}

.current {
  background: #43a158;
  border: 1px solid #5db015;
}
</style>
