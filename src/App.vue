<template>
  <div id="app">
   
      <Header></Header>
      
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
    <Footer></Footer>
  </div>
</template>

<script>
import Vue from 'vue'
import Header from '@/components/header/Header.vue'
import Footer from '@/components/footer/Footer.vue'

//Vue.use(Header);
export default {
  name: 'app',
  components: {
    Header, Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
 .margin_auto{
    width:1075px;
    margin: 0 auto;
    /* background: green; */
}
.content{
   padding-top: 20px;
   min-height: 100vh;/*calc(100vh - 150px);*/
}
.tsfade-enter-active,
.tsfade-leave-active {
  transition: opacity .4s
}

.tsfade-enter,
.tsfade-leave-to {
  opacity: 0
}
a{
  text-decoration: none;
}
</style>
