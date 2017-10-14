<template>
    <div>
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
        <div class="phone_list">
            <router-link :to='"/phoneDetail/"+phone.id' v-for="phone in phones" :key="phone.id">
                <div class="phone_class" @mouseenter="enableDetail($event,phone)" @mouseout="clearTimer">
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
import Icon from '@/assets/logo3.png'
import config from './../../config/config.js'
import TagAttr from '@/components/default/TagAttr.vue'

let loadText = { loading: '载入中...', waiting: '加载更多' };


function clone(obj) {
    if (typeof obj !== "object") {
        return obj;
    }
    if (obj instanceof Array) {
        var newobj = [];
        for (var i = 0; i < obj.length; i++) {
            newobj[i] = clone(obj[i]);
        }
        return newobj;
    }

    var newobj = {};
    for (var attr in obj) {
        newobj[attr] = clone(obj[attr]);
    }
    return newobj;
}
let phoneTemp = {
    id: 0,
    image: '/static/1.webapp',
    name: 'iphone 8s',
    rank: 7.9,
    screenSize: [4.4, 3.2],
    pixels: [{ x: 1080, y: 1934 }, { x: 423, y: 296 }],
    forecamera: '400万像素',
    backcamera: '800万像素',
    battery: '1200mAh',
    batteryType: '不可拆卸式电池',
    core: ['四核', '八核'],
    coreType: '联发科 Helio P25',
    coreRate: ['2.5GHz', '1.4GZ'],
    ROM: ['32G', '64G'],
    networkType: ['4G全网通', '3G移动'],
    bodyColor: ['红色', '白色'],
    year: '2015'
};

export default {
    components: {
        TagAttr
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
                let p = clone(phoneTemp);
                p.id = index;
                p.name = p.name + index;
                p.rank = rate;
                this.phones.push(p);
            }

            this.loadStatus.text = loadText.waiting;
        },
        computeMiddleStar: function(rank) {
            let rate = 10;
            if (Math.floor(rank) % 2 == 0)
                rate = Math.ceil(rank);
            else
                rate = Math.floor(rank);
            return -15 * (10 - rate);
        }, getRandomColor: function() {
            let index = Math.floor(Math.random() * colorSet.length);
            return {
                color: '#fff',
                background: colorSet[index]
            }
        }, enableDetail: function(e, p) {

            this.popBox.params = { e: e, p: p };
            //window.setTimeout(this.delay, 200);

             this.showDetail();
        }, delay: function() {
            let time = window.setTimeout(this.showDetail, 500);
            this.popBox.timer = time;
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
        }, clearTimer: function() {
           // window.clearTimeout(this.popBox.timer);
        }

    },
    created() {

        for (var index = 0; index < 8; index++) {
            let rate = 10 - index * 0.4;
            let p = clone(phoneTemp);
            p.id = index;
            p.name = p.name + index;
            p.rank = rate;         
            this.phones.push(p);
        }

        this.hoverPhone = clone(phoneTemp);


    }
}

</script>
<style scoped>
a {
    color: black;
}

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