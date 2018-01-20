<template>
  <div v-if='noRemark'>
    <button class="btn btn-success"  @click="wantBuy">想买</button>
    <button class="btn btn-warning"  @click="hasBuy">已买</button>
    <score-star type='hover' @on-click="find"></score-star>
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
      noRemark: true
    };
  },
  methods: {
    wantBuy: function() {
      if (!this.util.requestLogin()) return;
      this.wantBoxShow = true;
    },
    hasBuy: function() {
      if (!this.util.requestLogin()) return;
      this.remarkBoxShow = true;
    },
    find: function() {
      if (this.noBuy) this.hasBuy();
      else this.wantBuy();
    },
    getData: function() {
      if (!this.phone.pid) {
        setTimeout(() => {
          this.getData();
        }, 50);
        return;
      }
      this.initRemark();
    },
    initRemark: function() {
      var url = this.$config.dataURL + this.$URL.phone.checkRemark;
      let that = this;
      var data = { id: this.phone.pid };
      this.$post(url, data, function(res) {
        let data = res.data;
        that.noRemark = !data.status;
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
    this.util.$on("remark-refresh", this.initRemark);
    this.util.$on("show-remark-box", this.hasBuy);
    this.util.$on("show-want-box", this.wantBuy);
  },
  beforeDestroy() {
    this.util.$off("remark-refresh");
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
