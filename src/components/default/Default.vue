<template>
    <div>
        <search v-on:searchevent="search"></search>
        <div>
            <div class="left_frame float_left">
                <phone-list></phone-list>
                <hobby-list></hobby-list>
            </div>
            <top-list class="float_left right_frame"></top-list>
            <div class="clearfix"></div>
        </div>

    </div>
</template>
<style scoped>
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

.clearfix {
    clear: both;
}
</style>

<<script>
import Search from '@/components/default/Search.vue'
import PhoneList from '@/components/default/PhoneList.vue'
import TopList from '@/components/default/TopList.vue'
import HobbyList from '@/components/phone/HobbyList.vue'

export default {
  components: {
    Search,PhoneList, TopList,HobbyList
  },
  methods: {
      search:function (text){
          alert(text);
      }
  }
}
</script>
