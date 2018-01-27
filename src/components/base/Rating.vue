<template>
  <div id="interest_sectl">
    <div class="rating_wrap clearbox" rel="v:rating">
      <div class="rating_logo">
        NTD评分
      </div>
      <div class="rating_self" typeof="v:Rating">
        <strong class="ll rating_num" property="v:average">{{phone.rank}}</strong>
        <span property="v:best" content="10.0"></span>
        <div class="rating_right ">
          <star type="m" :rank="phone.rank"></star>
          <div class="rating_people">
            <span>{{phone.commentSize}}</span>人评价</a>
          </div>
        </div>
        <div class="clearbox"></div>
      </div>
      <div class="ratings-on-weight">

        <div class="item">

          <span class="stars5 starstop" title="力荐">
            5星
          </span>
          <div class="power5" :style="'width:'+getLength(ratingPercent[4])+'px'"></div>
          <span class="rating_per">{{ratingPercent[4]}}%</span>
          <br>
        </div>
        <div class="item">

          <span class="stars4 starstop" title="推荐">
            4星
          </span>
          <div class="power4" :style="'width:'+getLength(ratingPercent[3])+'px'"></div>
          <span class="rating_per">{{ratingPercent[3]}}%</span>
          <br>
        </div>
        <div class="item">
          <span class="stars3 starstop" title="还行">
            3星
          </span>
          <div class="power3" :style="'width:'+getLength(ratingPercent[2])+'px'"></div>
          <span class="rating_per">{{ratingPercent[2]}}%</span>
          <br>
        </div>
        <div class="item">

          <span class="stars2 starstop" title="较差">
            2星
          </span>
          <div class="power2" :style="'width:'+getLength(ratingPercent[1])+'px'"></div>
          <span class="rating_per">{{ratingPercent[1]}}%</span>
          <br>
        </div>
        <div class="item">
          <span class="stars1 starstop" title="很差">
            1星
          </span>
          <div class="power1" :style="'width:'+getLength(ratingPercent[0])+'px'"></div>
          <span class="rating_per">{{ratingPercent[0]}}%</span>
          <br>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import Star from "@/components/base/Star.vue";

export default {
  components: {
    Star
  },
  props: ["phone"],
  data() {
    return {
      ratingPercent: [15.6, 40.9, 30.2, 10.9, 3.4]
    };
  },
  methods: {
    getLength: function(data) {
      return Math.floor(100 * data / 100);
    },
    initRange: function() {
      let url = this.$config.dataURL + this.$URL.phone.remarkRange;
      let that = this;
      let pid = this.phone.pid;

      this.$post(url, { pid: pid }, function(res) {
        let data = res.data;
        var da = [];
        for (var i in data.range) {
           da[i] = data.range[i] * 100 / data.size;
           if(da[i]!=0)
            da[i]=parseFloat(da[i].toFixed(2));
        }
          
        that.ratingPercent = da;
      });
    }
  },
  watch: {
    phone(value) {
      this.initRange();
    }
  }
};
</script>
<style scoped>
#interest_sectl {
  /* float: left; */
  min-width: 155px;
  margin: 2px 0 0 0;
  padding: 0 0 0 15px;
  border-left: 1px solid #eaeaea;
  color: #9b9b9b;
}

#interest_sectl .rating_wrap {
  padding-bottom: 15px;
  font-size: 12px;
  line-height: 14px;
}

.clearbox {
  clear: both;
}

#interest_sectl .rating_wrap .rating_logo {
  line-height: 1;
  color: #9b9b9b;
}

.ll {
  float: left;
}

#interest_sectl .rating_wrap .output-btn-wrap {
  line-height: 1;
  margin-right: 27px;
  display: none;
}

.rr {
  float: right;
}

#interest_sectl .rating_self {
  padding: 0;
  line-height: 2;
}

#interest_sectl .rating_num {
  color: #494949;
  padding: 0;
  min-width: 30%;
  font-size: 28px;
}

#interest_sectl .rating_right {
  float: left;
  padding: 10px 0 10px 6px;
}

.bigstar40 {
  background: url(../../assets/middle_star.png) no-repeat;
  background-position: 0 -30px;
  width: 75px;
  height: 15px;
  margin: 1px 0 0 0;
}

.rating_people {
  color: #37a;
  text-decoration: none;
}

.starstop {
  float: left;
}

.starstop,
.stars {
  margin-right: 5px;
}

.starstop {
  margin: 0px;
}

.power5,
.power4,
.power3,
.power2,
.power1 {
  height: 10px;
  float: left;
  margin: 1px 4px;
  background: #ceca80 none repeat scroll 0 0;
}

.power5 {
  background: #b79311;
}
.power4 {
  background: #ceb03a;
}
.power3 {
  background: #c7c04c;
}

.power2 {
  background: #c7bd57;
}
</style>
