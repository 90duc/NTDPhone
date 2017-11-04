<template>
  <div class="recom">
    <h2>
      <div class="float_left">最近热门手机</div>
      <div class="title_list">
        <span :class="i==title_index?'fouse_font':''" @click='selectTitle(i)' v-for="(title,i) in title_list" :key="title">{{title}}</span>
      </div>
      <div class="more_list">
        <router-link :to="paths.hobbyList+'/'+title_list[title_index]">更多»</router-link>
      </div>
      <div class="clearfix"></div>
    </h2>
    <div id="billboard">
      <pop-box ref='PopBox'></pop-box>
      <div class="row">
            <router-link :to='"/phoneDetail/"+phone.id' v-for="(phone,i) in hobbyList" :key="i">
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
    </div>
  </div>
</template>
<script>
import PopBox from '@/components/base/PopBox.vue'
import Data from '@/components/default/data.js'
import Paths from '@/config/path.js'

let title = ['4G全网通', '3G移动', '800万像素以上', '高分辨率']
export default {
  components: {
    PopBox
  },
  data() {
    return {
      paths: Paths,
      title_list: title,
      title_index: 0,
      hobbyList: [],
      curHobby: [],
    };
  },
  methods: {
    enableDetail: function(e, p,i) {
      this.$refs.PopBox.$emit('pop-box-show', e, p,this.$refs.phoneList[i]);
    }, selectTitle: function(index) {
      this.title_index = index;
    }

  },
  created() {
    for (var i = 0; i < 16; i++) {
      let p = Data.clone();
      p.name += i;
      this.hobbyList.push(p);
    }

    for (var p = 0; p < 12; p++) {
      this.curHobby.push(this.hobbyList[p]);
    }
  }
}
</script>
<style scoped>
.col-xs-3,
.col-sm-3,
.col-md-2,
.col-lg-2{
 padding-left: 8px;
 padding-right:8px;
}
.recom {
  text-align: left;
}

.recom h2 {
  padding-bottom: 10px;
  color: #111;
  padding-bottom: 10px;
  border-bottom: 1px solid #eaeaea;
  font: 16px Arial, Helvetica, sans-serif;
}

.recom h2 span {
  font-size: 12px;
  margin-left: 12px;
  color: #9B9B9B;
  cursor: pointer;
}

.recom h2 span:hover {

  color: white;
  background-color: #37a;
}

.recom a {
  color: #37a;
}

.title_list {
  width: calc(100% - 120px);
  margin-left: 20px;
  margin-right: -41px;
  vertical-align: bottom;
  line-height: 20px;
  overflow: hidden;
}

.float_left,
.title_list {
  float: left;
}

.recom h2 .fouse_font {
  color: black;
}

.recom a:hover {
  color: #FFFFFF;
  text-decoration: none;
  background: #37a;
}

.more_list {
  float: right;
}

.phone_class {
  cursor: pointer;
  overflow: hidden;
  border: 1px solid transparent;
  margin: 10px 0px;
}

.phone_class:hover {
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
  color:black;
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
  line-height: 30px;
  margin-bottom: 60px;
}

.more:hover {
  background: #eee;
  color: #37a;
}

span.subject-rate {
  color: #e09015;
}
</style>
