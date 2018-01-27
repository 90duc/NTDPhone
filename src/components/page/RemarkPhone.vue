<template>
  <div>
    <div class="col-sx-12 col-sm-12 col-md-9 col-lg-9">
      <div class='head row'>
        <div class='title'>已评论的手机</div>
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
import Paths from "@/config/path.js";
export default {
  components: {
    PhoneList,
    Company
  },
  data() {
    return {
      util: this.$root,
      url: this.$URL.phone.remarkPhone,
      params: {
        start: 0,
        limit: this.$config.lineNumber * 3
      }
    };
  },
  methods: {
    init: function() {}
  },
  created() {
    if (!this.util.checkLogin())
      this.util.$router.push({ name: "home"});
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
