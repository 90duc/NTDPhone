<template>
    <div class='logo_frame' id='logo'>
        <div class="left_arrow" @click="left"></div>
        <a v-for="img in imgs" :key="img" class="default_img" ref='images'>
            <img :src="img">
        </a>
        <div class="right_arrow" @click="right"></div>
        <div class="page_size">{{imageIndex+1}}/{{imgs.length}}</div>
    </div>
</template>
<script>
export default {
  props: ["imgs"],
  data() {
    return {
      imageIndex: 0,
      speed: 600
    };
  },
  methods: {
    left: function() {
      clearInterval(this.autoPlayTimer);
      this.moveToRight();
      this.autoPlayTimer = setTimeout(this.autoPlay, 2000);
    },
    right: function() {
      clearInterval(this.autoPlayTimer);
      this.moveToLeft();
      this.autoPlayTimer = setTimeout(this.autoPlay, 2000);
    },
    moveToLeft: function() {
      let images = this.$refs.images;
      if (!images) return;
      var $old = $(images[this.imageIndex]);
      if (this.imageIndex == this.imgs.length - 1) this.imageIndex = 0;
      else this.imageIndex++;
      var $new = $(images[this.imageIndex]);
      $new.css("left", $old.width() + "px");
      $new.show();
      $new.animate({ left: "0px" }, this.speed);
      $old.css("left", "0px");
      $old.show();
      $old.animate({ left: -$old.width() + "px" }, this.speed, function() {
        $old.hide();
      });
    },
    moveToRight: function() {
      let images = this.$refs.images;
      if (!images) return;
      var $old = $(images[this.imageIndex]);
      if (this.imageIndex == 0) this.imageIndex = this.imgs.length - 1;
      else this.imageIndex--;
      var $new = $(images[this.imageIndex]);
      $new.css("left", -$old.width() + "px");
      $new.show();
      $new.animate({ left: "0px" }, this.speed);
      $old.css("left", "0px");
      $old.show();
      $old.animate({ left: $old.width() + "px" }, this.speed, function() {
        $old.hide();
      });
    },
    autoPlay: function() {
      this.moveToLeft();
      this.autoPlayTimer = setTimeout(this.autoPlay, 2000);
    },
     init(){
      let images=this.$refs.images;
      if(!images){
        setTimeout(this.init, 100);
      }else{
       images[this.imageIndex].style.left='0px';
       images[this.imageIndex].style.display='inline';
      }
        
    }
  },
  created () {  
    setTimeout(this.init, 100);
    this.autoPlayTimer=setTimeout(this.autoPlay,2000);
  },
  beforeDestroy () {
    clearInterval(this.autoPlayTimer);
  }
};
</script>
<style lang="scss" scoped>
.logo_frame{
    width: 100%;
}
.left_arrow,
.right_arrow {
  position: absolute;
  top: calc(50% - 1.25em);
  left: 0;
  width: 2em;
  height: 3.5em;
  z-index: 10;
  cursor: pointer;
  background: url(./../../assets/arrow.png);
  display: none;
}

.logo_frame:hover .left_arrow,
.logo_frame:hover .right_arrow {
  display: block;
}

.logo_frame:hover .right_arrow {
  left: calc(100% - 2em);
  background-position-x: -40px;
}

.logo_frame:hover .right_arrow:hover {
  background-position-x: -120px;
}

.logo_frame:hover .left_arrow {
  background-position-x: 0px;
}

.logo_frame:hover .left_arrow:hover {
  background-position-x: -80px;
}

.logo_frame {
  margin-bottom: 10px;
}
#logo {
  overflow: hidden;
  position: relative;
  height: 14em;
}
.logo_frame img {
  width: 100%;
  height: 100%;
}

.default_img {
  display: none;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 300px;
}
.page_size {
  position: absolute;
  top: calc(100% - 2em);
  left: calc(100% - 4em);
  width: 3em;
  text-align: right;
  color: #bababa;
  font-size: 1.2em;
}
</style>
