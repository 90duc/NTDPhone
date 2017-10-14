<template>
    <div class="meta">
        <span v-for='name in tagAttr' :key="name">
            <span v-if="has(hoverPhone,name)">
                <span v-if="multiValue(hoverPhone,name)">
                    <router-link :to="searchUrl+name+'/'+c" v-for='c in hoverPhone[name]' :key="c">
                        <span class="tag_attr" :style="getRandomColor()">{{c}}</span>
                    </router-link>
                </span>
                <span v-else>
                    <router-link :to="searchUrl+name+'/'+hoverPhone[name]">
                        <span class="tag_attr" :style="getRandomColor()">{{hoverPhone[name]}}</span>
                    </router-link>
                </span>
            </span>
        </span>
        <div class="clearfix"></div>
    </div>
</template>
<script>
let colorSet = ['#6663BA', '#66c056', '#f60', '#e09015', 'gray', '#71AB67', '#36AD7D'];
let tagAttr = ['core', 'coreRate', 'coreType', 'ROM', 'networkType', 'battery', 'batteryType', 'year'];
let searchUrl = '/searchBy/';
export default {
    props: {
        hoverPhone: {
            required: true
        },
        autoColor: {
            default: false
        }
    },
    data() {
        return {
            tagAttr: tagAttr,
            searchUrl: searchUrl
        };
    },
    methods: {
        getRandomColor: function() {
            if (!this.autoColor)
                return {};
            let index = 0;
            index = Math.floor(Math.random() * colorSet.length);
            return {
                color: '#fff',
                background: colorSet[index]
            }
        },
        multiValue: function(phone, name) {
            let value = phone[name];
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

        }
    },
    created() {
      
    }
}
</script>

<style scoped>
.meta {
    padding-top: 10px;
    padding-bottom: 20px;
}


.meta .tag_attr {
    float: left;
    font-size: 13px;
    padding: 2px 10px 1px;
    background: #f5f5f5;
    margin: 0 8px 8px 0;
    border-radius: 12px;
    color: #666;
    word-break: keep-all;
    white-space: nowrap;
}

.meta green {
    color: #fff;
    background: #66c056;
}
</style>
