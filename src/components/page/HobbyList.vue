<template>
  <div>
    <div class="col-sx-12 col-sm-12 col-md-9 col-lg-9">
      <div class='head row'>
        <div class='title'>热门手机</div>
        <div class='tag'>
          <span :class='getClass(i)' @click="select(i)" v-for='(t,i) in types' :key='t'>{{t}}</span>

        </div>
      </div>
      <phone-list :dataInfo='typeData' ref='phoneList'></phone-list>
    </div>
    <company class="col-sx-12 col-sm-12 col-md-3 col-lg-3 company" :dataInfo='companyData'></company>
    <div class="clearfix"></div>
  </div>
</template>
<script>
import PhoneList from "@/components/phone/PhoneList.vue";
import Company from "@/components/phone/Company.vue";
import Paths from "@/config/path.js";

let types = ["高分辨率", "后置摄像头", "电池容量大", "运行内存大"];
let titleNames = ["pixels", "backcamera", "battery", "ram"];
export default {
  components: {
    PhoneList,
    Company
  },
  data() {
    return {
      types: types,
      focusedIndex: 0,
      typeData: {
        url: this.$URL.phone.hobby,
        params: {
          type: "",
          start: 0,
          limit: this.$config.lineNumber * 3
        },
        refresh: true
      },
      companyData: {
        url: this.$URL.phone.company,
        params: {
          type: "hobby",
          key: "",
          start: 0,
          limit: 20
        },
        refresh: true
      }
    };
  },
  methods: {
    select: function(i) {
      this.focusedIndex = i;
      this.$router.push({ path: Paths.pages.hobbyList + `/${this.types[i]}` });
      this.init();
    },
    getClass: function(i) {
      let a = "";
      if (this.focusedIndex == i) a = "focused";
      return a;
    },
    init: function() {
      let type = this.$route.params.type;
      for (var i in this.types) {
        if (this.types[i] == type) {
          this.focusedIndex = i;
          this.typeData.params.type = titleNames[i];
          this.companyData.params.key = titleNames[i];
          this.companyData.refresh = !this.companyData.refresh;
          if (this.$refs.phoneList) this.$refs.phoneList.init();
        }
      }
    }
  },
  created() {
    this.init();
  }
};
</script>
<style scoped>
.head {
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: left;
  border-bottom: 1px solid lightgray;
  margin-bottom: 5px;
}
.title {
  font-size: 1.5em;
  /* padding-left: 1em; */
  color: #072;
  margin-bottom: 1em;
}

.company {
  margin-top: 2.6em;
}
.tag span {
  text-align: center;
  display: inline-block;
  color: #666;
  padding: 5px 10px;
  vertical-align: middle;
  font-size: 1em;
  /* background: lightgray; */
  border-radius: 4px;
  margin-right: 5px;
}
.tag span:hover {
  background: #eee;
}
.tag span.focused {
  background: #4b8ccb;
  color: white;
}
</style>
