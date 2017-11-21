<template>
  <div class='right_frame'>
    <h3>敏感操作 </h3>
    <div class='info'>
      <span>敏感操作是指修改密码、设置/修改密保工具、帐号冻结/解冻等可能影响到您帐号安全的操作； 如确定非您本人操作，建议您</span>
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
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for='info in modifyInfos' :key='info.date'>
            <td>{{info.date}}</td>
            <td>{{info.time}}</td>
            <td>{{info.ip}}</td>
            <td> {{info.city}}</td>
            <td>{{info.operate}}</td>
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
      modifyInfos: []
    };
  },
  methods: {
    initData: function(data) {
      for (var i in data) {
        let d = new Date(data[i].sensitiveOperationPK.time);
        let date =
          d.getFullYear() + "年" +(d.getMonth()+1)  + "月" + d.getDate() + "日";
        let time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
        let p = {
          date: date,
          time: time,
          ip: data[i].ip,
          city: data[i].city,
          operate: data[i].operation
        };
        this.modifyInfos.push(p);
      }
    },
    getData: function() {
      this.user = this.util.getUser();

      let that = this;
      let url = this.$config.dataURL + this.$URL.person.sensitiveOperation;
      this.util.$post(url, {}, function(res) {
        let data = res.data;
        if (data.status) {
          that.initData(data.operate);
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

.right_frame > h3 {
  font-size: 1.4em;
  font-weight: bold;
  color: #666;
}
.info {
  line-height: 1.5em;
}
</style>
