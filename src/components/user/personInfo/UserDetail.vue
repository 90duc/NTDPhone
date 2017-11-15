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
          <option :value='p' v-for='p in dataInfo.provinces' :key='p.pro'>{{p.pro}}</option>
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
        <input type="text" v-model="userInfo.microBlog" />
      </div>
      <div>
        <label>手机号：</label>
        <input type="text" v-model="userInfo.phone" />
      </div>
      <div class='btn_bar'>
        <button class='cbtn' @click="save">保存修改</button>
      </div>
    </div>
    <div>
    </div>
  </div>
</template>
<script>
import Paths from "@/config/path.js";
import UserDetailInfo from "./UserDetailInfo.js";

export default {
  data() {
    return {
      modfiyPasswordPath: Paths.userSecuritys.userPassword,
      user: null,
      util: this.$root,
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
        microBlog: "",
        phone: ""
      },
      dataInfo: UserDetailInfo.dataInfo
    };
  },
  methods: {
    save: function() {
      alert(UserDetailInfo.areaData[0].pro);
    },
    selectProvince: function() {
      let citys = [];
      let province=this.userInfo.province;
      if (province != "") {
        for(var i in province.cities){
          citys.push(province.cities[i]);
        }
      }
      this.dataInfo.citys=citys;
    }
  },
  created() {
    this.user = this.util.getUser();
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
