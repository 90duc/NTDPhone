<template>
  <div id="app">
    <transition name="tsfade" mode="out-in">
      <router-view  v-if="!$route.meta.keepAlive"></router-view>
    </transition>
    <transition name="tsfade" mode="out-in">
      <keep-alive>
        <router-view  v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import Vue from "vue";

//Vue.use(Header);
export default {
  
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

.tsfade-enter-active,
.tsfade-leave-active {
  transition: opacity 0.4s;
}

.tsfade-enter,
.tsfade-leave-to {
  opacity: 0;
}

#app a {
  text-decoration: none;
}

.none_padding{
  padding:0px;
}
.none_margin{
  margin:0px;
}
.text_left{
  text-align: left;
}
</style>
