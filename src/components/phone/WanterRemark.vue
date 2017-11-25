<template>
  <div>

    <div class="title_remark">
      <span>{{phone.name}} 期待愿望</span>
      <div @click="remark" class="button" v-if='noRemark'>我要写期望</div>
      <div class="clearfix"></div>
    </div>
    <div class="item_frame">
      <div class="item_remark" v-for="r in remarks" :key='r.name'>
        <div class="remark_header">
          <span>
            <span class="r_blue">{{r.name}}</span>&nbsp;{{types[r.type]}}&nbsp;
            <star type='s' :rank="r.rank"></star>&nbsp;
            <span class="r_time">{{r.time}}</span>
          </span>
          <div class="r_agree">{{r.agree}}&nbsp;
            <span class="r_blue" @click="agree(r)">有用</span>
          </div>
        </div>
        <div class="r_text">{{r.text}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import Star from "@/components/base/Star.vue";
import Data from "@/components/default/data.js";

export default {
  components: {
    Star
  },
  props: ["phone", "showBox",'status'],
  data() {
    return {
      util: this.$root,
      remarks: [],
      types: ["想买", "已买"],
      noRemark: true,
      start: 0,
      limit: 10
    };
  },
  methods: {
    agree: function(r) {
      r.agree++;
    },
    remark: function() {
      this.util.$emit(this.showBox);
    },
    getData: function() {
      if (!this.phone.pid) {
        setTimeout(() => {
          this.getData();
        }, 50);
        return;
      }
      var url = this.$config.dataURL + this.$URL.phone.checkWanterRemark;
      let that = this;

      let data = { id: this.phone.pid };
      this.$post(url, data, function(res) {
        let data = res.data;
        that.noRemark = !data.status;
      });
       this.getRemarks();
    },
    getRemarks: function() {
      let url = this.$config.dataURL + this.$URL.phone.wanterRemark;
      let that = this;
      this.$post(
        url,
        { id: this.phone.pid, start: this.start, limit: this.limit },
        function(res) {
          let data = res.data;
          that.remarks = data;
        }
      );
     
    }
  },
   watch: {
    status(n,o){
      this.getData();
    }
  },
  created() {
    this.getData();
    this.util.$on("wanter-refresh", this.getData);
  },
  beforeDestroy() {
    this.util.$off("wanter-refresh");
  }
};
</script>
<style scoped>
.title_remark {
  padding-top: 20px;
}
.title_remark span {
  color: #007722;
  font-size: 18px;
  line-height: 26px;
}
.title_remark .button {
  float: right;
  height: 26px;
  padding: 0 12px;
  line-height: 26px;
  color: #ca6445;
  background: #fae9da;
  cursor: pointer;
}
.title_remark div:hover {
  color: #d9896a;
}
.item_frame {
  margin-top: 10px;
  margin-bottom: 2em;
  border-top: 1px solid #ddd;
}
.item_remark {
  color: #494949;
  padding: 15px 0px;
  border-bottom: 1px solid #ddd;
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
