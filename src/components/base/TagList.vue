<template>
    <div class="row" style="padding-left:10px;">
        <!-- 主屏尺寸 -->
        <dl class="info_item col-xs-12 col-sm-6 col-md-6 col-lg-6" v-for='(item,i) in items' :key='item' v-if='has(phone[item])':class="multiValue(getData(phone[item]))">
            <dt>{{itemNames[i]}}</dt>
            <dd>
                <ul>
                    <li v-for="size in getData(phone[item])" :key="size">{{size}}</li>
                </ul>
            </dd>
            <div class="clearfix"></div>
        </dl>
        <div class="clearfix"></div>
    </div>
</template>
<script>
let items=[
    'screenSize', 
    'pixels',
    'forecamera',
    'backcamera',
    'battery',
    'batteryType',
    'core',
    'coreType',
    'coreRate',
    'rom',
    'ram',
    'density',
    'weight'
    ];

let itemNames=[
    '主屏尺寸', 
    '主屏分辨率',
    '后置摄像头',
    '前置摄像头',
    '电池容量',
    '电池类型',
    '核心数',
    'CPU型号',
    'CPU频率',
    'ROM容量',
    '内存',
    '屏幕密度',
    '重量'
];
export default {
    props: {
       phone:{
           required:true
       }
    },
    data(){
       return{
           items:items,
           itemNames:itemNames
       }
    },
    methods: {
        multiValue: function(value) {
            let clas = 'multi_info';
            if (value) {
                if (value instanceof Array)
                    return value.length > 1 ? clas : '';

                return '';
            }

            return "";
        },
        has: function(value) {

            if (value) {
             
                return true;
            }

            return false;

        },
        getData(v){
           
            return v.split(',');
        }
    },
}
</script>
<style scoped>
.info_item {
    display: block;
    margin: 0px;
    padding:5px 0px;
}

.info_item dt {
    text-align: left;
    padding-top: 3px;
    float: left;
    width: 100px;
    color: #838383;
}

.info_item dd {
    width: calc( 100% - 100px);
    font-size: 12px;
    float: left;
}

li,
ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.info_item dd li {

    float: left;
    position: relative;
    margin: 0 10px 4px 0;
    vertical-align: middle;
    padding: 3px;
    border: 1px solid transparent;
}

.border_frame,
.multi_info dd li {
    border-color: lightgray;
}
.clearfix {
  clear: both;
}

</style>
