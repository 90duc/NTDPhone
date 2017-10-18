<template>
    <div class="top_phone_content">
        <h2>{{title}}· · · · · ·</h2>
        <p class="ul first"></p>
        <div v-for="(phone,i) in phones" :key="phone.id">         
            <table width="100%">
                <tbody>
                    <tr class="item">
                        <td width="120" valign="top">
                             <router-link class="nbg" :to="paths.phoneDetail+'/'+phone.id">
                                <img :src="phone.image" width="100">
                            </router-link>
                        </td>
                        <td valign="top">
                            <div class="pl2">
                               <span  class="no_class">No{{i+1}}</span>
                                <router-link :to="paths.phoneDetail+'/'+phone.id" >
                                    {{phone.company}} /
                                    <span style="font-size:13px;">{{phone.name}}</span>
                                </router-link>
                                <span style="font-size: 13px; padding-left: 3px; color: #00A65F;">[{{phone.year}}]</span>
                                <div class="pl">
                                    <tag-attr :phone="phone" autoColor="true"></tag-attr>
                                </div>
                                <star-bar type="m" :rank="phone.rank" :commentSize="phone.commentSize"></star-bar>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            
            <p class="ul first"></p>
        </div>
        <div class="more" @mousedown="loadMore()" v-if="loadStatus.status">
            {{loadStatus.text}}
        </div>
    </div>
</template>
<script>
import PhoneList from '@/components/phone/PhoneList.vue'
import HobbyList from '@/components/base/HobbyList.vue'
import TagAttr from '@/components/base/TagAttr.vue'
import StarBar from '@/components/base/StarBar.vue'
import Paths from '@/config/path.js'
import Top from '@/components/phone/Top.js'

import Data from '@/components/default/data.js'

let loadText = { loading: '载入中...', waiting: '加载更多' };
export default {
    components: {
        PhoneList, HobbyList, TagAttr, StarBar
    },
    props:['title','type'],
    data() {
        return {
            phones: [],
            paths: Paths,
            loadStatus: { status: true, text: loadText.waiting },
            url:Top.getUrl(this.type)
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
                let rate = 10 * Math.random();
                let p = Data.clone();
                p.id = index;
                p.name = p.name + index;
                p.rank = rate;
                this.phones.push(p);
            }

            this.loadStatus.text = loadText.waiting;
        },
        init: function() {
            let type = Top.getType(this.type);
            this.phones=[];
            for (var i = 0; i < 10; i++) {
             let rate = 10 * Math.random();
             let p = Data.clone();
             p.id = i;
             p.name = p.name + i+type.name;
             p.rank = rate;
             this.phones.push(p);
           }
        }
    },watch:{
        type(value){
           this.init();
        }
    },created() {
       this.init();
    }
}
</script>
<style scoped>
.top_phone_content > h2 {
    font: 16px Arial, Helvetica, sans-serif;
    color: #072;
    padding-left: 10px;
    line-height: 150%;
}

.top_phone_content {
    text-align: left;
}

.ul {
    border-bottom: 1px dashed #DDDDDD;
    line-height: 100%;
    clear: both;
}

p {
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
}

user agent stylesheet p {
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
}

table {
    border-collapse: collapse;
    border: none;
    padding: 0;
    margin: 0;
}

td,
th {
    font: 12px Helvetica, Arial, sans-serif;
    line-height: 1.62;
}

a {
    color: #37a;
    padding-left: 13px;
    position:relative;
    top:-1px;
}

a:link {
    color: #37a;
    text-decoration: none;
}
.no_class{
    /* padding-left:15px; */
    font-size:16px;
    font-weight:bold;
    /* color:green; */
}
.pl2 {
    font: 14px Arial, Helvetica, sans-serif;
    line-height: 150%;
    color: #666666;
}

.pl {
    font: 12px Arial, Helvetica, sans-serif;
    line-height: 150%;
    color: #666666;
    /* padding-top:10px; */
    max-height: 94px;
}

.clearfix {
    display: block;
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
