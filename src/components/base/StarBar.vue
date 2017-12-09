<!--显示评分组件
   prop：  type 值为s  显示小星星
                值为m  显示中星星
                值为b  显示大星星

           rank 值为Number类型 表示星星的等级数

           commentSize 值为Number类型 表示评论人数
 -->
<template>
    <div :class="clas">
        <star :type="type" :rank="rank"></star>
        <span class="rate padding_left">{{getRank(rank)}}</span>
        <span class='padding_left'>(
            <span>{{commentSize}}</span>人评价)</span>
    </div>
</template>
<script>
import Star from "@/components/base/Star.vue";

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
      clas: "",
      classList: ["sb_small", "sb_middle", "sb_big"]
    };
  },
  methods: {
    getRank: function(v) {
      if (v) {
        return v.toFixed(1);
      }
    }
  },
  created() {
    var index = 0;
    switch (this.type) {
      case "s":
        index = 0;
        break;
      case "m":
        index = 1;
        break;
      case "b":
        index = 2;
        break;
    }

    this.clas = this.classList[index];
  }
};
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
.sb_big .padding_left {
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
