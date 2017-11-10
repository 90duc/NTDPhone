<template>
  <div>
    <button class="btn btn-success" @click="wantBuy">想买</button>
    <button class="btn btn-warning" @click="hasBuy">已买</button>
    <score-star type='hover' @on-click="hasBuy"></score-star>
    <transition name="tsfade" mode="out-in">
      <remark-box v-if="remarkBoxShow" v-model="remarkBoxShow" :phone="phone"></remark-box>
    </transition>
  </div>
</template>
<script>
import ScoreStar from "@/components/base/ScoreStar.vue";
import RemarkBox from "@/components/phone/RemarkBox.vue";
export default {
  components: {
    ScoreStar,
    RemarkBox
  },
  props: ["phone"],
  data() {
    return { remarkBoxShow: false };
  },
  methods: {
    wantBuy: function() {},
    hasBuy: function(c) {
      if (!this.$root.requestLogin()) return;
      this.remarkBoxShow = true;
    }
  },
  created() {
    this.$root.$on("show-remark-box", this.hasBuy);
  },
  beforeDestroy() {
    this.$root.$off("show-remark-box");
  }
};
</script>
<style scoped>
.btn {
  padding: 2px 5px;
}
</style>
