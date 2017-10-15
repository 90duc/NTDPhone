<template>
    <transition name='fade' v-if="popBox.showDetail">
        <div id='popBox' class="detail_pop" :style="popBox.position" @mouseleave="disableDetail($event)">
            <router-link :to="'/phoneDetail/'+hoverPhone.id">
                <div class="phone_frame"></div>
            </router-link>
            <div class="wrap">
                <div class="info">
                    <h3>
                        <router-link :to="'/phoneDetail/'+hoverPhone.id">{{hoverPhone.name}}</router-link>
                    </h3>
                    <p class="remark_bar">
                        <span class="allstar35" :style="'background-position-y:'+computeMiddleStar(hoverPhone.rank)+'px'"></span>
                        <span class="subject-rate">{{hoverPhone.rank.toFixed(1)}}</span>
                    </p>
                    <tag-attr :hoverPhone='hoverPhone' auto-color='true'></tag-attr>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
import TagAttr from '@/components/base/TagAttr.vue'
import Data from '@/components/default/data.js'
import config from './../../config/config.js'
export default {
    components: {
        TagAttr
    },
    data() {
        return {
            hoverPhone: {},
            popBox: { showDetail: false, position: {} }
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
            this.hoverPhone = p;
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
    min-height: 210px;
    cursor: pointer;
    border: 1px solid gray;
    border-radius: 5px;
}

.detail_pop .info {
    padding: 20px 25px;
    text-align: left;
}
</style>
