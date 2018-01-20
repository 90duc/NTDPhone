<template>
  <div class='lb_form'>
    <div class='col-xs-10 col-sm-6 col-md-5  col-lg-5' style="max-width:35em">
      <div class="lb_border"></div>
      <div class='lb_box'>
        <a class="j_close_dialog dui-dialog-close" @click="close">X</a>
        <div class="lb_title">想买{{phone.name+'/'+phone.cid.name}}</div>
        <div class="lb_field">
          <div class="score">
            <span>期望值：</span>
            <score-star v-model="score"></score-star>
          </div>
          <div>写下你的期盼：</div>
          <textarea :placeholder='phone.name' v-model="info"></textarea>
        </div>
        <div class="lb_save">
          <span style='color:red'>{{text}}</span>
          <button class="btn btn-success" @click="finish">保存</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ScoreStar from "@/components/base/ScoreStar.vue";

export default {
  components: {
    ScoreStar
  },
  model: {
    prop: "WantBoxShow",
    event: "WantBoxShow"
  },
  props: ["phone"],
  data() {
    return {
      util: this.$root,
      info: "",
      score: 0,
      text: ""
    };
  },
  methods: {
    check: function() {
      if (this.score == 0) {
        this.text = "给下您的评分";
        return false;
      }
      if (this.info == "") {
        this.text = "写下您的评论";
        return false;
      }

      return true;
    },
    close: function() {
      this.$emit("WantBoxShow", false);
    },
    finish: function() {
       if (!this.check()) return;

      let data = {
        pid: this.phone.pid,
        uid: this.util.getUser().uid,
        text: this.info,
        rank: this.score
      };
      let url = this.$config.dataURL + this.$URL.phone.saveWanterRemark;
      let that = this;
      this.$post(url, data, function(res) {
        let data = res.data;
        if (data.status) {
          that.close();
          that.util.$emit("remark-refresh");
        } else {
          that.text = data.msg;
        }
      });
    }
  }
};
</script>
<style scoped>
.lb_border {
  width: calc(100% + 14px);
  height: calc(25em + 14px);
  position: absolute;
  top: calc(50vh - 12.5em - 7px);
  left: calc(50vw - 50% - 7px);
  border-radius: 6px;
  background-color: #333;
  padding: 15px;
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
  top: calc(50vh - 12.5em);
  left: calc(50vw - 50%);
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
  padding: 10px 20px;
  height: calc(100% - 6em);
  overflow: hidden;
}
.lb_field .score {
  padding-bottom: 10px;
  vertical-align: center;
}
textarea {
  margin-top: 5px;
  width: 100%;
  height: 13em;
  resize: none;
  border-radius: 4px;
  padding: 2px 5px;
}

.lb_save {
  width: 100%;
  height: 3em;
  padding: 6px 20px;
  background: #ebf5ea;
}
.lb_save button {
  float: right;
  padding: 2px 10px;
}
a {
  text-decoration: none;
}
</style>
