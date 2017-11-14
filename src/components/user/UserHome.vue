<template>
  <div>
    <div class='aside col-xs-5 col-sm-4 col-md-3 col-lg-3 none_padding'>
      <div class='logo'>
        <img :src='user.image' class="col-xs-12 col-sm-6 col-md-6 col-lg-6 ">
        <div class="col-xs-12 col-sm-5 col-md-5 col-lg-5 info">
          <h2 class='name'>{{user.name}}</h2>
          <router-link :to='nicknamePath'>
            <div>修改昵称</div>
          </router-link>
          <router-link :to='userInfoPath'>
            <div>修改个人信息</div>
          </router-link>
        </div>
        <div class='clearfix'></div>
      </div>
      <div class='operate'>
        <h2>常用操作</h2>
        <div class='row none_margin'>
          <h3>
            <span class='icon'></span>登录密码</h3>
          <div>
            <div class='col-xs-offset-1 col-xs-9 none_padding text'>定期修改密码，能提高帐号安全等级</div>
            <router-link :to="userPasswordPath">
              <div class='col-xs-2 none_padding modify'>修改</div>
            </router-link>
          </div>
        </div>
        <div class='row none_margin'>
          <h3>
            <span class='icon email'></span>登录邮箱</h3>
          <div>
            <div class='col-xs-offset-1 col-xs-9 none_padding text'>{{user.account}}</div>
            <router-link :to="userEmailPath">
              <div class='col-xs-2 none_padding modify'>修改</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class=' col-xs-7 col-sm-8 col-md-9 col-lg-9 right_info'>
      <div>
        <span>性 别：</span>
        <span>{{user.sex}}</span>
      </div>
      <div>
        <span>生 日：</span>
        <span>{{user.birthday}}</span>
      </div>
      <div>
        <span>年 龄：</span>
        <span>{{user.age}}</span>
      </div>
      <div>
        <span>生 肖：</span>
        <span>{{user.animal}}</span>
      </div>
      <div>
        <span>星 座：</span>
        <span>{{user.star}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import Paths from "@/config/path.js";

export default {
  data() {
    return {
      nicknamePath: Paths.userInfos.userNickname,
      userInfoPath:Paths.userInfos.userInfo,
      userEmailPath: Paths.userSecuritys.userEmail,
      userPasswordPath: Paths.userSecuritys.userPassword,
      user: null,
      util: this.$root
    };
  },
  created() {
    this.user = this.util.getUser();
  }
};
</script>
<style scoped>
.aside {
  border: 1px solid #ddd;
  background: #fcfcfc;
  min-height: calc(100vh - 15em);
  margin-top: 1.2em;
}
.logo {
  border-bottom: 1px solid #ddd;
  padding: 7% 5%;
}
.logo img {
  padding: 0px;
  height: 30vw;
  max-height: 10em;
  margin-right: 12px;
}
.info {
  padding: 0px;
}
@media (max-width: 768px) {
  .info {
    padding-left: 10px;
  }
}
.name {
  margin-top: 20px;
  font-weight: 400;
  color: #444;
  font-size: 1.2em;
  font-family: "Microsoft Yahei";
  overflow: hidden;
}
.info div {
  padding: 5px 0px;
}
a:hover {
  color: #1eb009;
}

.operate {
  padding: 7% 5% 25% 5%;
}
.operate > div {
  color: #999;
}
.operate h2 {
  margin-top: 10px;
  margin-bottom: 0px;
  font-size: 1.4em;
  font-weight: bold;
}
.operate h3 {
  font-size: 1.2em;
  font-weight: bold;
}

.icon {
  background: url(../../assets/uc-ico.png) no-repeat;
  width: 32px;
  height: 32px;
  display: inline-block;
  vertical-align: -10px;
}
.modify {
  text-align: right;
}

.text {
  word-wrap: break-word;
}
.email {
  background-position: 0 -32px;
}
.right_info {
  margin-top: 1.2em;
  padding: 0px 3%;
  color: #666;
  font-size: 1.2em;
}

.right_info > div {
  padding: 5px;
}
</style>
