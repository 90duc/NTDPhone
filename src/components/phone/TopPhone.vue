<template>
    <div class="top_phone_content">
        <h2>{{title}}· · · · · ·</h2>
        <p class="ul first"></p>
        <div v-for="(phone,i) in phones" :key="phone.id">
            <table width="100%">
                <tbody>
                    <tr class="item">
                        <td class="col-xs-5 col-sm-4 col-md-4 col-lg-4 " valign="top" style="padding-left:0px;">
                            <router-link :to="paths.phoneDetail+'/'+phone.id">
                                <img :src="phone.image" width="100%">
                            </router-link>
                        </td>
                        <td class="col-xs-7 col-sm-8 col-md-8 col-lg-8 no_padding" valign="top">
                            <div class="pl2">
                                <span class="no_class">No{{i+1}}</span>
                                <router-link :to="paths.phoneDetail+'/'+phone.id">
                                    {{phone.company}} /
                                    <span>{{phone.name}}</span>
                                </router-link>
                                <span style="padding-left: 3px; color: #00A65F;">[{{phone.year}}]</span>
                                <div class="pl">
                                    <tag-attr :phone="phone" autoColor="true"></tag-attr>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <star-bar type="m" :rank="phone.rank" :commentSize="phone.commentSize"></star-bar>
                        </td>
                    </tr>
                </tbody>
            </table>

            <p class="ul first"></p>
        </div>
        <div class="more" @mousedown="loadMore()" v-if="loadStatus.status">
            {{loadStatus.text}}
        </div>
    </div>
</template>
<script>
import PhoneList from "@/components/phone/PhoneList.vue";
import HobbyList from "@/components/base/HobbyList.vue";
import TagAttr from "@/components/base/TagAttr.vue";
import StarBar from "@/components/base/StarBar.vue";
import Paths from "@/config/path.js";

import Data from "@/components/default/data.js";

let loadText = { loading: "载入中...", waiting: "加载更多" };
export default {
  components: {
    PhoneList,
    HobbyList,
    TagAttr,
    StarBar
  },
  props: ["title", "type"],
  data() {
    return {
      phones: [],
      paths: Paths,
      loadStatus: { status: true, text: loadText.waiting },
      params: {
        type: this.type,
        start: 0,
        limit: 10
      }
    };
  },
  methods: {
    loadMore: function() {
      this.loadStatus.text = loadText.loading;
      this.getData();
    },
    getData: function() {
      let url = this.$config.dataURL + this.$URL.phone.type;
      let that = this;
      this.$post(url, this.params, function(res) {
        let list = res.data;
        that.params.start += list.length;
        for (var p in list) {
          list[p].image = that.$config.rootURL + "/" + list[p].image;
          that.phones.push(list[p]);
        }
        if (list.length == that.params.limit) {
          that.loadStatus.status = true;
          that.loadStatus.text = loadText.waiting;
        } else that.loadStatus.status = false;
      });
    },
    init: function() {
      this.params.type=this.type;
      this.params.start=0;
      this.phones=[];
      this.loadStatus={ status: true, text: loadText.waiting };
      this.getData();
    }
  },
  watch: {
    type(value) {
      this.init();
    }
  },
  created() {
    this.init();
  }
};
</script>
<style scoped>
.no_padding {
  padding: 0px;
}
.top_phone_content > h2 {
  font: 1.1em Arial, Helvetica, sans-serif;
  color: #072;
  padding-left: 10px;
  margin: 0px;
  line-height: 100%;
}

.top_phone_content {
  text-align: left;
  font-size: 1.3em;
}

.ul {
  border-bottom: 1px dashed #dddddd;
  line-height: 100%;
  clear: both;
}

p {
  display: block;
  -webkit-margin-before: 1em;
  -webkit-margin-after: 1em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
}

user agent stylesheet p {
  display: block;
  -webkit-margin-before: 1em;
  -webkit-margin-after: 1em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
}

table {
  border-collapse: collapse;
  border: none;
  padding: 0;
  margin: 0;
}

td,
th {
  font: 12px Helvetica, Arial, sans-serif;
  line-height: 1.62em;
}

a {
  color: #37a;
  position: relative;
  top: -1px;
  font-size: 1.2em;
}

a:link {
  color: #37a;
  text-decoration: none;
}
.no_class {
  /* padding-left:15px; */
  font-size: 1em;
  font-weight: bold;
  /* color:green; */
}
.pl2 {
  font: 1.2em Arial, Helvetica, sans-serif;
  line-height: 150%;
  color: #666666;
}

.pl {
  font: 0.9em Arial, Helvetica, sans-serif;
  line-height: 150%;
  color: #666666;
  /* padding-top:10px; */
  max-height: 94px;
}

.clearfix {
  display: block;
}

.more {
  margin: 0px auto 10px auto;
  /* width: 480px; */
  background: #f7f7f7;
  border-radius: 5px;
  text-align: center;
  line-height: 1.4em;
  padding:2px 0px;
}

.more:hover {
  background: #eee;
  color: #37a;
}
</style>
