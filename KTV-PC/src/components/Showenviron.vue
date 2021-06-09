<template>
  <div class="show-environ">
    <my-head></my-head>
    <my-subnav></my-subnav>
    <my-welfare></my-welfare>

    <div class="w1200">
      <div class="where-you">
        <router-link to="/index">首页</router-link>
        <span class="arrow">>></span>
        <a href="javascript:;"> 环境展示</a>
      </div>
      <div class="btn">
        <router-link to="/showenviron">夜场环境</router-link>
      </div>
      <div class="show-style">
        <ul class="clearfix">
          <li v-for="val in roomData" :key="val.id" @click="turnDetail(val.id)">
            <div class="pic"><img :src="baseURL + val.image" alt=""></div>
            <div class="text">{{val.title}}</div>
          </li>
        </ul>
        <div class="page-box">
          <div class="total">共有<span class="num">1</span>页</div>
          <div class="first-page">首页</div>
          <div class="previous">上一页</div>
          <ul class="page">
            <li>1</li>
          </ul>
          <div class="next">下一页</div>
          <div class="last-page">尾页</div>
        </div>
      </div>
    </div>

    <my-foot></my-foot>
  </div>
</template>
<style scoped>
@import '../assets/css/index.css';
</style>
<script>
import Head from '../views/Header.vue'
import Foot from '../views/Footer.vue'
import Subnav from '../views/Contactnav.vue'
import Welfare from '../views/Welfare.vue'
export default {
  data () {
    return {
      roomData: []
    }
  },
  methods: {
    turnDetail (id) {
      this.$router.push('/environdetail/' + id)
    }
  },
  mounted () {
    this.$http.get('ambient/list').then(res => {
      this.roomData = res
      this.roomData = this.roomData.filter((val, index) => index <= 3)
    })
  },
  components: {
    myHead: Head,
    myFoot: Foot,
    mySubnav: Subnav,
    myWelfare: Welfare
  }
}
</script>
