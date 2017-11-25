<template>
  <div v-if='noWant||noBuy'>
    <button class="btn btn-success" v-if="noWant" @click="wantBuy">想买</button>
    <button class="btn btn-warning" v-if="noBuy" @click="hasBuy">已买</button>
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
  props: ["phone", "status"],
  data() {
    return {
      util: this.$root,
      remarkBoxShow: false,
      wantBoxShow: false,
      noWant: true,
      noBuy: true
    };
  },
  methods: {
    wantBuy: function() {
      if (!this.util.requestLogin()) return;
      this.wantBoxShow = true;
    },
    hasBuy: function(c) {
      if (!this.util.requestLogin()) return;
      this.remarkBoxShow = true;
    },
    getData: function() {
      if (!this.phone.pid) {
        setTimeout(() => {
          this.getData();
        }, 50);
        return;
      }
      this.initWant();
      this.initBuy();
    },
    initWant: function() {
      var url = this.$config.dataURL + this.$URL.phone.checkWanterRemark;
      let that = this;

      let data = { id: this.phone.pid };
      this.$post(url, data, function(res) {
        let data = res.data;
        that.noWant = !data.status;
      });
    },
    initBuy: function() {
      var url = this.$config.dataURL + this.$URL.phone.checkBuyerRemark;
      let that = this;
      var data = { id: this.phone.pid };
      this.$post(url, data, function(res) {
        let data = res.data;
        that.noBuy = !data.status;
      });
    }
  },
  watch: {
    status(n, o) {
      this.getData();
    }
  },
  created() {
    this.getData();
    this.util.$on("wanter-refresh", this.initWant);
    this.util.$on("buyer-refresh", this.initBuy);
    this.util.$on("show-remark-box", this.hasBuy);
    this.util.$on("show-want-box", this.wantBuy);
  },
  beforeDestroy() {
    this.util.$off("wanter-refresh");
    this.util.$off("buyer-refresh");
    this.util.$off("show-remark-box");
    this.util.$off("show-want-box");
  }
};
</script>
<style scoped>
.btn {
  padding: 2px 5px;
}
</style>
