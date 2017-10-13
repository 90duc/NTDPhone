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
          <!-- 主屏尺寸 -->
          <dl class="info_item" :class="multiValue(phone.screenSize)">
            <dt>主屏尺寸</dt>
            <dd>
              <ul>
                <li v-for="size in phone.screenSize" :key="size">{{size}}英寸</li>
              </ul>
            </dd>
            <div class="clearfix"></div>
          </dl>
          <!-- 主屏分辨率 -->
          <dl v-show="has(phone.screenSize)" class="info_item" :class="multiValue(phone.screenSize)">
            <dt>主屏分辨率</dt>
            <dd>
              <ul>
                <li v-for="p in phone.pixels" :key="p">{{p.x}}x{{p.y}}像素</li>
              </ul>
            </dd>
            <div class="clearfix"></div>
          </dl>
          <!--后置摄像头-->
          <dl v-show="has(phone.backcamera)" class="info_item" :class="multiValue(phone.backcamera)">
            <dt>后置摄像头</dt>
            <dd>
              <ul>
                <li>{{phone.backcamera}}</li>
              </ul>
            </dd>
            <div class="clearfix"></div>
          </dl>
          <!--前置摄像头-->
          <dl v-show="has(phone.forecamera)" class="info_item">
            <dt>前置摄像头</dt>
            <dd>
              <ul>
                <li>{{phone.forecamera}}</li>
              </ul>
            </dd>
            <div class="clearfix"></div>
          </dl>

          <!--电池容量-->
          <dl v-show="has(phone.battery)" class="info_item">
            <dt>电池容量</dt>
            <dd>
              <ul>
                <li>{{phone.battery}}</li>
              </ul>
            </dd>
            <div class="clearfix"></div>
          </dl>
          <!--电池类型-->
          <dl v-show="has(phone.batteryType)" class="info_item">
            <dt>电池类型</dt>
            <dd>
              <ul>
                <li>{{phone.batteryType}}</li>
              </ul>
            </dd>
            <div class="clearfix"></div>
          </dl>
          <!-- 核心数 -->
          <dl v-show="has(phone.core)" class="info_item" :class="multiValue(phone.core)">
            <dt>核心数</dt>
            <dd>
              <ul>
                <li v-for="p in phone.core" :key="p">{{p}}</li>
              </ul>
            </dd>
            <div class="clearfix"></div>
          </dl>
          <!-- CPU型号 -->
          <dl v-show="has(phone.coreType)" class="info_item">
            <dt>CPU型号</dt>
            <dd>
              <ul>
                <li>{{phone.coreType}}</li>
              </ul>
            </dd>
            <div class="clearfix"></div>
          </dl>
          <!--CPU频率 -->
          <dl v-show="has(phone.coreRate)" class="info_item" :class="multiValue(phone.coreRate)">
            <dt>CPU频率</dt>
            <dd>
              <ul>
                <li v-for="p in phone.coreRate" :key="p">{{p}}</li>
              </ul>
            </dd>
            <div class="clearfix"></div>
          </dl>
          <!--ROM容量 -->
          <dl v-show="has(phone.ROM)" class="info_item" :class="multiValue(phone.ROM)">
            <dt>ROM容量</dt>
            <dd>
              <ul>
                <li v-for="p in phone.ROM" :key="p">{{p}}</li>
              </ul>
            </dd>
            <div class="clearfix"></div>
          </dl>
          <dl v-show="has(phone.networkType)" class="info_item" :class="multiValue(phone.networkType)">
            <dt>网络类型</dt>
            <dd>
              <ul>
                <li v-for="p in phone.networkType" :key="p">{{p}}</li>
              </ul>
            </dd>
            <div class="clearfix"></div>
          </dl>
          <dl v-show="has(phone.bodyColor)" class="info_item" :class="multiValue(phone.bodyColor)">
            <dt>机身颜色</dt>
            <dd>
              <ul>
                <li v-for="p in phone.bodyColor" :key="p">{{p}}</li>
              </ul>
            </dd>
            <div class="clearfix"></div>
          </dl>
          <div class="clearfix"></div>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
    <div class="float_left right_frame">
      <div class="tags">
        <h2>
          <i class="">豆瓣成员常用的标签</i>
          · · · · · ·
        </h2>
        <div class="tags-body">
          <a href="/tag/犯罪" class="">犯罪</a>
          <a href="/tag/美国" class="">美国</a>
          <a href="/tag/暴力" class="">暴力</a>
          <a href="/tag/人性" class="">人性</a>
          <a href="/tag/犯罪心理" class="">犯罪心理</a>
          <a href="/tag/剧情" class="">剧情</a>
          <a href="/tag/2017" class="">2017</a>
          <a href="/tag/动作" class="">动作</a>
        </div>
      </div>
    </div>
    <div class="clearfix"></div>
  </div>
</template>
<<script>
import config from './../../config/config.js'
export default {
  data () {
    return {
      id:this.$route.params.id,
      phone:{},
      remarks:[]
    }
  },
  methods:{
      multiValue:function (value) {
        let clas='multi_info';
        if(value){
            if(value instanceof Array)
              return value.length>1?clas:'';

            return '';
        }
         
        return "";
      },
      has:function (value) {
       
        if(value){
            if(value instanceof Array)
              return value.length>0; 
            return true;  
        }
        
        return false;
        
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
    core:['四核','八核'],
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

.info_item {
  padding-top: 5px;
  padding-bottom: 5px;
  display: block;
  width: calc(50% - 5px);
  float: left;
}

.info_item dt {
  text-align: left;
  padding-top: 3px;
  float: left;
  width: 100px;
  color: #838383;
}

.info_item dd {
  width: calc( 100% - 100px);
  font-size: 12px;
  float: left;
}

li,
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.info_item dd li {

  float: left;
  position: relative;
  margin: 0 10px 4px 0;
  vertical-align: middle;
  padding: 3px;
  border: 1px solid transparent;
}

.border_frame,
.multi_info dd li {
  border-color: lightgray;
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
    margin: 0 0 12px 0;
    line-height: 150%;
}
.tags h2 i{
  font-style:normal;  
}
.tags-body {
    line-height: 24px;
    letter-spacing: -0.31em;
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