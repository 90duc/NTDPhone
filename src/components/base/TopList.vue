<template>
    <div class="recom">
        <h2>热门推荐
            <span style="float:right;">
                <router-link to="/topList">更多榜单»</router-link>
            </span>
        </h2>
        <div id="billboard">

            <div v-for="phone in phones" :key="phone.id" class="tag">
                <div >
                    <span class="order">{{phone.id}}</span>
                    <span class="title">
                        <router-link :to="'phoneDetail/'+phone.id">{{phone.name}}</router-link>
                    </span>
                </div>
                <div class="detail">
                    <p class="star">
                        <span class="allstar35" :style="'background-position-y:'+phone.position+'px'"></span>
                        <span class="subject-rate">{{phone.rank}}</span>
                        <span>（
                            <span>{{phone.totalNumber}}</span>人评价）</span>
                    </p>
                </div>

            </div>

        </div>
    </div>
</template>

<<script>

export default {
  data () {
      return {
          phones:[]
      }
  },
  methods:{
      cumputeStar:function (rank) {
        let rate=10;
        if(Math.floor(rank)%2==0)
          rate=Math.ceil(rank);
        else
          rate=Math.floor(rank);
         return -11*(10-rate);
      }
  },
  created () {
      for(var i=1;i<11;i++){
          let rate=10-i*0.4;
          let p={id:i,name:"手机"+i,rank:rate.toFixed(1),totalNumber:'1347',star:'35'};
          p.position=this.cumputeStar(rate);
          this.phones.push(p);
      }
     
  }
}
</script>

<style scoped>


.recom h2 {
    padding-bottom: 10px;
    color: #111;
    padding-bottom: 10px;
    border-bottom: 1px solid #eaeaea;
    font: 16px Arial, Helvetica, sans-serif;

}

.recom h2 span {
    font-size: 13px;
    margin-left: 12px;
}

.recom a {
    color: #37a;
}

.recom a:hover {
    color: #FFFFFF;
    text-decoration: none;
    background: #37a;
}

#billboard .order {
    width: 20px;
    font-size: 9px;
    text-align: center;
}

#billboard .title {
    width: 100%;
}

#billboard .tag {
    padding: 9px 0px 9px 12px;
    border-bottom: 1px solid #eaeaea;
}
#billboard .tag .detail{
    display:none;
    padding:5px 5px 0px 5px;
}
#billboard .tag:hover .detail{
    display: block;
}

#billboard .tag p {
    margin: 0;
    line-height: 22px;
    width: 280px;
    font-size: 13px;
}

.allstar35 {
    background: url(../../assets/star_rate.png) no-repeat;
    width: 55px;
    height: 11px;
    display: inline-block;
}

span.subject-rate {
    color: #e09015;
}
</style>
