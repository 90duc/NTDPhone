<template>
  <transition name='fade' v-if="popBox.showDetail">
    <div id='popBox' class="detail_pop" :style="popBox.position" @mouseleave="disableDetail($event)">
      <div  class="container">
        <div class='col-sx-12 col-sm-12 col-md-9 col-lg-9 none_padding' >
          <router-link :to="phoneDetailPath+'/'+phone.pid">
            <div class="col-xs-4 col-sm-3 col-md-2 col-lg-2 phone_frame"></div>
          </router-link>
          <div class="col-xs-8 col-sm-6 col-md-6 col-lg-5 wrap">
            <div class="info">
              <h3>
                <router-link :to="phoneDetailPath+'/'+phone.pid">{{phone.name}}</router-link>
              </h3>
              <star-bar class="detail" type="m" :rank="phone.rank" :commentSize="phone.commentSize"></star-bar>
              <tag-attr :phone='phone' auto-color='true'></tag-attr>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import StarBar from "@/components/base/StarBar.vue";
import TagAttr from "@/components/base/TagAttr.vue";
import Data from "@/components/default/data.js";
import config from "@/config/config.js";
import Paths from "@/config/path.js";

export default {
  components: {
    TagAttr,
    StarBar
  },
  data() {
    return {
      phone: {},
      popBox: { showDetail: false, position: {} },
      phoneDetailPath: Paths.pages.phoneDetail,
      detail: {}
    };
  },
  methods: {
    computeMiddleStar: function(rank) {
      let rate = 10;
      if (Math.floor(rank) % 2 == 0) rate = Math.ceil(rank);
      else rate = Math.floor(rank);
      return -15 * (10 - rate);
    },
    enableDetail: function(e, p, o) {
      this.detail.show = true;
      this.detail.p = p;
      this.detail.o = o;
      this.detail.timer = setTimeout(this.showDetail, 1000);
    },
    showDetail: function() {
      if (!this.detail.show) return;
    
      let p = this.detail.p;
      let o = this.detail.o;
      var $o = $(o);
      var x = $o.position().left - 15;
      var y = $o.position().top;
      this.popBox.position = { left: x + "px", top: y + "px" };
      this.phone = p;
      this.popBox.showDetail = true;
    },
    disableDetail: function(e) {
      if (e === true) {
        this.detail.show = false;
        clearTimeout(this.detail.timer);
      } else {
        this.detail.show = false;
        this.popBox.showDetail = false;
      }
    }
  },
  created() {
    this.$on("pop-box-show", this.enableDetail);
    this.$on("pop-box-hide", this.disableDetail);
    //this.hoverPhone = Data.clone();
  },
  beforeDestroy() {
    this.$off("pop-box-show", this.enableDetail);
    this.$off("pop-box-hide", this.disableDetail);
  }
};
</script>
<style scoped>
.detail_pop {
  position: absolute;
  z-index: 99;
  width: 37em;
  overflow: hidden;
  /* height:100%; */
}
a {
  text-decoration: none;
}
.detail_pop .wrap {
  float: left;
  background: #fff;
  border: 1px solid #999;
  min-height: 15em;
}
.col-xs-3,
.col-sm-3,
.col-md-2,
.col-lg-2 {
  padding: 0 0px;
}
.detail_pop .phone_frame {
  float: left;
  height: 14.9em;
  cursor: pointer;
  border: 1px solid gray;
  border-radius: 5px;
}

.detail_pop .info {
  padding: 10px 0px 10px 15px;
  text-align: left;
}

span.subject-rate {
  color: #e09015;
}
.info h3 {
  font-size: 1.3em;
  width: 100%;
  overflow: hidden;
}
.allstar35 {
  background: url(../../assets/middle_star.png) no-repeat;
  width: 75px;
  height: 15px;
  display: inline-block;
}
</style>
