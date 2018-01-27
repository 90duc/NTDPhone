<template>
  <div>
    <search v-on:searchevent="search" class="search" :text="params.text"></search>
    <div>
      <div class="col-sx-12 col-sm-12 col-md-9 col-lg-9">
        <phone-list :url='url' :params='params' ref="phoneList"></phone-list>
        <recommend :url='recommend.url' :params='recommend.params'></recommend>
        <hobby-list style="padding-top:40px;"></hobby-list>
      </div>
      <top-list class="col-sx-12 col-sm-12 col-md-3 col-lg-3" :title="topInfo.top.name+'推荐'" :type="topInfo.top.type"></top-list>
      <div class="clearfix"></div>
    </div>

  </div>
</template>
<script>
import Search from "@/components/base/Search.vue";
import PhoneList from "@/components/phone/PhoneList.vue";
import TopList from "@/components/base/TopList.vue";
import HobbyList from "@/components/base/HobbyList.vue";
import Recommend from "@/components/base/Recommend.vue";
import Top from "@/components/phone/Top.js";

export default {
  components: {
    Search,
    PhoneList,
    TopList,
    HobbyList,
    Recommend
  },
  data() {
    return {
      topInfo: Top.typeList,
      url: this.$URL.phone.search,
      params: {
        text: "",
        start: 0,
        limit: this.$config.lineNumber * 3
      },
      recommend: {
        url: this.$URL.phone.recommend,
        params:{
          start:0,
          limit: this.$config.lineNumber * 2
        }
      }
    };
  },
  methods: {
    search: function(text) {
      this.params.text = text;
      this.$router.replace({ path: this.$route.path, query: { text: text } });
      this.$refs.phoneList.init();
    }
  },
  created() {
    let text = this.$route.query.text;
    if (text) this.params.text = text;
  }
};
</script>
<style scoped>
.search {
  padding: 10px 0px;
}
.left_frame {
  width: 880px;
}

.right_frame {
  padding: 20px 0px 20px 0px;
  width: calc(100% - 880px);
  text-align: left;
}

.float_left {
  float: left;
}
</style>