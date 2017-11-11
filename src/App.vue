<template>
  <div id="app">
    <transition name="tsfade" mode="out-in">
      <router-view  ></router-view>
    </transition>
  </div>
</template>

<script>
import Vue from "vue";

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
  margin-top: 3.6em;
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

#app .none_padding{
  padding:0px;
}
#app .none_margin{
  margin:0px;
}
#app .text_left{
  text-align: left;
}
#app .like_a{
    color: #337ab7;
    cursor: pointer;
}
#app .like_a:hover{
    color: #23527c;
}
#app .relative{
  position: relative;
  top:0px;
  left:0px;
}
#app .min_height{
    min-height: calc(100vh - 10.9em);
}
.clearfix {
    clear: both;
}
</style>
