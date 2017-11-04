<template>
  <div class="footer">
      CopyRight © {{time}}-{{time+1}} {{name}},All Rights Reserved. 版权所有 {{owner}}
  </div>
</template>
<style scoped>
.footer{
      width: 100%;
      margin-top:20px;
      padding: 30px 30px;
      background-color: #f0f0f0;
      text-align: center;
      color: #999;
      font-size: 12px;
      font-family: Arial,sans-serif;
}
</style>
<script>
export default {
  name:'footer',
  data(){
    return{
       name:'NTD Phone',
       time:2017,
       owner:'潘小华'

    };
  }
}
</script>

