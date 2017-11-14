<template>
  <div class='right_frame'>
    <h3>
      基本资料
    </h3>
    <div class='info'>
      <div>
        <span>性别：</span>
        <input type='radio' value='男' />
        <span>男</span>
        <input type='radio' value='女' />
        <span>女</span>
      </div>
      <div>
        <span>生日：</span>
        <select @change="select" v-model="birthday.year">
          <option value=''>请选择</option>
          <option :value='getYear(i)' v-for='i in date.yearRange' :key='i'>{{getYear(i)}}</option>
        </select>
        <select @change="select" v-model="birthday.month">
          <option value='' @click="selectMonth(0)">请选择</option>
          <option :value='i' v-for='i in date.month' :key='i' @click="selectMonth(i)">{{i}}</option>
        </select>
        <select v-model="birthday.day">
          <option value=''>请选择</option>
          <option :value='i' v-for='i in date.day' :key='i'>{{i}}</option>
        </select>
      </div>
      <div>
        <span>年龄：</span>
        <span>{{age}}</span>
      </div>
      <div>
        <span>生肖：</span>
        <span>{{animal}}</span>
      </div>
      <div>
        <span>星座：</span>
        <span>{{star}}</span>
      </div>
      <div>
        <span>个性签名：</span>
        <textarea></textarea>
      </div>
    </div>
    <div>
    </div>
  </div>
</template>
<script>
import Paths from "@/config/path.js";

let animals = ["子鼠", "丑牛", "寅虎", "卯兔", "辰龙", "午马", "未羊", "申猴", "酉鸡", "亥猪"];
let stars = [
  "摩羯座",
  "水瓶座",
  "双鱼座",
  "白羊座",
  "金牛座",
  "双子座",
  "巨蟹座",
  "狮子座",
  "处女座",
  "天秤座",
  "天蝎座",
  "射手座"
];
let starsDay = [20, 19, 21, 20, 21, 22, 23, 23, 23, 24, 23, 22];
export default {
  data() {
    return {
      modfiyPasswordPath: Paths.userSecuritys.userPassword,
      user: null,
      util: this.$root,
      date: {
        year: new Date().getFullYear() > 1990 ? new Date().getFullYear() : 2017,
        yearRange: new Date().getFullYear() - 1990 + 1,
        month: 12,
        day: 30
      },
      birthday: {
        year: "",
        month: "",
        day: ""
      },
      age: 1,
      animal: "",
      star: ""
    };
  },
  methods: {
    getYear: function(i) {
      return this.date.year - i + 1;
    },
    select: function() {
      let month = this.birthday.month;
      if (month == "") {
        this.birthday.day = this.birthday.day > 30 ? 30 : this.birthday.day;
        this.date.day = 30;
        return;
      }

      if (month != 2) {
        let day = 31;
        if (this.isMinMoth(month)) day = 30;
        this.birthday.day = this.birthday.day > day ? day : this.birthday.day;
        this.date.day = day;
        return;
      }

      let year = this.birthday.year;
      if (year == "" || !this.isLeapYear(year)) {
        this.birthday.day = this.birthday.day > 28 ? 28 : this.birthday.day;
        this.date.day = 28;
      } else {
        this.birthday.day = this.birthday.day > 29 ? 29 : this.birthday.day;
        this.date.day = 29;
      }
    },
    isLeapYear: function(year) {
      return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
    },
    isMinMoth: function(m) {
      return m == 4 || m == 6 || m == 9 || m == 11;
    },
    getAge() {
      let y = this.birthday.year == "" ? this.date.year : this.birthday.year;
      return this.date.year - y + 1;
    },
    getAnimal() {
      let y = this.birthday.year == "" ? this.date.year : this.birthday.year;

      return animals[y - 1990];
    },
    getStar: function() {
      let m =
        this.birthday.month == "" ? new Date().getMonth() : this.birthday.month;
      let day =
        this.birthday.day == "" ? new Date().getDay() : this.birthday.day;
      let index = m - 1;
      if (day >= starsDay[m - 1]) index = (index + 1) % 12;
      return stars[index];
    }
  },
  created() {
    this.user = this.util.getUser();
  }
};
</script>
<style lang="scss" scoped>
@import "./default.scss";
.right_frame > h3 {
  font-size: 1.5em;
  color: #333;
}
.info {
  border: 1px solid #d8d8d8;
  box-shadow: 0 0 5px #d8d8d8;
  height: 300px;
}
</style>
