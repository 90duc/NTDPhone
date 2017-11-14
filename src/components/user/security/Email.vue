<template>
  <div class='right_frame'>
    <h3>登录邮箱</h3>
    <div class='email'>
      <span class='green'>{{user.account}}</span>
      <a @click="modify">修改</a>
      <email-box v-if='emailBoxShow' v-model="emailBoxShow"></email-box>
    </div>
    <div class='info'>登录邮箱可以用来登录您的NTD Phone帐号与找回密码</div>
    <div class='bdf'>
      <h3>登录邮箱常见问题</h3>
      <ul>
        <li>登录邮箱以前验证过，但现在已经不再使用了，无法自助修改怎么办？</li>
        <li>登录邮箱无法验证时，怎样能修改登录邮箱？</li>
        <li>我有一个邮箱已经注册了其他帐号，怎样能通过邮箱找回本帐号的密码？</li>
      </ul>
    </div>
  </div>
</template>
<script>
import EmailBox from "@/components/user/security/EmailBox.vue";

export default {
  components: {
    EmailBox
  },
  data() {
    return {
      user: null,
      util: this.$root,
      emailBoxShow:false
    };
  },
  methods: {
    modify:function(){
      this.emailBoxShow=true;
    }
  },
  created() {
    //this.emailBoxShow=true;
    this.user = this.util.getUser();
  }
};
</script>
<style lang="scss" scoped>
@import "./default.scss";

.info {
  padding-bottom: 2em;
}
.green {
  color: #4bba1e;
  font-size: 0.9em;
  margin-right: 15px;
  word-wrap: break-word;
}
.email {
  padding: 10px 0px;
}
@media (min-width: 600px) {
  .green {
    font-size: 1.5em;
  }
}
ul {
  margin-left: 1.5em;
}
li {
  padding-top: 1em;
}
</style>
