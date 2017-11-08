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
  data(){
    return {
      login:null
    }
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
.like_a{
    color: #337ab7;
    cursor: pointer;
}
.like_a:hover{
    color: #23527c;
}
</style>
