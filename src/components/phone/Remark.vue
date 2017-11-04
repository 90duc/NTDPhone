<template>
  <div >
     <div>
       <button class="btn btn-success" @click="wantBuy">想买</button>
       <button class="btn btn-warning" @click="hasBuy">已买</button>
       <score-star type='hover'></score-star>
       <remark-box v-if="remarkBoxShow" v-model="remarkBoxShow"></remark-box>
    </div>
     <div class="title_remark"><span>{{phone.name}}的短评 · · · · · · </span><div>我要写短评</div></div>
     <div class="item_frame">
       <div class="item_remark" v-for="r in remarks" :key='r.name'>
         <div class="remark_header">
           <span>
           <span class="r_blue">{{r.name}}</span>&nbsp;{{types[r.type]}}&nbsp;
           <star type='s' :rank="r.rank"></star>&nbsp;
           <span class="r_time">{{r.time}}</span>
           </span>
           <div class="r_agree">{{r.agree}}&nbsp;<span class="r_blue" @click="agree(r)">有用</span></div>
         </div>
         <div class="r_text">{{r.text}}</div>
        </div>
     </div>
  </div>
</template>
<script>
import Star from "@/components/base/Star.vue";
import ScoreStar from "@/components/base/ScoreStar.vue";
import RemarkBox from "@/components/phone/RemarkBox.vue";
import Data from "@/components/default/data.js";

export default {
  components: {
    Star,ScoreStar,RemarkBox
  },
  props: ["phone"],
  data() {
    return {
      remarkBoxShow:true,
      remarks: [],
      types: ["想买", "已买"]
    };
  },
  methods: {
    agree: function(r) {
      r.agree++;
    },
    wantBuy:function(){     
       
    },
    hasBuy:function(c){
       this.remarkBoxShow=true;
    }
  },
  mounted() {
    var p = {
      id: 1,
      name: "张三",
      type: 0,
      rank: 8.7,
      time: "2017-8-9",
      agree: 178,
      text: "很好，非常好"
    };
    this.remarks.push(Data.cloneObject(p));
    this.remarks.push(Data.cloneObject(p));
    this.remarks.push(Data.cloneObject(p));
  }
};
</script>
<style scoped>
.btn{
  padding:2px 5px;
}
.title_remark {
  padding-top: 20px;
}
.title_remark span {
  color: #007722;
  font-size: 18px;
  line-height: 26px;
}
.title_remark div {
  float: right;
  height: 26px;
  padding: 0 12px;
  line-height: 26px;
  color: #ca6445;
  background: #fae9da;
}
.title_remark div:hover {
  color: #d9896a;
}
.item_frame {
  padding-top: 10px;
}
.item_remark {
  color: #494949;
  padding: 15px 0px;
  border-top: 1px solid #ddd;
}
.remark_header {
  font-size: 13px;
  margin-bottom: 5px;
}
.r_blue {
  color: #37a;
}
.r_time {
  color: #aaa;
}
.r_agree {
  float: right;
}
.r_text {
  font-size: 13px;
  max-height: 63px;
  word-break: break-word;
  overflow: hidden;
  line-height: 1.5;
}
</style>
