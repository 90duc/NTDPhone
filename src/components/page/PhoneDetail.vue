<template>
  <div class="detail">
    <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
      <div class="phone_title">
        <span>{{phone.name}}</span>
        <span class="year">({{getYear(phone.year)}})</span>
        <router-link :to='pic3DPath+"?id="+phone.pid'>
          <span style="color:green;padding-left:5px;font-size:.5em;display:inline-block">3D展示</span>
        </router-link>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-5 col-md-5 col-lg-4 none_padding">
         <img-frame :imgs="imgs"></img-frame>
        </div>
        <div class="col-xs-12 col-sm-7 col-md-7 col-lg-8">
          <div class="row">
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <p>品牌：<router-link :to="searchByPath+'/company/'+getCompany(phone.cid)+'?id='+getCid(phone.cid)">{{getCompany(phone.cid)}}</router-link></p>
              参考报价：
              <span class='price'>￥{{phone.price}}</span>
            </div>
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <rating :phone="phone"></rating>
            </div>
          </div>
        </div>
        <div class="clearfix"></div>
      </div>
      <remark-score :phone="phone" :status='util.checkLogin()' class="remark-score"></remark-score>
      <tag-list :phone='phone'></tag-list>
      <remark :phone="phone" :status='util.checkLogin()' :showBox='showRemarkBox' ></remark>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
      <div class="tags">
        <h2>
          <i>手机常用的标签</i>
          · · · · · ·
        </h2>
        <div class="tags-body">
          <tag-attr :phone='phone'></tag-attr>
        </div>
      </div>
    </div>
    <div class="clearfix"></div>
  </div>
</template>
<<script>
import config from './../../config/config.js'
import TagAttr from '@/components/base/TagAttr.vue'
import TagList from '@/components/base/TagList.vue'
import Rating from '@/components/base/Rating.vue'
import RemarkScore from '@/components/phone/RemarkScore.vue'
import Remark from '@/components/phone/BuyerRemark.vue'
import ImgFrame from '@/components/phone/ImgFrame.vue'
import Data from '@/components/default/data.js'
import Paths from "@/config/path.js";

export default {
  components: {
        TagAttr,TagList,Rating,Remark,RemarkScore,ImgFrame
  },
  data () {
    return {
      id:this.$route.params.id,
      util:this.$root,
      phone:{},
      imgs:[],
      remarks:[],
      imageIndex:0,
      speed:600,
      pic3DPath:Paths.roots.picture3D,
      searchByPath: Paths.pages.searchBy,
      showRemarkBox:'show-remark-box',
      showWantBox:'show-want-box'
    }
  },
  methods:{
    getYear:function (v) {
      if(v)
      return v.split('年')[0];
    },
    getCompany:function (v) {
      if(v)
      return v.name;
    },
    getCid:function (v) {
      if(v)
      return v.cid;
    },
    getData: function() {
      let url = this.$config.dataURL + this.$URL.phone.detail;
      let that = this;
      this.$post(url, {id:this.id }, function(res) {
        let data = res.data;   
        that.phone=data.phone;
        for(var i in data.images)
          that.imgs.push( that.$config.imageURL + "/" + data.images[i]);
      });
    }
  },
 created () {  
    this.getData();
  }

}
</script>

<style scoped>
.detail {
  text-align: left;
}

.phone_title {
  font-size: 1.6em;
  padding-bottom: 20px;
}


.info_frame {
  width: calc(100% - 425px);
}

.info_detail_frame {
  width: 50%;
}
.price {
  color: red;
  font-size: 1.1em;
  font-weight: bold;
}
.remark_frame {
  width: calc(50% - 25px);
  height: 220px;
}

.remark-score {
  margin: 10px 0px;
}
.clearfix {
  clear: both;
}

.tags {
  margin-bottom: 30px;
}

.tags h2 {
  color: #007722;
  font: 16px Arial, Helvetica, sans-serif;
  margin: 0 0 12px 10px;
  line-height: 150%;
  text-align: left;
}

.tags h2 i {
  font-style: normal;
}

.tags-body {
  line-height: 24px;
}

.tags-body a:link,
.tags-body a:visited {
  background-color: #f5f5f5;
  color: #37a;
}

.tags-body a {
  display: inline-block;
  letter-spacing: normal;
  margin: 0 8px 8px 0;
  padding: 0 8px;
  background-color: #f5f5f5;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
}

.tags-body a:visited {
  color: #666699;
  text-decoration: none;
}

.tags-body a:link {
  color: #37a;
  text-decoration: none;
}

.tags-body a {
  cursor: pointer;
}
</style>