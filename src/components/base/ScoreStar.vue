<!--评分组件
   prop：  type 值为hover 仅监听鼠标经过

 -->
<template>
<span>
  <span @mouseout="clear" style="position:relative;top:2px;">
         <img :src="starWhite" v-for='i in 5' :key='i' ref='stars' @mouseover="fouse(i)" @click='select(i)'>
      </span>
      <span style="font-size:12px;">{{rangeText[rangeIndex]}}</span>
</span>
</template>
<script>
import StarWhite from "@/assets/star_hollow_hover.png";
import StarYellow from "@/assets/star_onmouseover.png";

export default {
  props:['type'],
  data() {
    return {
      starWhite: StarWhite,
      starYellow: StarYellow,
      rangeText: ["", "很差", "较差", "还行", "推荐", "力荐"],
      rangeIndex: 0,
      fouseIndex: 0
    };
  },
   methods: {
    fouse: function(index) {
      this.rangeIndex = index;
      var stars = this.$refs.stars;
      for (var i = 0; i < stars.length; i++) {
        if (i < index) stars[i].setAttribute("src", this.starYellow);
        else stars[i].setAttribute("src", this.starWhite);
      }
    },
    select: function(i) {
      if(this.type=='hover')
         return;
      this.fouseIndex = i;
      this.fouse(i);
    },
    clear: function() {
     
      this.rangeIndex = this.fouseIndex;
      var stars = this.$refs.stars;
      for (var i = 0; i < stars.length; i++) {
         if (i < this.fouseIndex) stars[i].setAttribute("src", this.starYellow);
        else stars[i].setAttribute("src", this.starWhite);
      }
    }
  }
};
</script>
