<template>
  <div class="meta">
    <h2>{{title}}· · · · · · </h2>
    <span v-for='c in companys' :key="c.cid">
      <router-link :to="searchByPath+'/company/'+c.name+'?id='+c.cid">
        <span class="tag_attr" :class="getRandomColor()">{{c.name}}</span>
      </router-link>
    </span>
    <div class="clearfix"></div>
  </div>
</template>
<script>
import Paths from "@/config/path.js";

export default {
  props: ["dataInfo"],
  data() {
    return {
      searchByPath: Paths.pages.searchBy,
      title: "喜欢关注的品牌",
      companys: []
    };
  },
  methods: {
    getRandomColor: function() {
      // if (!this.autoColor) return "default_color";
      let index = 0;
      index = Math.floor(Math.random() * 6);
      return "c" + index;
    },
    getData: function() {
      this.companys= [];
      let url = this.$config.dataURL + this.dataInfo.url;
      let that = this;
      this.$post(url,  this.dataInfo.params, function(res) {
        let list = res.data;   
        that.companys=list;
       
      });
    }
  },
  watch: {
    "dataInfo.refresh":function(o,n){
       this.getData();
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped>
.meta {
  padding-top: 10px;
  padding-bottom: 10px;
}
.meta h2 {
  text-align: left;
  padding-left: 5px;
  padding-bottom: 10px;
  color: #072;
  border-bottom: 1px solid #eaeaea;
  font-size: 1.2em;
  margin-bottom: 20px;
}
.tag_attr {
  float: left;
  font-size: 1em;
  padding: 5px 12px;
  background: #f5f5f5;
  margin: 0 12px 12px 0;
  border-radius: 16px;
  color: #f6f6f6;
  word-break: keep-all;
  white-space: nowrap;
}
.default_color {
  background: #e5e5e5;
  color: gray;
}
.tag_attr:hover {
  color: #fff;
  background: #66c056;
}
.clearfix {
  clear: both;
}
.c0 {
  background: #36ad7d;
}

.c1 {
  background: #6663ba;
}

.c2 {
  background: #365056;
}

.c3 {
  background: #af6600;
}

.c4 {
  background: #e09015;
}

.c5 {
  background: gray;
}

.c6 {
  background: #71ab67;
}
</style>
