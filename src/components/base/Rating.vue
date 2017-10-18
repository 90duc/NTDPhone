<template>
    <div id="interest_sectl">
        <div class="rating_wrap clearbox" rel="v:rating">
            <div class="rating_logo">
                NTD评分
            </div>
            <div class="rating_self" typeof="v:Rating">
                <strong class="ll rating_num" property="v:average">7.9</strong>
                <span property="v:best" content="10.0"></span>
                <div class="rating_right ">
                    <star type="m" :rank="7.9"></star>
                    <div class="rating_people">
                        <span>141417</span>人评价</a>
                    </div>
                </div>
                <div class="clearbox"></div>
            </div>
            <div class="ratings-on-weight">

                <div class="item">

                    <span class="stars5 starstop" title="力荐">
                        5星
                    </span>
                    <div class="power" style="width:38px"></div>
                    <span class="rating_per">27.2%</span>
                    <br>
                </div>
                <div class="item">

                    <span class="stars4 starstop" title="推荐">
                        4星
                    </span>
                    <div class="power" style="width:64px"></div>
                    <span class="rating_per">45.1%</span>
                    <br>
                </div>
                <div class="item">

                    <span class="stars3 starstop" title="还行">
                        3星
                    </span>
                    <div class="power" style="width:32px"></div>
                    <span class="rating_per">22.7%</span>
                    <br>
                </div>
                <div class="item">

                    <span class="stars2 starstop" title="较差">
                        2星
                    </span>
                    <div class="power" style="width:5px"></div>
                    <span class="rating_per">3.7%</span>
                    <br>
                </div>
                <div class="item">

                    <span class="stars1 starstop" title="很差">
                        1星
                    </span>
                    <div class="power" style="width:1px"></div>
                    <span class="rating_per">1.3%</span>
                    <br>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import Star from '@/components/base/Star.vue'

export default {
    components: {
        Star
    },
    methods: {
        getLength: function(data) {
            return math.floor(156 * data);
        }
    }
}
</script>
<style scoped>
#interest_sectl {
    /* float: left; */
    width: 155px;
    margin: 2px 0 0 0;
    padding: 0 0 0 15px;
    border-left: 1px solid #eaeaea;
    color: #9b9b9b;
}

#interest_sectl .rating_wrap {
    padding-bottom: 15px;
    font-size: 12px;
    line-height: 14px;
}

.clearbox {
    clear: both;
}

#interest_sectl .rating_wrap .rating_logo {
    line-height: 1;
    color: #9b9b9b;
}

.ll {
    float: left;
}

#interest_sectl .rating_wrap .output-btn-wrap {
    line-height: 1;
    margin-right: 27px;
    display: none;
}

.rr {
    float: right;
}

#interest_sectl .rating_self {
    padding: 0;
    line-height: 2;
}

#interest_sectl .rating_num {
    color: #494949;
    padding: 0;
    min-width: 30%;
    font-size: 28px;
}

#interest_sectl .rating_right {
    float: left;
    padding: 10px 0 10px 6px;
}

.bigstar40 {
    background: url(../../assets/middle_star.png) no-repeat;
    background-position: 0 -30px;
    width: 75px;
    height: 15px;
    margin: 1px 0 0 0;
}

.rating_people {
    color: #37a;
    text-decoration: none;
}

.starstop {
    float: left;
}

.starstop,
.stars {
    margin-right: 5px;
}

.starstop {
    margin: 0;
}

#interest_sectl .power {
    height: 10px;
    float: left;
    margin: 1px 4px;
    background: #ffd596 none repeat scroll 0 0;
}
</style>
