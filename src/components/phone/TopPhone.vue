<template>
    <div class="top_phone_content">
        <p class="ul first"></p>
        <div v-for="phone in phones" :key="phone.id">
            <table width="100%">
                <tbody>
                    <tr class="item">
                        <td width="120" valign="top">
                            <a class="nbg" title="大护法">
                                <img :src="phone.image" width="100">
                            </a>
                        </td>
                        <td valign="top">
                            <div class="pl2">
                                <router-link :to="paths.phoneDetail+'/'+phone.id">
                                    {{phone.company}} /
                                    <span style="font-size:13px;">{{phone.name}}</span>
                                </router-link>
                                <span style="font-size: 13px; padding-left: 3px; color: #00A65F;">[{{phone.year}}]</span>
                                <div class="pl">
                                   <tag-attr :hoverPhone="phone" autoColor="true"></tag-attr>
                                </div>
                                <div class="star clearfix">
                                    <span class="allstar40"></span>
                                    <span class="rating_nums">7.9</span>
                                    <span class="pl">(140933人评价)</span>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p class="ul first"></p>
        </div>

    </div>
</template>
<script>
import PhoneList from '@/components/phone/PhoneList.vue'
import HobbyList from '@/components/base/HobbyList.vue'
import TagAttr from '@/components/base/TagAttr.vue'
import Paths from '@/config/path.js'
import Data from '@/components/default/data.js'


export default {
    components: {
        PhoneList, HobbyList,TagAttr
    },
    data() {
        return {
            phones: [],
            paths: Paths
        }
    },
    methods: {
     
    }, created() {
        for (var i = 0; i < 12; i++) {
            let p = Data.clone();
            p.name += i;
            this.phones.push(p);
        }
    }
}
</script>
<style scoped>
.top_phone_content {
    text-align: left;
}

.ul {
    border-bottom: 1px dashed #DDDDDD;
    line-height: 100%;
    clear: both;
}

p{
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
}

a:link {
    color: #37a;
    text-decoration: none;
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
    padding-top:10px;
}

.clearfix {
    display: block;
}
</style>
