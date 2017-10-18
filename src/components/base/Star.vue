<template>
    <span :class="starType" :style="getStarLength()">
    </span>
</template>
<script>
export default {
    props: {
        type: {
            required: true
        },
        rank: {
            required: true
        }
    },
    data() {
        return {
            curSize: -11,
            sizeList: [-11, -15, -30],
            starType: '',
            typeList: ['min_star', 'middle_star', 'big_star']
        }
    }, methods: {
        getStarLength: function() {
            return {
                'background-position-y': this.cumputeStar(this.rank) + 'px'
            };
        },
        cumputeStar: function(rank) {
            if(rank<0||rank>10)
              return 0;

            let rate;
            if (rank == 0) {
                rate = 0;
            } else if (rank == 10) {
                rate = 10;
            } else
                rate = Math.ceil(rank);
            
            return this.curSize * (10 - rate);
        }
    }, created() {
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
        this.curSize = this.sizeList[index];
        this.starType = this.typeList[index];
    }
}
</script>
<style scoped>
.min_star {
    background: url(../../assets/star_rate.png) no-repeat;
    width: 55px;
    height: 11px;
    display: inline-block;
}

.middle_star {
    background: url(../../assets/middle_star.png) no-repeat;
    width: 75px;
    height: 15px;
    display: inline-block;
}

.big_star {
    background: url(../../assets/big_star.png) no-repeat;
    width: 150px;
    height: 30px;
    display: inline-block;
}
</style>
