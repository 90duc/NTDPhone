<template>
  <div class='right_frame'>
    <h3>
      基本资料
    </h3>
    <div class='info'>
      <div>
        <label>性别：</label>
        <input type='radio' name='sex' v-model="userInfo.sex" value='男' />
        <span>男</span>
        <input type='radio' name='sex' v-model="userInfo.sex" value='女' />
        <span>女</span>
      </div>
      <div>
        <label>生日：</label>
        <select @change="select" v-model="userInfo.birthday.year">
          <option value=''>请选年</option>
          <option :value='getYear(i)' v-for='i in date.yearRange' :key='i'>{{getYear(i)}}</option>
        </select>
        <select @change="select" v-model="userInfo.birthday.month">
          <option value='' @click="selectMonth(0)">请选月</option>
          <option :value='i' v-for='i in date.month' :key='i' @click="selectMonth(i)">{{i}}</option>
        </select>
        <select v-model="userInfo.birthday.day">
          <option value=''>请选日</option>
          <option :value='i' v-for='i in date.day' :key='i'>{{i}}</option>
        </select>
      </div>
      <div v-if="hasBirthday">
        <div>
          <label>年龄：</label>
          <span>{{userInfo.age}}</span>
        </div>
        <div>
          <label>生肖：</label>
          <span>{{userInfo.animal}}</span>
        </div>
        <div>
          <label>星座：</label>
          <span>{{userInfo.star}}</span>
        </div>
      </div>
      <div>
        <label>个性签名：</label>
        <textarea v-model="userInfo.info"></textarea>
      </div>
      <tip-box v-if='tipBoxShow' v-model="tipBoxShow" :text='text'></tip-box>
      <div class='btn_bar'>
        <button class='cbtn' @click="save">保存修改</button>
      </div>
    </div>
    <div>
    </div>
  </div>
</template>
<script>
import TipBox from "./TipBox.vue";
import Paths from "@/config/path.js";
import DateInfo from "./DateInfo.js";

export default {
  components: {
    TipBox
  },
  data() {
    return {
      modfiyPasswordPath: Paths.userSecuritys.userPassword,
      util: this.$root,
      date: {
        year: new Date().getFullYear() > 1990 ? new Date().getFullYear() : 2017,
        yearRange: new Date().getFullYear() - 1990 + 1,
        month: 12,
        day: 30
      },
      hasBirthday: false,
      tipBoxShow: false,
      text: "",
      userInfo: {
        birthday: {
          year: "",
          month: "",
          day: ""
        },
        age: 1,
        animal: "",
        star: "",
        sex: "",
        info: ""
      }
    };
  },
  methods: {
    save: function() {
      if (!this.check()) {
        return;
      }

      let url = this.$config.dataURL + this.$URL.person.modifyInfo;
      let that = this;

      let b = this.userInfo.birthday;
      let birthday = null;
      if (b.year) {
        birthday = b.year + "-" + b.month + "-" + b.day;
      }
      let sex = this.userInfo.sex;
      let info = this.userInfo.info;

      this.$post(url, { birthday, sex, info }, function(res) {
        let data = res.data;
        if (data.status) {
          that.initOther();
          that.showBox("修改成功");
        } else {
          that.showBox(data.msg);
        }
      });
    },
    showBox: function(text) {
      this.text = text;
      this.tipBoxShow = true;
    },
    check: function() {
      let birthday = this.userInfo.birthday;
      let month = birthday.month;
      let year = birthday.year;
      let day = birthday.day;
      if (year == "" && month == "" && day == "") {
        this.hasBirthday = false;
        return true;
      }

      if (year != "" && month != "" && day != "") {
        this.hasBirthday = true;
        return true;
      }

      this.showBox("请选择正确的日期");
      return false;
    },
    getYear: function(i) {
      return this.date.year - i + 1;
    },
    select: function() {
      let birthday = this.userInfo.birthday;
      let month = birthday.month;
      let year = birthday.year;
      let day = 31;
      if (month == "" || DateInfo.isMinMonth(month)) {
        day = 30;
      } else if (month == 2) {
        if (year == "" || !DateInfo.isLeapYear(year)) {
          day = 28;
        } else {
          day = 29;
        }
      }
      birthday.day = birthday.day > day ? day : birthday.day;
      this.date.day = day;
    },

    getAge: function() {
      return DateInfo.getAge(this.userInfo.birthday.year);
    },
    getAnimal: function() {
      return DateInfo.getAnimal(this.userInfo.birthday.year);
    },
    getStar: function() {
      return DateInfo.getStar(
        this.userInfo.birthday.month,
        this.userInfo.birthday.day
      );
    },
    getData: function() {
      let url = this.$config.dataURL + this.$URL.person.userInfo;
      let that = this;
      this.$post(url, {}, function(res) {
        let data = res.data;
        that.initData(data);
      });
    },
    initData: function(data) {
      if (!data) return;
      if (data.birthday) {
        let d = new Date(data.birthday);
        let year = d.getFullYear();
        let month = d.getMonth() + 1;
        let day = d.getDate();
        this.userInfo.birthday = { year, month, day };
        this.hasBirthday = true;
      } else {
        this.hasBirthday = false;
      }
      this.userInfo.sex = data.sex;
      this.userInfo.info = data.info;
      this.initOther();
    },
    initOther: function() {
      if (!this.hasBirthday) return;
      this.userInfo.age = this.getAge();
      this.userInfo.animal = this.getAnimal();
      this.userInfo.star = this.getStar();
    }
  },
  created() {
    this.getData();
  }
};
</script>
<style lang="scss" scoped>
@import "./default.scss";
@import "./info.scss";

textarea {
  width: 100%;
  max-width: 22em;
  height: 5em;
  border: 1px #c8c8c8 solid;
  border-radius: 3px;
  padding: 2px 3px;
  resize: none;
}
</style>
