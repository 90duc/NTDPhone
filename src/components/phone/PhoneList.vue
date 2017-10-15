<template>
    <div>
        <pop-box ref='PopBox'></pop-box>
        <div class="phone_list">
            <router-link :to='"/phoneDetail/"+phone.id' v-for="phone in phones" :key="phone.id">
                <div class="phone_class" @mouseenter="enableDetail($event,phone)">
                    <img :src="phone.image" />
                    <div>
                        <span class="phone_name">{{phone.name}}</span>
                        <span class="subject-rate">{{phone.rank.toFixed(1)}}</span>
                    </div>
                </div>
            </router-link>
            <div class="clearfix"></div>
        </div>
        <div class="more" @mousedown="loadMore()" v-if="loadStatus.status">
            {{loadStatus.text}}
        </div>

    </div>
</template>

<script>
import Data from '@/components/default/data.js'
import Icon from '@/assets/logo3.png'
import config from './../../config/config.js'
import PopBox from '@/components/base/PopBox.vue'

let loadText = { loading: '载入中...', waiting: '加载更多' };

export default {
    components: {
        PopBox
    },
    data() {
        return {
            phones: [],
            loadStatus: { status: true, text: loadText.waiting },
            hoverPhone: {},
            popBox: { showDetail: false, position: {} }
        }
    },
    methods: {
        loadMore: function() {
            this.loadStatus.text = loadText.loading;
            window.setTimeout(this.addPage, 500);
        },
        addPage: function() {
            let size = this.phones.length + 5;
            for (var index = this.phones.length; index < size; index++) {
                let rate = 10 - index * 0.4;
                let p = Data.clone();
                p.id = index;
                p.name = p.name + index;
                p.rank = rate;
                this.phones.push(p);
            }

            this.loadStatus.text = loadText.waiting;
        },
        enableDetail: function(e, p) {
           this.$refs.PopBox.$emit('pop-box-show', e,p);
        }

    },
    created() {

        for (var index = 0; index < 8; index++) {
            let rate = 10 - index * 0.4;
            let p = Data.clone();
            p.id = index;
            p.name = p.name + index;
            p.rank = rate;         
            this.phones.push(p);
        }

        this.hoverPhone = Data.clone();


    }
}

</script>
<style scoped>



.remark_bar {
    padding: 7px 0px;
}

.allstar35 {
    background: url(../../assets/middle_star.png) no-repeat;
    width: 75px;
    height: 15px;
    display: inline-block;
}


span.subject-rate {
    color: #e09015;
}

.phone_class {
    cursor: pointer;
    width: 120px;
    float: left;
    padding: 5px 5px 8px;
    margin: 2px 12px 12px 2px;
    /* height:200px;  */
    border: 1px solid transparent;
    color: black;
}

.phone_class:hover {
    border-color: gray;
    border-radius: 5px;
}


.phone_class img {
    width: 120px;
    height: 160px;
}

.phone_class>div {
    width: 100%;
    font-size: 18px;
    padding-top: 2px;
    padding-bottom: 4px;
    height: 40px;
    overflow: hidden;
    text-align: left;
}

span.subject-rate {
    color: #e09015;
    padding-left: 2px;
}

.clearfix {
    clear: both;
}

.more {
    margin: 0px auto 10px auto;
    /* width: 480px; */
    background: #f7f7f7;
    border-radius: 5px;
    text-align: center;
    line-height: 30px;
    margin-bottom: 60px;
}

.more:hover {
    background: #eee;
    color: #37a;
}
</style>