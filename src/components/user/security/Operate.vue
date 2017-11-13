<template>
  <div class='right_frame'>
    <h3>敏感操作 </h3>
    <div class='info'>
      <span>敏感操作是指修改密码、设置/修改密保工具、帐号冻结/解冻等可能影响到您帐号安全的操作； 如确定非您本人操作，建议您</span>
      <a>修改密码</a>。
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
export default {
  data() {
    return {
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

.table2 {
  border-left: 1px solid #e0e0e0;
  border-right: 1px solid #e0e0e0;
  margin-top: 2em;
}
.table2 th,
.table2 td {
  border-bottom: 1px solid #e0e0e0;
  text-align: center;
  padding: 2px;
}
.table2 td {
  word-break: break-all;
  word-wrap: break-word;
}

.table2 th {
  background: #f0f0f0;
  border-top: 1px solid #e0e0e0;
  font-size: 14px;
  height: 34px;
}
</style>
