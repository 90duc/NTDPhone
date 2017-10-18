<template>
  <div>
    <div class="left_frame float_left">
      <div class="phone_title">
        <a href="/static/3d/index.html">
          <span>{{phone.name}}</span>
        </a>
        <span class="year">({{phone.year}})</span>
      </div>
      <div>
        <div class="logo_frame float_left">
          <div class="left_arrow" @click="left"></div>        
            <a>
              <img :src="'/static/'+imageIndex+'.jpg'">
            </a>
          </transition>
          <div class="right_arrow" @click="right"></div>

        </div>
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
import Data from '@/components/default/data.js'


export default {
  components: {
        TagAttr,TagList,Rating
  },
  data () {
    return {
      id:this.$route.params.id,
      phone:{},
      remarks:[],
      imageIndex:0
    }
  },
  methods:{
      left:function () {
         if(this.imageIndex==0)
          this.imageIndex=3;
        else
         this.imageIndex--;
      },
      right:function () {
          if(this.imageIndex==11)
          this.imageIndex=0;
        else
         this.imageIndex++;
      },
      autoPlay:function () {
         this.right();
      },

  },
  created () {
    this.phone=Data.clone();
    this.autoPlayTimer=setInterval(this.autoPlay,2000);
  },
  beforeDestroy () {
    clearInterval(this.autoPlayTimer);
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

.left_arrow,
.right_arrow {
  position: absolute;
  top: 200px;
  width: 30px;
  height: 52px;
  z-index: 10;
  cursor: pointer;
  background: url(./../../assets/arrow.png);
  display: none;
}

.logo_frame:hover .left_arrow,
.logo_frame:hover .right_arrow {
  display: block;
}

.logo_frame:hover .right_arrow {
  left: 453px;
  background-position-x: -40px;
}

.logo_frame:hover .right_arrow:hover {
  background-position-x: -120px;
}

.logo_frame:hover .left_arrow {
  background-position-x: 0px;
}

.logo_frame:hover .left_arrow:hover {

  background-position-x: -80px;
}

.logo_frame {
  margin-right: 25px;
  margin-bottom: 10px;
  /* overflow: hidden; */
}

.logo_frame,
.logo_frame img {
  width: 300px;
  height: 200px;
}


.info_frame {
  width: calc(100% - 425px);
}

.info_detail_frame {
  width: 50%;
}

.remark_frame {
  width: calc(50% - 25px);
  height: 220px;
}


.clearfix {
  clear: both;
}

.right_frame {
  width: 245px;
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