<template>
  <div>
    <div class="left_frame float_left">
      <div class="phone_title">
        <span>{{phone.name}}</span>
        <span class="year">({{phone.year}})</span>
      </div>
      <div>
        <div class="logo_frame float_left"><img :src="phone.image"></div>
        <div class="float_left info_frame">
         <div class="float_left info_detail_frame">
           as
        </div>
        <div class="float_left remark_frame">
          <rating></rating>
        </div>
        </div>
        <div class="clearfix"></div>
      </div>
      <tag-list :phone='phone'></tag-list>

    </div>
    <div class="float_left right_frame">
      <div class="tags">
        <h2>
          <i >手机常用的标签</i>
          · · · · · ·
        </h2>
        <div class="tags-body">
         <tag-attr :hoverPhone='phone'></tag-attr>
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

export default {
  components: {
        TagAttr,TagList,Rating
  },
  data () {
    return {
      id:this.$route.params.id,
      phone:{},
      remarks:[],
      
    }
  },

  created () {

    this.phone={image:'/static/1.webapp',
    name:'iphone 8s',
    rank:9,
    screenSize:[4.4,3.2],
    pixels:[{x:1080,y:1934},{x:423,y:296}],
    forecamera:'400万像素',
    backcamera:'800万像素',
    battery:'1200mAh',
    batteryType:'不可拆卸式电池',
   // core:['四核','八核'],
   core:[],
    coreType:'联发科 Helio P25',
    coreRate:['2.5GHz','1.4GZ'],
    ROM:['32G','64G'],
    networkType:['4G全网通','3G移动'],
    bodyColor:['红色','白色'],
    year:'2015'};


  }
}
</script>

<style scoped>
.left_frame {
  width: 830px;
  text-align: left;
 
}

.float_left {
  float: left;
}

.phone_title {
  font-size: 26px;
  padding-bottom: 20px;
}

.logo_frame {
  padding-right: 25px;
  padding-bottom: 10px;
}

.logo_frame img {
  width: 145px;
  height: 220px;
}

.info_frame {
  width: calc(100% - 170px);
 
}
.info_detail_frame{
  width:50%;
}
.remark_frame{
  width:calc(50% - 25px);
  border-left:1px solid #eaeaea;
  padding-left: 20px;
  height:220px;
}


.clearfix {
  clear: both;
}

.right_frame{
  width:245px;
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
.tags h2 i{
  font-style:normal;  
}
.tags-body {
    line-height: 24px;
}
.tags-body a:link, .tags-body a:visited {
    background-color: #f5f5f5;
    color: #37A;
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