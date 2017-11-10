<template>
  <div>
    <div class="col-sx-12 col-sm-12 col-md-9 col-lg-9">
      <div class='head row'>
        <div class='title'>热门手机</div>
        <div class='tag'>
          <span @click="select('3G')">3G</span>
          <span>4G</span>
        </div>
      </div>
      <phone-list :url='url'></phone-list>
    </div>
    <company class="col-sx-12 col-sm-12 col-md-3 col-lg-3 company"></company>
    <div class="clearfix"></div>
  </div>
</template>
<script>
import PhoneList from "@/components/phone/PhoneList.vue";
import Company from "@/components/phone/Company.vue";

export default {
  components: {
    PhoneList,
    Company
  },
  data () {
    return {
      url:'select/'
    }
  },
  methods: {
    select:function(e){
       this.url=e;
    }
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

.company{
  margin-top: 1.6em;
}
.tag span {
  text-align: center;
  display: inline-block;
  color: #666;
  padding: 5px 12px;
  vertical-align: middle;
  font-size: 1em;
  /* background: lightgray; */
  border-radius: 4px;
  margin-right: 10px;
}
.tag span:hover {
  background: #eee;
}
.tag span.focus {
  background: #4b8ccb;
  color: white;
}
</style>
