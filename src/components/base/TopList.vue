<!--排名组件
  props:  title  字符串  标题名字
           
          type   值为hot
                 值为top
                 值为new
-->
<template>
    <div class="recom">
        <h2>{{title}}· · · · · ·
            <span style="float:right;">
                <router-link :to="topDetailPath+'/'+type">更多榜单»</router-link>
            </span>
        </h2>
        <div id="billboard">

            <div v-for="(phone,i) in phones" :key="phone.pid" class="tag">
                <div>
                    <span class="order fouse" :class="'order'+(i+1)">{{i+1}}</span>
                    <span class="title">
                        <router-link :to="phoneDetailPath+'/'+phone.pid">{{phone.name}}</router-link>
                    </span>
                </div>
                <star-bar class="detail" type="s" :rank="phone.rank" :commentSize="phone.commentSize"></star-bar>

            </div>

        </div>
    </div>
</template>

<script>
import StarBar from "@/components/base/StarBar.vue";
import Data from "@/components/default/data.js";
import Paths from "@/config/path.js";

export default {
  components: {
    StarBar
  },
  props: ["title", "type"],
  data() {
    return {
      topDetailPath: Paths.pages.topDetail,
      phoneDetailPath: Paths.pages.phoneDetail,
      phones: [],
      listIndex: -1,
      start: 0,
      limit: 10
    };
  },
  methods: {
    getData: function() {
      this.hobbyList = [];
      let url = this.$config.dataURL + this.$URL.phone.type;
      let that = this;
      this.$post(
        url,
        {
          type: this.type,
          start: this.start,
          limit: this.limit
        },
        function(res) {
          let list = res.data;
          for (var p in list) {
            list[p].image = that.$config.rootURL + "/" + list[p].image;
            that.phones.push(list[p]);
          }
        }
      );
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped>
.recom {
  padding-top: 10px;
  padding-bottom: 4em;
  text-align: left;
  font-size: 1.2em;
}

.recom h2 {
  padding-left: 5px;
  color: #072;
  padding-bottom: 10px;
  border-bottom: 1px solid #eaeaea;
  font: 16px Arial, Helvetica, sans-serif;
}

.recom h2 span {
  font-size: 13px;
  margin-left: 12px;
}

.recom a {
  color: #37a;
}

.recom a:hover {
  color: #ffffff;
  text-decoration: none;
  background: #37a;
}
#billboard {
  height: 395px;
}
#billboard .order {
  width: 20px;
  line-height: 1em;
  text-align: center;
  background: #afafaf;
  display: inline-block;
  color: white;
  padding-top: 2px;
}

#billboard .tag:hover .fouse {
  background: #3eaf0e;
}

#billboard .title {
  width: 100%;
  font-size: .8em;
}
#billboard .order1 {
  background-color: #ff6517;
}
#billboard .order2 {
  background-color: #ff8547;
}
#billboard .order3 {
  background-color: #ffac38;
}

#billboard .tag {
  padding: 9px 0px 9px 12px;
  border-bottom: 1px solid #eaeaea;
}

#billboard .tag .detail {
  display: none;
  padding: 5px 5px 0px 5px;
}

#billboard .tag:hover .detail {
  display: block;
}

#billboard .tag p {
  margin: 0;
  line-height: 1.4em;
}
</style>
