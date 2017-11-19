<template>
  <div>
    <pop-box ref='popBox'></pop-box>
    <div class="row">
      <router-link :to='phoneDetailPath+"/"+phone.pid' v-for="(phone,i) in phones" :key="i">
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
import Icon from "@/assets/logo.png";
import config from "./../../config/config.js";
import PopBox from "@/components/base/PopBox.vue";
import Paths from "@/config/path.js";

let loadText = { loading: "载入中...", waiting: "加载更多" };

export default {
  components: {
    PopBox
  },
  props: ["url", "params"],
  data() {
    return {
      phones: [],
      loadStatus: { status: true, text: loadText.waiting },
      popBox: { showDetail: false, position: {} },
      phoneDetailPath: Paths.pages.phoneDetail
    };
  },
  methods: {
    loadMore: function() {
      this.loadStatus.text = loadText.loading;
      this.getData();
    },
    enableDetail: function(e, p, i) {
      if (this.$refs.popBox)
        this.$refs.popBox.$emit("pop-box-show", e, p, this.$refs.phoneList[i]);
    },
    init() {
      this.params.start=0;
      this.phones=[];
      this.getData();
    },
    getData: function() {
      let url = this.$config.dataURL + this.url;
      let that = this;
      this.$post(
        url,this.params ,
        function(res) {
          let list = res.data;
          that.params.start += list.length;
          for (var p in list) {
            list[p].image = that.$config.rootURL + "/" + list[p].image;
            that.phones.push(list[p]);
          }
          if(list.length==that.params.limit){
             that.loadStatus.status=true;
             that.loadStatus.text = loadText.waiting;
          } 
          else
            that.loadStatus.status=false;
        }
      );
    }
  },
  created() {
    this.init();
  }
};
</script>
<style scoped>
.col-xs-3,
.col-sm-3,
.col-md-2,
.col-lg-2 {
  padding-left: 8px;
  padding-right: 8px;
}
.remark_bar {
  padding: 7px 0px;
}

.phone_class {
  cursor: pointer;
  overflow: hidden;
  border: 1px solid transparent;
  padding: 0.5em 0px 0.5em;
  
}

.phone_class:hover {
  border-color: gray;
  border-radius: 5px;
}
.phone_class div.image {
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
  width: 85%;
  margin: 0px auto;
  font-size: 1.2em;
  /* padding-bottom: 4px; */
  height: 2.5em;
  overflow: hidden;
  text-align: left;
}
.phone_name {
  font-size: 1em;
  /* word-break: break-all;
   word-wrap: break-word; */
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