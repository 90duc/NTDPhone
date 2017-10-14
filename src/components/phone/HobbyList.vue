<template>
  <div class="recom">
    <h2>
      <div class="float_left">最近热门手机</div>
      <div class="title_list">
        <span :class="i==title_index?'fouse_font':''" v-for="(title,i) in title_list" :key="title">{{title}}</span>
      </div>
      <div class="more_list">
        <router-link to="/hobbyList">更多»</router-link>
      </div>
      <div class="clearfix"></div>
    </h2>
    <div id="billboard">
      dfssfd

    </div>
  </div>
</template>
<script>
let title = ['3G', '4G', '2G']
export default {
  data() {
    return {
      title_list: title,
      title_index: 0
    };
  }
}
</script>
<style scoped>
.recom {
  text-align: left;
}

.recom h2 {
  padding-bottom: 10px;
  color: #111;
  padding-bottom: 10px;
  border-bottom: 1px solid #eaeaea;
  font: 16px Arial, Helvetica, sans-serif;
}

.recom h2 span {
  font-size: 12px;
  margin-left: 12px;
  color: #9B9B9B;
}

.recom a {
  color: #37a;
}

.title_list {
  width: calc(100% - 120px);
  margin-left: 20px;
  margin-right: -41px;
  vertical-align: bottom;
  line-height: 20px;
  overflow: hidden;
}

.float_left,
.title_list {
  float: left;
}

.recom h2 span.fouse_font {
  color: black;
}

.recom a:hover {
  color: #FFFFFF;
  text-decoration: none;
  background: #37a;
}

.more_list {
  float: right;
}

.clearfix {
  clear: both;
}
</style>
