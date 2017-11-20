<template>
    <div>
        <div class="return_bt">
            <button @click="return_bt" id='return_bt'> &lt; 返回</button>
        </div>
        <canvas id="canvas">你的浏览器不支持HTML5画布技术，请使用谷歌浏览器。</canvas>

    </div>
</template>
<script>

import Pic from "./js/init.js";

export default {
  
  methods: {
    return_bt: function() {
      window.history.back();
    },
    getData: function() {
      let url = this.$config.dataURL + this.$URL.phone.images;
      let that = this;
      this.$post(url, {id:this.$route.query.id }, function(res) {
        let data = res.data;   
         Pic.init(data, that.$config.imageURL+"/" );
      });
    },

  },
  mounted () {
    this.getData();
  }
};
</script>
<style scoped>
#canvas {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: #e5e5e5;
}

.return_bt {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10;
}

#return_bt {
  background: transparent;
  cursor: pointer;
  border: 1px solid transparent;
  color: gray;
  padding: 2px 5px;
}

#return_bt:hover {
  /* color: black; */
  border-color: lightgray;
  border-radius: 3px;
}

body img {
  z-index: 99;
}
</style>
