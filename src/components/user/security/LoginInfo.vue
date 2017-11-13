<template>
  <div class='right_frame'>
    <h3>
      <span class='login_ico'></span<span>您的帐号近期没有异常登录</span>
    </h3>
    <div class='info'>
      <span>由于您的宽带运营商会不定期调整网络，我们获取的IP所在地可能不准确，请您通过登录时间与产品判断是否为您本人操作；如确定非您本人登录，建议您</span>
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
          <tr v-for='info in loginInfos' :key='info.date'>
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
      loginInfos:[]
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
    this.loginInfos.push(a);
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
