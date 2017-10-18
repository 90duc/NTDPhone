<template>
    <div :class="clas">
        <star :type="type" :rank="rank"></star>
        <span class="rate padding_left">{{rank.toFixed(1)}}</span>
        <span class='padding_left'>(
            <span>{{commentSize}}</span>人评价)</span>
    </div>
</template>
<script>
import Star from '@/components/base/Star.vue'

export default {
    props: {
        type: {
            required: true
        },
        rank: {
            required: true
        },
        commentSize: {
            required: true
        }
    },
    components: {
        Star
    },
    data() {
        return {
            clas: '',
            classList: ['sb_small', 'sb_middle', 'sb_big']
        };
    },
    created() {
        var index = 0;
        switch (this.type) {
            case 's':
                index = 0;
                break;
            case 'm':
                index = 1;
                break;
            case 'b':
                index = 2;
                break;
        }

        this.clas = this.classList[index];
    }
}
</script>
<style scoped>
.padding_left {
    padding-left: 5px;
}

.rate {
    color: #e09015;
}

.sb_big {
    font-size: 18px;
}
.sb_big .padding_left{
    position: relative;
    top: -5px;
}

.sb_middle {
    font-size: 15px;
}

.sb_small {
    font-size: 12px;
}
</style>
