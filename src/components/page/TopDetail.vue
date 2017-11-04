<template>
    <div>
        <div class="title">NTD Phone排行榜</div>
        <div class="row">
            <top-phone :title="type.name+'推荐榜'" :type="type.type" class="col-xs-12 col-sm-12 col-md-9 col-lg-9"></top-phone>
            <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                <div v-for="t in topInfo" :key="t.name" v-if='t!=type'>
                    <top-list :title="t.name+'推荐'" :type="t.type"></top-list>
                </div>              
            </div>
            <div class="clearfix"></div>
        </div>

    </div>
</template>
<script>
import TopPhone from '@/components/phone/TopPhone.vue'
import TopList from '@/components/base/TopList.vue'
import HobbyList from '@/components/base/HobbyList.vue'
import Top from '@/components/phone/Top.js'

export default {
    components: {
        TopPhone, TopList, HobbyList
    },
    data() {
        return {
            type: '',
            topInfo: Top.typeList
        };
    },
    methods: {
        init: function() {
            this.type = Top.getType(this.$route.params.type);
        }
    },
    watch: {
        '$route': 'init'
    }, created() {
        this.init();
    }
}
</script>
<style scoped>
.title {
    font-size: 1.8em;
    padding-left: 3px;
    padding-bottom: 10px;
    text-align: left;
}

.clearfix {
    clear: both;
}
</style>