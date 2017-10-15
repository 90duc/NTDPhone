<template>
    <div class="content">
        <div class="title">NTD Phone排行榜</div>
        <div>
            <p class="ul first"></p>
            <table width="100%" class="">
                <tbody>
                    <tr class="item">
                        <td width="100" valign="top">
                            <a class="nbg" title="大护法">
                                <img src="https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2490948849.webp" width="75" alt="大护法" class="">
                            </a>
                        </td>
                        <td valign="top">
                            <div class="pl2">
                                <a class="">
                                    大护法 /
                                    <span style="font-size:13px;">大护法之黑花生</span>
                                </a>
                                <span style="font-size: 13px; padding-left: 3px; color: #00A65F;">[可播放]</span>
                                <p class="pl">2017-07-13(中国大陆) / 小连杀 / 图特哈蒙 / 金士杰 / 幽舞越山 / 李佳怡 / 李兰陵 / 郭盛 / 叶知秋 / 佟心竹 / 邢凯新 / 藤新 / 郝祥海 / 中国大陆 / 不思凡 / 95分钟 / 喜剧 / 动画 / 奇幻 / 冒险 / 不思凡 Bu Si Fan / 汉语普通话</p>
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
        <hobby-list></hobby-list>
    </div>
</template>
<script>

import PhoneList from '@/components/phone/PhoneList.vue'
import HobbyList from '@/components/base/HobbyList.vue'

export default {
    components: {
        PhoneList, HobbyList
    },
    methods: {
        search: function(text) {
            alert(text);
        }
    }
}
</script>
<style scoped>
.content {
    text-align: left;
}

.title {
    font-size: 26px;
    padding-left: 20px;
    padding-bottom: 10px;
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
td, th {
    font: 12px Helvetica,Arial,sans-serif;
    line-height: 1.62;
}
a{
    color: #37a;
}
a:link {
    color: #37a;
    text-decoration: none;
}

a:visited {
    color: #669;
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
}
.clearfix {
    display: block;
}
</style>
