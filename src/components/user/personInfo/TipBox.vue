<template>
  <div>
    <div class="lb_b">
    </div>
    <div class='lb_form '>
      <div class='lb_box col-xs-offset-2 col-sm-offset-4 col-md-offset-4 col-lg-offset-5 col-xs-8 col-sm-5 col-md-4 col-lg-3 none_padding'>
        <a class="j_close_dialog dui-dialog-close" @click="close">X</a>
        <div class="back"></div>
        <div class='lb_content'>
          {{text}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Data from "@/components/default/data.js";

let email = ["新邮箱为空", "新邮箱格式有误", "新旧邮箱相同"];
export default {
  model: {
    prop: "tipBoxShow",
    event: "tipBoxShow"
  },
  props: {
    text: {
      type: String
    },
    tipBoxShow:{
      type:Boolean
    }
  },
  methods: {
    close: function() {
      this.$emit("tipBoxShow", false);
    }
  },
  watch: {
    tipBoxShow:close
  }
};
</script>
<style scoped>
.lb_b,
.lb_form {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 100;
}
.lb_b {
  background: #1f1f1f;
  opacity: 0.4;
  z-index: 51;
}

.lb_form {
  height: 100%;
  overflow: hidden;
}
.back {
  background: linear-gradient(to bottom, #eee, rgba(255, 255, 255, 1));
  height: 3em;
}
.lb_box {
  text-align: center;
  font-size: 1.2em;
  height: 10em;
  margin-top: calc((100vh - 10em) / 2);
  /* margin-bottom: calc((100vh - 422px) / 2); */
  background: #fff;
  border: 1px solid #bbb;
  border-radius: 5px;
}
.lb_box > a {
  position: absolute;
  top: 0.5em;
  right: 1.1em;
  font-size: 1.2em;
  color: #b4b4b4;
  padding: 2px 7px;
  cursor: pointer;
}
.lb_box > a:hover {
  color: #fab0b6;
}
.lb_content {
  height: 70%;
  width: 80%;
  margin: 8% auto;
}
.lb_title {
  width: 100%;
  text-align: center;
  text-align: center;
  font-size: 1.5em;
  font-weight: normal;
  margin-bottom: 30px;
  line-height: 1em;
}
.lb_field {
  height: 3em;
  margin-top: 10px;
  /* overflow: hidden; */
}

.lb_field input[type="text"],
.lb_field input[type="password"] {
  border: 1px solid #ccc;
  width: 100%;
  height: 2.5em;
  padding: 12px 40px 12px 10px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 3px;
  -webkit-box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.06);
  -moz-box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.06);
  box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.06);
}

.lb_field .btn.btn-movie {
  background-color: green;
}
.lb_field .btn {
  margin-top: 5px;
  border: none;
  width: 100%;
  height: 2.5em;
  border-radius: 3px;
  background-color: #00ae1c;
  color: white;
  cursor: pointer;
}

.warn {
  color: red;
  padding-left: 1em;
}
</style>
