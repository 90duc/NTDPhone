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
            <td> {{info.local}}</td>
            <td>{{info.operate}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import Paths from '@/config/path.js'

export default {
  data() {
    return {
      modfiyPasswordPath: Paths.userSecuritys.userPassword,
      user: null,
      util: this.$root,
      modifyInfos: []
    };
  },
  created() {
    this.user = this.util.getUser();
    let a = {
      date: "2017年07月25日",
      time: "09:17:39",
      ip: "183.63.*.*",
      local: "广东 广州",
      operate: "修改密码"
    };
    this.modifyInfos.push(a);
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
