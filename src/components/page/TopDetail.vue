<template>
    <div>
        <div class="title">NTD Phone排行榜</div>
        <div>
            <top-phone :title="type.name+'推荐榜'" :type="type.type" class="left_frame float_left"></top-phone>
            <div class="float_left right_frame">
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
    font-size: 26px;
    padding-left: 3px;
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