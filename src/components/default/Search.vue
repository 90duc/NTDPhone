<template>
  <div class="input_frame" >
    <div class="inp"><input id="inp-query" name="search_text" size="22" maxlength="60" placeholder="手机" v-model="inputText" autocomplete="off" class="placeholder"></div>
    <div class="inp-btn" ><span class="search_but" @click="searchEvent"></span></div>
  </div>
</template>
<style scoped>
.input_frame {

  width:512px; 
  padding:20px 0px 20px 0px;
  margin:5px auto;
}

.inp {
  border-top:1px solid #e3ebec;
  border-left:1px solid #e3ebec;
  border-radius: 5px 0px 0px 5px;
  /* border:1px solid gray; */
  background-image: url(../../assets/input.png);
}

.inp {
  float: left;
  width: 470px;
  height: 33px;
  text-align: center;
  margin-right: -3px;
  cursor: text;
}

.inp input {
  background: #fff;
  width: 96%;
  margin: 0;
  text-align: left;
  height: 30px;
  padding-left: 10px;
  line-height: 28px\9;
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
  width: 37px;
  height: 34px;
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
<script>
export default {
  
   data(){
     return{
       inputText:""
     }
   },
   methods:{
    searchEvent:function(){     
        this.$emit('searchevent',this.inputText);
        
    }
   }
}
</script>
