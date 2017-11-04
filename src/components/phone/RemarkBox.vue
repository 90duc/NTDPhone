<template>
   <div  class='lb_form'>
    <div  class='col-xs-8 col-sm-6 col-md-5  col-lg-5' style="max-width:35em"> 
      <div class="lb_border"></div>
      <div class='lb_box'>
       <a  class="j_close_dialog dui-dialog-close" @click="close">X</a>     
         <div class="lb_title">评价{{title}}</div>
         <div class="lb_field">
           <span>评分：</span><score-star></score-star>
         </div> 
         
        <div class="lb_save">
          <button class="btn btn-success">保存</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ScoreStar from "@/components/base/ScoreStar.vue";
var title = "NTD Phone";

export default {
   components: {
    ScoreStar
  },
  model: {
    prop: "loginBoxShow",
    event: "loginBoxShow"
  },
  data() {
    return {
      title: title
    };
  },
  methods: {
    login: function() {
      this.$root.$emit("login");
    },
    check: function() {},
    close: function() {
      this.$emit("loginBoxShow", false);
    }
  }
};
</script>
<style scoped>
.lb_border {
  width: calc(100% + 14px);
  height: calc(25em + 14px);
  position: absolute;
  top:calc(50vh - 12.5em - 7px);
  left:calc(50vw - 50% - 7px);
  border-radius: 6px;
  background-color: #333;
  padding:15px;
  opacity: 0.2;
  z-index: 100;
}
.lb_form {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 100;
}

.lb_box {
  width: 100%;
  height: 25em;
  position: absolute;
  top:calc(50vh - 12.5em);
  left:calc(50vw - 50%);
  border-radius: 6px;
  z-index: 103;
  background-color: #ffffff;
  padding: 0;
  border: 1px solid #bbb;
  border-radius: 4px;
  overflow: hidden;
}
.lb_box > a {
  position: absolute;
  top: 10px;
  right: 12px;
  font-size: 1em;
  color: #b4b4b4;
}
.lb_box > a:hover {
  color: #fab0b6;
  cursor: pointer;
}

.lb_title {
  width: 100%;
  font-size: 1em;
  padding: 12px 18px;
  background: #ebf5ea;
  color: #072;
}
.lb_field {
  padding:0px 15px;
  height: calc(100% - 6em);
  overflow: hidden;
}

.lb_field .btn.btn-movie {
  background-color: green;
}

.lb_save{
  width: 100%;
  height: 3em;
  padding: 6px 20px;
  background: #ebf5ea;
}
.lb_save button{
  float: right;
  padding:2px 10px;
}
a{
  text-decoration: none;
}
</style>
