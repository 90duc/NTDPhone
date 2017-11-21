<template>
  <div class='right_frame'>
    <h3>
      <span class='login_ico'></span>
      <span>您的帐号近期没有异常登录</span>
    </h3>
    <div class='info'>
      <span>由于您的宽带运营商会不定期调整网络，我们获取的IP所在地可能不准确，请您通过登录时间与产品判断是否为您本人操作；如确定非您本人登录，建议您</span>
      <router-link :to='modfiyPasswordPath'>修改密码</router-link>。
    </div>
    <div>
      <table class="table2" width="100%">
        <thead>
          <tr>
            <th>日期</th>
            <th>时间</th>
            <th>IP</th>
            <th>城市</th>
            <th>登录产品</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for='info in loginInfos' :key='info.date'>
            <td>{{info.date}}</td>
            <td>{{info.time}}</td>
            <td>{{info.ip}}</td>
            <td> {{info.city}}</td>
            <td>{{info.product}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import Paths from "@/config/path.js";

export default {
  data() {
    return {
      modfiyPasswordPath: Paths.userSecuritys.userPassword,
      user: null,
      util: this.$root,
      loginInfos: []
    };
  },
  methods: {
    initData: function(data) {
      for (var i in data) {
        let d = new Date(data[i].loginInfoPK.time);
        let date =
         d.getFullYear() + "年" +(d.getMonth()+1)  + "月" + d.getDate() + "日";
        let time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
        let p = {
          date: date,
          time: time,
          ip: data[i].ip,
          city: data[i].city,
          product: data[i].product
        };
        this.loginInfos.push(p);
      }
    },
    getData: function() {
      this.user = this.util.getUser();

      let that = this;
      let url = this.$config.dataURL + this.$URL.person.loginInfo;
      this.util.$post(url, {}, function(res) {
        let data = res.data;
        if (data.status) {
          that.initData(data.loginInfo);
        } else {
        }
      });
    }
  },
  created() {
    this.getData();
  }
};
</script>
<style lang="scss" scoped>
@import "./default.scss";
.login_ico {
  height: 32px;
  margin-right: 6px;
  vertical-align: -8px;
  display: inline-block;
  width: 32px;
  background: url(../../../assets/uc-ico.png) no-repeat -128px 0;
}

.right_frame > h3 {
  font-size: 1.4em;
  font-weight: bold;
  color: #666;
}
.info {
  line-height: 1.5em;
}
</style>
