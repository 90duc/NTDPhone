<template>
  <div>
    <div class="col-sx-12 col-sm-12 col-md-9 col-lg-9">
      <phone-list></phone-list>
    </div>
    <company class="col-sx-12 col-sm-12 col-md-3 col-lg-3" >12</company>
    <div class="clearfix"></div>
  </div>
</template>
<script>
import PhoneList from "@/components/phone/PhoneList.vue";
import Company from "@/components/phone/Company.vue";

export default {
  components: {
    PhoneList,Company
  }
};
</script>
<style scoped>

</style>
