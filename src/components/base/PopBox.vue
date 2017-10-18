<template>
    <transition name='fade' v-if="popBox.showDetail">
        <div id='popBox' class="detail_pop" :style="popBox.position" @mouseleave="disableDetail($event)">
            <router-link :to="paths.phoneDetail+'/'+phone.id">
                <div class="phone_frame"></div>
            </router-link>
            <div class="wrap">
                <div class="info">
                    <h3>
                        <router-link :to="'/phoneDetail/'+phone.id">{{phone.name}}</router-link>
                    </h3>
                    <star-bar class="detail" type="m" :rank="phone.rank" :commentSize="phone.commentSize"></star-bar>
                    <tag-attr :phone='phone' auto-color='true'></tag-attr>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
import StarBar from '@/components/base/StarBar.vue'
import TagAttr from '@/components/base/TagAttr.vue'
import Data from '@/components/default/data.js'
import config from '@/config/config.js'
import Paths from '@/config/path.js'

export default {
    components: {
        TagAttr,StarBar
    },
    data() {
        return {
            phone: {},
            popBox: { showDetail: false, position: {} },
            paths:Paths
        }
    },
    methods: {
        computeMiddleStar: function(rank) {
            let rate = 10;
            if (Math.floor(rank) % 2 == 0)
                rate = Math.ceil(rank);
            else
                rate = Math.floor(rank);
            return -15 * (10 - rate);
        },
        enableDetail: function(e, p) {
            this.popBox.params = { e: e, p: p };
            this.showDetail();
        }, showDetail: function() {
            this.popBox.showDetail = true;
            let e = this.popBox.params.e;
            let p = this.popBox.params.p;

            let pos = e.target;
            let x = e.clientX - e.offsetX - 5;
            let y = e.clientY - e.offsetY + document.body.scrollTop - 2;
            this.popBox.position = { left: x + 'px', top: y + 'px' };
            this.phone = p;
        }, disableDetail: function(e1) {

            this.popBox.showDetail = false;
        }

    }, created() {
        this.$on('pop-box-show', this.enableDetail);
        //this.hoverPhone = Data.clone();
    }, beforeDestroy() {
        this.$off('pop-box-show', this.enableDetail);
    }
}

</script>
<style scoped>
.detail_pop {

    position: absolute;
    z-index: 99;
    /* min-height: 170px; */
}

.detail_pop .wrap {
    width: 335px;
    float: left;
    background: #fff;
    border: 1px solid #999;
    min-height: 210px;
}

.detail_pop .phone_frame {
    float: left;
    margin: 1px 0px 0px 4px;
    padding-bottom: 13px;
    width: 130px;
    min-height: 185px;
    cursor: pointer;
    border: 1px solid gray;
    border-radius: 5px;
}

.detail_pop .info {
    padding: 20px 25px;
    text-align: left;
}

span.subject-rate {
    color: #e09015;
}

.allstar35 {
    background: url(../../assets/middle_star.png) no-repeat;
    width: 75px;
    height: 15px;
    display: inline-block;
}
</style>
