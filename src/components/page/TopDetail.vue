<template>
    <div>
         <div class="title">NTD Phone排行榜</div>
        <div>
            <top-phone class="left_frame float_left"></top-phone>           
            <div class="float_left right_frame" >
                 <top-list title='热门推荐'></top-list>
              
            </div>
           
            <div class="clearfix"></div>
        </div>

    </div>
</template>
<style scoped>
.title {
    font-size: 26px;
    padding-left: 20px;
    padding-bottom: 10px;
    text-align: left;
}
.left_frame {
    width: 720px;
    padding-right: 50px;
}

.right_frame {
    padding: 20px 0px 20px 0px;
    width: calc(100% - 770px);
    text-align: left;
}

.float_left {
    float: left;
}

.clearfix {
    clear: both;
}
</style>

<script>
import TopPhone from '@/components/phone/TopPhone.vue'
import TopList from '@/components/base/TopList.vue'
import HobbyList from '@/components/base/HobbyList.vue'

export default {
  components: {
     TopPhone,TopList,HobbyList
  },
  methods: {
    
  }
}
</script>
