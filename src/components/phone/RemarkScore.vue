<template>
  <div>
    <button class="btn btn-success" @click="wantBuy">想买</button>
    <button class="btn btn-warning" @click="hasBuy">已买</button>
    <score-star type='hover' @on-click="hasBuy"></score-star>
    <transition name="tsfade" mode="out-in">
      <remark-box v-if="remarkBoxShow" v-model="remarkBoxShow" :phone="phone"></remark-box>
      <Want-box v-if="wantBoxShow" v-model="wantBoxShow" :phone="phone"></Want-box>
    </transition>
  </div>
</template>
<script>
import ScoreStar from "@/components/base/ScoreStar.vue";
import RemarkBox from "@/components/phone/RemarkBox.vue";
import WantBox from "@/components/phone/WantBox.vue";

export default {
  components: {
    ScoreStar,
    RemarkBox,
    WantBox
  },
  props: ["phone"],
  data() {
    return {
      remarkBoxShow: false,
      wantBoxShow: false
    };
  },
  methods: {
    wantBuy: function() {
       if (!this.$root.requestLogin()) return;
        this.wantBoxShow = true;
    },
    hasBuy: function(c) {
      if (!this.$root.requestLogin()) return;
      this.remarkBoxShow = true;
    }
  },
  created() {
    this.$root.$on("show-remark-box", this.hasBuy);
    this.$root.$on("show-want-box", this.wantBuy);
  },
  beforeDestroy() {
    this.$root.$off("show-remark-box");
    this.$root.$off("show-want-box");
  }
};
</script>
<style scoped>
.btn {
  padding: 2px 5px;
}
</style>
