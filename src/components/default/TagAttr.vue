<template>
    <div class="meta">
        <span :style="getRandomColor()" v-show="hoverPhone.core" v-for='c in hoverPhone.core' :key="c">{{c}}</span>
        <span :style="getRandomColor()" v-show="hoverPhone.coreRate" v-for='c in hoverPhone.coreRate' :key="c">{{c}}</span>
        <span :style="getRandomColor()" v-show="hoverPhone.coreType">{{hoverPhone.coreType}}</span>
        <span :style="getRandomColor()" v-show="hoverPhone.ROM" v-for='c in hoverPhone.ROM' :key="c">{{c}}</span>
        <span :style="getRandomColor()" v-show="hoverPhone.networkType" v-for='c in hoverPhone.networkType' :key="c">{{c}}</span>
        <span :style="getRandomColor()" v-show="hoverPhone.battery">{{hoverPhone.battery}}</span>
        <span :style="getRandomColor()" v-show="hoverPhone.batteryType">{{hoverPhone.batteryType}}</span>
        <span :style="getRandomColor()" v-show="hoverPhone.year">{{hoverPhone.year}}</span>
        <div class="clearfix"></div>
    </div>
</template>
<script>
let colorSet = ['#6663BA', '#66c056', '#f60', '#e09015', 'gray', '#71AB67', '#36AD7D'];
export default {
    props:{
        hoverPhone:{
            required:true
        },
        autoColor:{
            default:false
        }
    }, 
    methods: {
        getRandomColor: function() {
            if(!this.autoColor)
              return {};
            let index =0;           
            index= Math.floor(Math.random() * colorSet.length);
            return {
                color: '#fff',
                background: colorSet[index]
            }
        }
    }
}
</script>

<style scoped>
.meta {
    padding-top: 10px;
    padding-bottom: 20px;
}


.meta span {
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
.meta span {
    color: #fff;
    background: #66c056;
}

</style>
