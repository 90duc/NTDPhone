<template>
  <div>
    <div class="container text_left ">
      <div class='row '>
        <div class='col-xs-12 col-sm-6 col-md-4 col-lg-4 col-md-offset-1 col-lg-offset-1 none_padding'>
          <router-link :to='homePath'>
            <img :src="logo">
          </router-link>
          <div class='title'>
            <h4>NTD Phone登录</h4>
          </div>
        </div>
      </div>
      <div class='row top_padding'>
        <div class='col-xs-12 col-sm-6 col-md-5 col-lg-4 col-md-offset-1 col-lg-offset-1 '>
          <div class='row none_margin top_padding'>
            <label class='label_n'>账号</label>
            <input type="text" class="form-control " id="account" placeholder="请输入账号" />
          </div>
          <div class='row none_margin top_padding'>
            <label class='label_n'>密码</label>
            <input type="password" class="form-control " id="password" placeholder="请输入密码" />
          </div>
          <div class='row none_margin  top_padding'>
            <button type="button" class="btn btn-success col-xs-offset-1 col-sm-offset-2 col-md-offset-2 col-lg-offset-2 col-xs-10 col-sm-8 col-md-8 col-lg-8">提交</button>
          </div>
          <div class='row none_margin  top_padding'>
            <router-link to=''>
              <span class='col-xs-offset-1 col-sm-offset-2 col-md-offset-2 col-lg-offset-2 col-xs-5 col-sm-4 col-md-3 col-lg-3 none_padding'>忘记密码</span>
            </router-link>
            <router-link to=''>
              <span class='col-xs-5 col-sm-4 col-md-5 col-lg-5 none_padding' style='text-align:right'>注册</span>
            </router-link>
          </div>
        </div>
      </div>

    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
import myFooter from "@/components/footer/Footer.vue";
import logo from "@/assets/logo_account.png";
import Paths from "@/config/path.js";
export default {
  components: {
    myFooter
  },
  data() {
    return {
      logo: logo,
      homePath: Paths.home
    };
  }
};
</script>

<style scoped>
.none_padding img{
  width:100%;
}
.title{
  width:100%;
  text-align: center;
}
.container {
  min-height: calc(100vh - 11.4em);
}
.top_padding {
  padding-top: 1.2em;
}
.label_n {
  width: 2.5em;
}
.form-control {
  display: inline-block;
  width: calc(100% - 3em);
}
</style>
