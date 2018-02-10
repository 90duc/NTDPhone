<template>
  <div class="recom">
    <h2>
      <div class="col-xs-6 col-sm-3 col-md-3 col-lg-2 none_padding">
        <span class='title'>手机智能推荐</span>
      </div>
      <div v-if="type" class="title_list col-xs-12 col-sm-8 col-md-8 col-lg-5">
        <span :class="i==title_index?'fouse_font':''" @click='selectTitle(i)' v-for="(title,i) in title_list" :key="title">{{title}}</span>
      </div>
      <div class="more_list" v-if="hasUser()">
        <router-link :to="remarkPhonePath">已关注过的手机»</router-link>
      </div>
      <div class="clearfix"></div>
    </h2>
    <div id="billboard">
      <pop-box ref='PopBox'></pop-box>
      <div class="row">
        <router-link :to='phoneDetailPath+"/"+phone.pid' v-for="(phone,i) in hobbyList" :key="i">
          <div class="col-xs-4 col-sm-3 col-md-2 col-lg-2 phone_class" @mouseenter="enableDetail($event,phone,i)" @mouseleave="disableDetail()" ref='phoneList'>
            <!-- <div class="recommend">5.0</div> -->
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
    </div>
  </div>
</template>
<script>
import PopBox from "@/components/base/PopBox.vue";
import Data from "@/components/default/data.js";
import Paths from "@/config/path.js";

let title = ["基于用户协同过滤", "基于物品协同过滤"];
let titleNames = ["user", "item"];
export default {
  components: {
    PopBox
  },
  props: ["url","params","type"],
  data() {
    return {
      phoneDetailPath: Paths.pages.phoneDetail,
      remarkPhonePath: Paths.pages.remarkPhone,
      util:this.$root,
      title_list: title,
      title_index: 0,
      hobbyList: []
    };
  },
  methods: {
    enableDetail: function(e, p, i) {
      if (this.$refs.PopBox)
        this.$refs.PopBox.$emit("pop-box-show", e, p, this.$refs.phoneList[i]);
    },
    disableDetail: function(e, p, i) {
      if (this.$refs.PopBox) this.$refs.PopBox.$emit("pop-box-hide", true);
    },
    selectTitle: function(index) {
      this.title_index = index;
      this.params.type=titleNames[index];
      this.init();
    },
    getData: function() {
      this.hobbyList = [];
      let url = this.$config.dataURL + this.url;
      let that = this;
      this.$post(
        url,
        that.params,
        function(res) {
          let list = res.data;
          for (var p in list) {
            list[p].image = that.$config.imageURL + "/" + list[p].image;
            that.hobbyList.push(list[p]);
          }
        }
      );
    },
    hasUser:function(){
        return this.util.checkLogin();
    },
    init:function(){
      //if (this.$refs.PopBox)
      this.$refs.PopBox.$emit("pop-box-hide");
      this.getData();

    }
  },
  watch: {
    "params.pid"(o,n){
       this.init();
    }
  },
  created () {
    this.getData();
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
.recom {
  text-align: left;
  min-height: 30em;
}
.title {
  display: inline-block;
  padding: 0px 0px 0.5em 10px;
  color:green;
  font-size: 1.2em;
}
.recom h2 {
  position: relative;
  color: #111;
  border-bottom: 1px solid #eaeaea;
  font: 16px Arial, Helvetica, sans-serif;
}

.title_list span {
  font-size: 1.2em;
  margin-right: 1em;
  color: #9b9b9b;
  cursor: pointer;
  display: inline-block;
  padding:0.4em 0.6em;
  border-radius: 0.2em;
}
.title_list span:hover{
  color: white;
  background-color: #37a;
}
.recom a {
  color: #37a;
}

h2 .title_list {
  font-size: 0.7em;
  overflow: hidden;
  padding: 0px 0px 0.5em 10px;
}

.title_list span.fouse_font,.title_list span.fouse_font:hover {
  color: white; 
  background: #f60;
  
}

.more_list {
  position: absolute;
  top: 0px;
  right: 0px;
}
.phone_class {
  cursor: pointer;
  overflow: hidden;
  border: 1px solid transparent;
  padding: 0.5em 0px 0.45em;
  position: relative;
}

.phone_class:hover {
  border-color: gray;
  border-radius: 5px;
}

.phone_class .recommend{
  position: absolute;
  top: 5px;
  left: 5px;
  width: 25px;
  height: 25px;
  color: #ed724b;
  
  font-size: 18px;
  z-index: 10;
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

.clearfix {
  clear: both;
}

span.subject-rate {
  color: #e09015;
}
</style>
