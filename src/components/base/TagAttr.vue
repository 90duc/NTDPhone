<template>
    <div class="meta">
        <span v-for='name in tagAttr' :key="name">
            <span v-if="has(phone,name)">
                <span v-if="multiValue(getData(phone[name]))">
                    <router-link :to="searchByPath+'/'+name+'/'+c" v-for='c in getData(phone[name])' :key="c">
                        <span class="tag_attr" :class="getRandomColor()">{{c}}</span>
                    </router-link>
                </span>
                <span v-else>
                    <router-link :to="searchByPath+'/'+name+'/'+phone[name]">
                        <span class="tag_attr" :class="getRandomColor()">{{phone[name]}}</span>
                    </router-link>
                </span>
            </span>
        </span>
        <div class="clearfix"></div>
    </div>
</template>
<script>
import Paths from '@/config/path.js'

let tagAttr = ['core', 'coreRate', 'coreType', 'rom', 'ram', 'battery', 'batteryType', 'year'];

export default {
    props: {
        phone: {
            required: true
        },
        autoColor: {
            default: false
        }
    },
    data() {
        return {
            searchByPath: Paths.pages.searchBy,
            tagAttr: tagAttr,         
        };
    },
    methods: {
        getRandomColor: function() {
            if (!this.autoColor)
                return 'default_color';
            let index = 0;
            index = Math.floor(Math.random() * 6);
            return 'c'+index;
        },
        multiValue: function(value) {
            if (value) {
                if (value instanceof Array)
                    return value.length > 1;

            }

            return false;
        },
        has: function(phone, name) {
            let value = phone[name];
            if (value) {
                if (value instanceof Array)
                    return value.length > 0;
                return true;
            }

            return false;

        },
        getData(v){
            return v.split(/[,，]/);
        }
    },
    created() {

    }
}
</script>

<style scoped>
.meta {
    padding-top: 10px;
    padding-bottom: 10px;
}

.tag_attr {
    float: left;
    font-size: 1em;
    padding: 2px 10px 1px;
    background: #f5f5f5;
    margin: 0 8px 8px 0;
    border-radius: 12px;
    color: #f6f6f6;
    word-break: keep-all;
    white-space: nowrap;
}
 .default_color{
    background: #e5e5e5;
    color: gray;
}
 .tag_attr:hover {
    color: #fff;
    background: #66c056;
}
.clearfix {
    clear: both;
}
.c0 {
    background: #36AD7D
}

.c1 {
    background: #6663BA
}

.c2 {
    background: #365056
}

.c3 {
    background: #af6600
}

.c4 {
    background: #e09015
}

.c5 {
    background: gray
}

.c6 {
    background: #71AB67
}
</style>
