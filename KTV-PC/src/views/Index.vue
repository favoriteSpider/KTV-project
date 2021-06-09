<template>
  <div class="index">
    <my-head></my-head>
    <my-subnav></my-subnav>
    <!-- 固定背景 开始 -->
    <div class="fix-bg"></div>
    <!-- 固定背景 结束 -->

    <!-- 福利 开始 -->
    <div class="welfare">
      <img src="../assets/img/image-10.jpg" class="img-bg">
      <div class="text">
        <p>全场所有啤酒均可享受买二送一，还有更多豪礼等着你!</p>
        <p>当晚本包间消费满6666以上，当晚可赠送豪华名宿酒店一套，限当天使用。</p>
        <div class="what-room">小包低消1080元 中包低消1280 大包低消1380 豪包低消2680</div>
      </div>
      <img src="../assets/img/patrick.png" class="code">
      <div class="telphone">T: 13688143752</div>
    </div>
    <!-- 福利 结束 -->

    <!-- 环境 开始 -->
    <div class="environ">
      <div class="w1200">
        <h2>ENVIRONMENTAL DISPLAY</h2>
        <div class="text">环境/AMBIENT</div>
        <ul class="clearfix">
          <li v-for="val in picArr" :key="val.id">
            <div class="pic"><img :src="baseURL + val.image" alt=""></div>
            <h3>{{val.title}}</h3>
            <div class="contact-who">联系人: <span>{{val.contacts}}</span></div>
            <div class="telphone">手机: <span>{{val.phone}}</span>（微信同号）</div>
            <div class="address">地址: <span>{{val.address}}</span></div>
            <div class="deep clearfix">
              <div class="fl">
                <img src="../assets/img/7936683_1538965745.png" class="icon1"> : 夜场模特
              </div>
              <div class="fr">
                <img src="../assets/img/7936704_1538965778.png" class="icon2"> : <span>{{val.frequency}}</span>人
              </div>
            </div>
          </li>
        </ul>
        <div class="more">查看更多</div>
      </div>
    </div>
    <!-- 环境 结束 -->

    <!-- 关于 开始 -->
    <div class="about w1200">
      <div class="title">关于/ABOUT</div>
      <h2>锦缘国际夜总会</h2>
      <div class="text">成都夜总会，成都夜场，成都酒吧各种模特佳丽【13688143752】，设备齐全，装修高端，资源丰富，生意每天开到爆，欢迎随时预定包厢</div>
      <div class="detail">了解详细</div>
    </div>
    <!-- 关于 结束 -->

    <!-- 模特 开始 -->
    <div class="model">
      <div class="w1200">
        <h2>高端KTV夜总会模特</h2>
        <ul class="picture clearfix">
          <li v-for="items in modelData" :key="items.id">
            <img :src="baseURL + items.image" alt="">
            <div class="where-model">{{items.title}}</div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 模特 结束 -->

    <!-- 新闻 开始 -->
    <div class="news">
      <div class="w1200">
        <h1>新闻咨询</h1>
        <div class="title">T E A C H E R</div>
        <div class="content clearfix">
          <div class="fl big-pic">
            <img src="../assets/img/image-110.jpeg" alt="">
          </div>
          <ul class="fl">
            <li class="clearfix" v-for="val in newsData" :key="val.id">
              <div class="head-pic fl">
                <img :src="baseURL + val.image" alt="">
              </div>
              <div class="text fl">
                <h6>{{val.title}}</h6>
                <p>{{val.content}}</p>
              </div>
              <div class="time fr">{{val.time}}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 新闻 结束 -->
    <my-foot></my-foot>
  </div>
</template>
<style scoped>
@import "../assets/css/index.css";
</style>
<script>
import Head from './Header.vue'
import Foot from './Footer.vue'
import Contactnav from './Contactnav.vue'
export default {
  data () {
    return {
      picArr: [],
      modelData: [],
      newsData: []
    }
  },
  methods: {
    getEnviron () {
      this.$http.get('ambient/list').then(res => {
        res.some((val, index) => {
          if (index <= 2) {
            this.picArr.push(val)
          }
        })
      })
    },
    getModel () {
      this.$http.get('/models/list').then(res => {
        res.some((val, index) => {
          if (index <= 5) {
            this.modelData.push(val)
          }
        })
      })
    },
    getNews () {
      this.$http.get('/journalism/list').then(res => {
        res.some((val, index) => {
          if (index <= 3) {
            this.newsData.push(val)
          }
          if (val.content.length > 88) {
            val.content = val.content.substr(0, 88) + '......'
          }
        })
      })
    }
  },
  mounted () {
    this.getEnviron()
    this.getModel()
    this.getNews()
  },
  components: {
    myHead: Head,
    myFoot: Foot,
    mySubnav: Contactnav
  }
}
</script>
