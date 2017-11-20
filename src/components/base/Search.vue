<template>
  <div class="row" >
    <div class="col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6	col-lg-offset-3 col-lg-6">
    <div class="inp"><input id="inp-query" name="search_text"  size="22" maxlength="60" placeholder="手机" v-model="inputText" autocomplete="off" class="placeholder"></div>
    <div class="inp-btn" ><span class="search_but" @click="searchEvent"></span></div>
    </div>
  </div>
</template>
<script>
export default {
 
  props: ["text"],
  data() {
    return {
      inputText: this.text
    };
  },
  methods: {
    searchEvent: function() {
      this.$emit("searchevent", this.inputText);
    }
  }

};
</script>
<style scoped>
.input_frame {
  width: 512px;
  padding: 20px 0px 20px 0px;
  margin: 5px auto;
 
}

.inp {
  border-top: 1px solid #e3ebec;
  border-left: 1px solid #e3ebec;
  border-radius: 5px 0px 0px 5px;
  /* border:1px solid gray; */
  background-image: url(../../assets/input.png);
}

.inp {
  float: left;
  width: calc(100% - 3em);
  height: 2.4em;
  text-align: center;
  margin-right: -3px;
  cursor: text;
}

.inp input {
  background: #fff;
  width: 96%;
  margin: 0;
  text-align: left;
  height: 2.2em;
  padding-left: 0.6em;
  outline: none;
  -webkit-appearance: none;
  border: none;
  color: black;
}

.placeholder {
  color: #bbb;
}

.inp-btn {
  position: relative;
  left: -1px;
  width: 2.7em;
  height: 2.4em;
  zoom: 1;
  overflow: hidden;
}

.search_but {
  background: url(../../assets/input.png) no-repeat 0 -40px;
}

.search_but {
  display: block;
  width: 100%;
  height: 100%;
  font-size: 0;
  padding: 35px 0 0 0;
  overflow: hidden;
  color: transparent;
  cursor: pointer;
}

input {
  -webkit-appearance: none;
  border: none;
  background: transparent;
}
</style>

