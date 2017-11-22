<template>
  <div class='right_frame'>
    <h3>
      详细资料
    </h3>
    <div class='info'>
      <div>
        <label>血型：</label>
        <select v-model="userInfo.blood">
          <option value=''>请选择</option>
          <option :value='i' v-for='i in dataInfo.bloods' :key='i'>{{i}}</option>
        </select>
      </div>
      <div>
        <label>体型：</label>
        <select v-model="userInfo.body">
          <option value=''>请选择</option>
          <option :value='i' v-for='i in dataInfo.bodys' :key='i'>{{i}}</option>
        </select>
      </div>
      <div>
        <label>身高：</label>
        <input type="text" v-model="userInfo.height" />
        <span>cm</span>
      </div>
      <div>
        <label>婚姻状况：</label>
        <select v-model="userInfo.marriage">
          <option value=''>请选择</option>
          <option :value='i' v-for='i in dataInfo.marriages' :key='i'>{{i}}</option>
        </select>
      </div>
      <div>
        <label>教育程度：</label>
        <select v-model="userInfo.education">
          <option value=''>请选择</option>
          <option :value='i' v-for='i in dataInfo.educations' :key='i'>{{i}}</option>
        </select>
      </div>
      <div>
        <label>毕业院校：</label>
        <input type="text" v-model="userInfo.school" />
      </div>
      <div>
        <label>职业：</label>
        <select v-model="userInfo.occupation">
          <option value=''>请选择</option>
          <option :value='i' v-for='i in dataInfo.occupations' :key='i'>{{i}}</option>
        </select>
      </div>
      <div>
        <label>收入水平：</label>
        <select v-model="userInfo.income">
          <option value=''>请选择</option>
          <option :value='i' v-for='i in dataInfo.incomes' :key='i'>{{i}}</option>
        </select>
      </div>
      <div>
        <label>所在地：</label>
        <select @change='selectProvince' v-model="userInfo.province">
          <option value=''>请选择</option>
          <option :value='p.pro' v-for='p in dataInfo.provinces' :key='p.pro'>{{p.pro}}</option>
        </select>
        <select v-model="userInfo.city">
          <option value=''>请选择</option>
          <option :value='i' v-for='i in dataInfo.citys' :key='i'>{{i}}</option>
        </select>
      </div>
      <div>
        <label>通信地址：</label>
        <input type="text" v-model="userInfo.address" />
      </div>
      <div>
        <label>QQ：</label>
        <input type="text" v-model="userInfo.qq" />
      </div>
      <div>
        <label>微博：</label>
        <input type="text" v-model="userInfo.microblog" />
      </div>
      <div>
        <label>手机号：</label>
        <input type="text" v-model="userInfo.phone" />
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
import UserDetailInfo from "./UserDetailInfo.js";

export default {
  components: {
    TipBox
  },
  data() {
    return {
      modfiyPasswordPath: Paths.userSecuritys.userPassword,
      util: this.$root,
      tipBoxShow: false,
      text: "",
      userInfo: {
        blood: "",
        body: "",
        height: "",
        marriage: "",
        education: "",
        school: "",
        occupation: "",
        income: "",
        province: "",
        city: "",
        address: "",
        qq: "",
        microblog: "",
        phone: ""
      },
      dataInfo: UserDetailInfo.dataInfo
    };
  },
  methods: {
    save: function() {
      if(!this.check()) return;
      let url = this.$config.dataURL + this.$URL.person.modifyDetail;
      let that = this;

      this.$post(url, this.userInfo, function(res) {
        let data = res.data;
        if (data.status) {
          that.showBox("修改成功");
        } else {
          that.showBox(data.msg);
        }
      });
    },
    check: function() {
      if (!this.checkHeight(this.userInfo.height)) {
        this.showBox("请填入正确的身高");
        return false;
      }

      if (!this.checkPhone(this.userInfo.phone)) {
         this.showBox("请填入正确的手机号");
          return false;
      }
      return true;
    },
    checkHeight: function(h) {
      if (h == "") return true;
      let regx = /^([12][0-9][0-9]|[4-9][0-9])(.[0-9]{1,2})?$/;
      return regx.test(h);
    },
    checkPhone: function(phone) {
       if (phone == "") return true;
      let filter = /^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8}$/;
      return filter.test(phone);
    },
    showBox: function(text) {
      this.text = text;
      this.tipBoxShow = true;
    },
    selectProvince: function() {
      let citys = [];
      let province = this.userInfo.province;
      if (province != "") {
        for (var z in this.dataInfo.provinces) {
          if (province == this.dataInfo.provinces[z].pro) {
            let p = this.dataInfo.provinces[z];
            for (var i in p.cities) {
              citys.push(p.cities[i]);
            }
            break;
          }
        }
      }
      this.dataInfo.citys = citys;
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
      this.userInfo.province = data.province;
      this.selectProvince();
      for (var i in this.userInfo) {
        if (data[i] != null) this.userInfo[i] = data[i];
      }
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

input {
  padding: 7px 5px;
  line-height: normal;
  border: 1px solid rgb(169, 169, 169);

  border-radius: 3px;
}
</style>
