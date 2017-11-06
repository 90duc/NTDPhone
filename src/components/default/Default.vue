<template>
    <div>
        <div class="container">
            <my-header></my-header>
            <div class="content">
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

export default {
 components: {
    myHeader,
    myFooter
  }
};
</script>
<style lang="css" scoped>
.container{
    min-height: calc(100vh - 11.4em);
}
</style>


