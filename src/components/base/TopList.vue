<template>
    <div class="recom">
        <h2>{{title}}· · · · · ·
            <span style="float:right;">
                <router-link :to="paths.topDetail+'/'+type">更多榜单»</router-link>
            </span>
        </h2>
        <div id="billboard">

            <div v-for="(phone,i) in phones" :key="phone.id" class="tag">
                <div>
                    <span class="order fouse" :class="'order'+(i+1)">{{i+1}}</span>
                    <span class="title">
                        <router-link :to="paths.phoneDetail+'/'+phone.id">{{phone.name}}</router-link>
                    </span>
                </div>
                <star-bar class="detail" type="s" :rank="phone.rank" :commentSize="phone.commentSize"></star-bar>

            </div>

        </div>
    </div>
</template>

<script>
import StarBar from '@/components/base/StarBar.vue'
import Data from '@/components/default/data.js'
import Paths from '@/config/path.js'


export default {
    components: {
        StarBar
    },
    props: ['title', 'type'],
    data() {
        return {
            paths: Paths,
            phones: [],
            listIndex: -1
        }
    },
    methods: {
     
    },
    created() {
        //this.title='热门推荐';
        for (var i = 1; i < 11; i++) {
            let rate = 10 - i * 0.4;
            let p = Data.clone();
            p.commentSize += Math.floor(Math.random() * 1500);
            this.phones.push(p);
        }

    }
}
</script>

<style scoped>
.recom {
    padding-top: 10px;
    padding-bottom: 10px;
}

.recom h2 {
    padding-left: 5px;
    color:#072;
    padding-bottom: 10px;
    border-bottom: 1px solid #eaeaea;
    font: 16px Arial, Helvetica, sans-serif;
}

.recom h2 span {
    font-size: 13px;
    margin-left: 12px;
}

.recom a {
    color: #37a;
}

.recom a:hover {
    color: #FFFFFF;
    text-decoration: none;
    background: #37a;
}
#billboard {
    height:395px;
}
#billboard .order {
    width: 20px;
    font-size: 9px;
    text-align: center;
    background: #afafaf;
    display: inline-block;
    color: white;
}

#billboard .tag:hover .fouse {
    background: #3eaf0e;
}

#billboard .title {
    width: 100%;
}
#billboard .order1{
    background-color: #ff6517;
}
#billboard .order2{
    background-color: #ff8547;
}
#billboard .order3{
    background-color: #ffac38;
}

#billboard .tag {
    padding: 9px 0px 9px 12px;
    border-bottom: 1px solid #eaeaea;
}

#billboard .tag .detail {
    display: none;
    padding: 5px 5px 0px 5px;
}

#billboard .tag:hover .detail {
    display: block;
}

#billboard .tag p {
    margin: 0;
    line-height: 22px;
    width: 280px;
    font-size: 13px;
}
</style>
