<template>
  <div class='right_frame'>
    <h3>修改密码</h3>
    <div>建议使用字母、数字与标点的组合，可以大幅提升帐号安全</div>
    <password-box v-if='passwordBoxShow' v-model='passwordBoxShow'></password-box>
    <button class='cbtn' @click='modify'>修改密码</button>
    <div class='bdf'>
      <h3>无法通过密保验证？</h3>
      <p>您可以进行
        <a>帐号申诉</a>，客服在核实您的身份后可为您重置密码</p>
    </div>
  </div>
</template>
<script>
import PasswordBox from "@/components/user/security/PasswordBox.vue";

export default {
  components: {
    PasswordBox
  },
  data() {
    return { passwordBoxShow: false };
  },
  methods: {
    modify:function () {
      this.passwordBoxShow = true;
    }
  },
  created() {
    //this.passwordBoxShow = true;
  }
};
</script>
<style lang="scss" scoped>
@import "./default.scss";
</style>
