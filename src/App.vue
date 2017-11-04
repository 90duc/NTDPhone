<template>
  <div id="app">
 <div class="container">
    <my-header></my-header>
    <div class="content margin_auto">
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
import Vue from "vue";
import myHeader from "@/components/header/Header.vue";
import myFooter from "@/components/footer/Footer.vue";

//Vue.use(Header);
export default {
  components: {
    myHeader,
    myFooter
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.content {
  min-height: 100vh;
  /*calc(100vh - 150px);*/
}

.tsfade-enter-active,
.tsfade-leave-active {
  transition: opacity 0.4s;
}

.tsfade-enter,
.tsfade-leave-to {
  opacity: 0;
}

a {
  text-decoration: none;
  color: black;
}
</style>
