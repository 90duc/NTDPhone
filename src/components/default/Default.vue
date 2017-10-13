<template>
   <div >
       <search v-on:searchevent="search"></search>
       <phone-list class="left_frame float_left"></phone-list>
       <hobby-list class="float_left"></hobby-list>
       <div class="clearfix"></div>
   </div>
  
</template>
<style scoped>
.left_frame{
    width:830px;
}
.float_left{
    float: left;
}
.clearfix {
    clear: both;
}
</style>

<<script>
import Search from '@/components/default/Search.vue'
import PhoneList from '@/components/default/PhoneList.vue'
import HobbyList from '@/components/default/HobbyList.vue'
export default {
  components: {
    Search,PhoneList, HobbyList
  },
  methods: {
      search:function (text){
          alert(text);
      }
  }
}
</script>
