<template>
    <div class="row" style="padding-left:10px;">
        <!-- 主屏尺寸 -->
        <dl class="info_item col-xs-12 col-sm-6 col-md-6 col-lg-6" :class="multiValue(phone.screenSize)">
            <dt>主屏尺寸</dt>
            <dd>
                <ul>
                    <li v-for="size in phone.screenSize" :key="size">{{size}}英寸</li>
                </ul>
            </dd>
            <div class="clearfix"></div>
        </dl>
        <!-- 主屏分辨率 -->
        <dl v-show="has(phone.screenSize)" class="info_item col-xs-12 col-sm-6 col-md-6 col-lg-6" :class="multiValue(phone.screenSize)">
            <dt>主屏分辨率</dt>
            <dd>
                <ul>
                    <li v-for="(p,i) in phone.pixels" :key="i">{{p.x}}x{{p.y}}像素</li>
                </ul>
            </dd>
            <div class="clearfix"></div>
        </dl>
        <!--后置摄像头-->
        <dl v-show="has(phone.backcamera)" class="info_item  col-xs-12 col-sm-6 col-md-6 col-lg-6" :class="multiValue(phone.backcamera)">
            <dt>后置摄像头</dt>
            <dd>
                <ul>
                    <li>{{phone.backcamera}}</li>
                </ul>
            </dd>
            <div class="clearfix"></div>
        </dl>
        <!--前置摄像头-->
        <dl v-show="has(phone.forecamera)" class="info_item  col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <dt>前置摄像头</dt>
            <dd>
                <ul>
                    <li>{{phone.forecamera}}</li>
                </ul>
            </dd>
            <div class="clearfix"></div>
        </dl>

        <!--电池容量-->
        <dl v-show="has(phone.battery)" class="info_item  col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <dt>电池容量</dt>
            <dd>
                <ul>
                    <li>{{phone.battery}}</li>
                </ul>
            </dd>
            <div class="clearfix"></div>
        </dl>
        <!--电池类型-->
        <dl v-show="has(phone.batteryType)" class="info_item  col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <dt>电池类型</dt>
            <dd>
                <ul>
                    <li>{{phone.batteryType}}</li>
                </ul>
            </dd>
            <div class="clearfix"></div>
        </dl>
        <!-- 核心数 -->
        <dl v-show="has(phone.core)" class="info_item  col-xs-12 col-sm-6 col-md-6 col-lg-6" :class="multiValue(phone.core)">
            <dt>核心数</dt>
            <dd>
                <ul>
                    <li v-for="p in phone.core" :key="p">{{p}}</li>
                </ul>
            </dd>
            <div class="clearfix"></div>
        </dl>
        <!-- CPU型号 -->
        <dl v-show="has(phone.coreType)" class="info_item  col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <dt>CPU型号</dt>
            <dd>
                <ul>
                    <li>{{phone.coreType}}</li>
                </ul>
            </dd>
            <div class="clearfix"></div>
        </dl>
        <!--CPU频率 -->
        <dl v-show="has(phone.coreRate)" class="info_item  col-xs-12 col-sm-6 col-md-6 col-lg-6" :class="multiValue(phone.coreRate)">
            <dt>CPU频率</dt>
            <dd>
                <ul>
                    <li v-for="p in phone.coreRate" :key="p">{{p}}</li>
                </ul>
            </dd>
            <div class="clearfix"></div>
        </dl>
        <!--ROM容量 -->
        <dl v-show="has(phone.ROM)" class="info_item  col-xs-12 col-sm-6 col-md-6 col-lg-6" :class="multiValue(phone.ROM)">
            <dt>ROM容量</dt>
            <dd>
                <ul>
                    <li v-for="p in phone.ROM" :key="p">{{p}}</li>
                </ul>
            </dd>
            <div class="clearfix"></div>
        </dl>
        <dl v-show="has(phone.networkType)" class="info_item  col-xs-12 col-sm-6 col-md-6 col-lg-6" :class="multiValue(phone.networkType)">
            <dt>网络类型</dt>
            <dd>
                <ul>
                    <li v-for="p in phone.networkType" :key="p">{{p}}</li>
                </ul>
            </dd>
            <div class="clearfix"></div>
        </dl>
        <dl v-show="has(phone.bodyColor)" class="info_item  col-xs-12 col-sm-6 col-md-6 col-lg-6" :class="multiValue(phone.bodyColor)">
            <dt>机身颜色</dt>
            <dd>
                <ul>
                    <li v-for="p in phone.bodyColor" :key="p">{{p}}</li>
                </ul>
            </dd>
            <div class="clearfix"></div>
        </dl>
        <div class="clearfix"></div>
    </div>
</template>
<script>
export default {
    props: {
       phone:{
           required:true
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
                if (value instanceof Array)
                    return value.length > 0;
                return true;
            }

            return false;

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
