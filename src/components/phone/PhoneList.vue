<template>
    <div>
        <pop-box ref='popBox'></pop-box>
        <div class="row">
            <router-link :to='phoneDetailPath+"/"+phone.id' v-for="(phone,i) in phones" :key="i">
                <div class="col-xs-4 col-sm-3 col-md-2 col-lg-2 phone_class" @mouseenter="enableDetail($event,phone,i)" ref='phoneList'>
                    <div class="image">
                      <img :src="phone.image" />
                    </div>
                    <div>
                        <span class="phone_name">{{phone.name}}</span>
                        <span class="subject-rate">{{phone.rank.toFixed(1)}}</span>
                    </div>
                </div>
            </router-link>
            <div class="clearfix"></div>
        </div>
        <div class="more" @mousedown="loadMore()" v-if="loadStatus.status">
            {{loadStatus.text}}
        </div>

    </div>
</template>

<script>
import Data from "@/components/default/data.js";
import Icon from "@/assets/logo3.png";
import config from "./../../config/config.js";
import PopBox from "@/components/base/PopBox.vue";
import Paths from "@/config/path.js";

let loadText = { loading: "载入中...", waiting: "加载更多" };

export default {
  components: {
    PopBox
  },
  data() {
    return {
      phones: [],
      loadStatus: { status: true, text: loadText.waiting },
      hoverPhone: {},
      popBox: { showDetail: false, position: {} },
      phoneDetailPath:Paths.phoneDetail
    };
  },
  methods: {
    loadMore: function() {
      this.loadStatus.text = loadText.loading;
      window.setTimeout(this.addPage, 500);
    },
    addPage: function() {
      let size = this.phones.length + 5;
      for (var index = this.phones.length; index < size; index++) {
        let rate = 10 - index * 0.4;
        let p = Data.clone();
        p.id = index;
        p.name = p.name + index;
        p.rank = rate;
        this.phones.push(p);
      }

      this.loadStatus.text = loadText.waiting;
    },
    enableDetail: function(e, p,i) {
      this.$refs.popBox.$emit("pop-box-show", e, p,this.$refs.phoneList[i]);
    }
  },
  created() {
    for (var index = 0; index < 8; index++) {
      let rate = 10 - index * 0.4;
      let p = Data.clone();
      p.id = index;
      p.name = p.name + index;
      p.rank = rate;
      this.phones.push(p);
    }

    this.hoverPhone = Data.clone();
  }
};
</script>
<style scoped>
.col-xs-3,
.col-sm-3,
.col-md-2,
.col-lg-2{
 padding-left: 8px;
 padding-right:8px;
}
.remark_bar {
  padding: 7px 0px;
}

.phone_class {
  cursor: pointer;
  overflow: hidden;
  border: 1px solid transparent;
  margin: 10px 0px;
}

.phone_class1:hover {
  border-color: gray;
  border-radius: 5px;
}
.phone_class div.image{
    width: 100%;
    height: 9em;
    overflow: hidden;
}
.phone_class img {
  position: relative;
  left: -20%;
  width: 140%;
  height: 100%;
}

.phone_class > div {
  width: 100%;
  font-size: 1.2em;
  /* padding-bottom: 4px; */
  height: 2.5em;
  overflow: hidden;
  text-align: left;
}

span.subject-rate {
  color: #e09015;
}

.clearfix {
  clear: both;
}

.more {
  margin: 0px auto 10px auto;
  /* width: 480px; */
  background: #f7f7f7;
  border-radius: 5px;
  text-align: center;
  line-height: 2.2em;
  margin-bottom: 60px;
}

.more:hover {
  background: #eee;
  color: #37a;
}
</style>