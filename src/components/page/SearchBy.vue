<template>
  <div>
    <div class="col-sx-12 col-sm-12 col-md-9 col-lg-9">
      <div class='head row'>
        <div class='title'>搜索手机</div>
        <div class='tag'>
          <span>{{type}}</span>：
          <span>{{name}}</span>
        </div>
      </div>
      <phone-list :url='url' :params='params' ref='phoneList'></phone-list>
    </div>
    <company class="col-sx-12 col-sm-12 col-md-3 col-lg-3 company"></company>
    <div class="clearfix"></div>
  </div>
</template>
<script>
import PhoneList from "@/components/phone/PhoneList.vue";
import Company from "@/components/phone/Company.vue";

let types = [
  "品牌",
  "CPU核数",
  "CPU频率",
  "CPU品牌",
  "ROM容量",
  "内存",
  "电池容量",
  "电池类型",
  "出厂年份"
];
let tagAttr = [
  "company",
  "core",
  "coreRate",
  "coreType",
  "rom",
  "ram",
  "battery",
  "batteryType",
  "year"
];

export default {
  components: {
    PhoneList,
    Company
  },
  data() {
    return {
      type: "",
      name: "",
      url: this.$URL.phone.searchBy,
      params: {
        key: "",
        value: "",
        start: 0,
        limit: this.$config.lineNumber*2
      }
    };
  },
  methods: {
    init: function() {
      let type = this.$route.params.type;
      this.name = this.$route.params.id;
      for (var i in types)
        if (tagAttr[i] == type) {
          this.type = types[i];
          break;
        }
      this.params.key = type;
      this.params.value = this.name;
      if (type == "company") this.params.value = this.$route.query.id;
      if (this.$refs.phoneList) this.$refs.phoneList.init();
    }
  },
  watch: {
    $route: function() {
      this.init();
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
}

.company {
  margin-top: 1em;
}

.tag {
  color: #666;
  font-size: 1.1em;
  padding-top: 5px;
  padding-left: 10px;
}
</style>