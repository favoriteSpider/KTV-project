<template>
  <!-- nav 开始 -->
  <div class="nav">
    <div class="w1166">
      <div class="logo fl">
        <img src="../assets/img/image_3.png" alt="" />
      </div>
      <ul class="fl clearfix" ref="list">
        <li v-for="(val, index) in theUrl" :key="index"><router-link :to="val.path">{{val.label}}</router-link></li>
      </ul>
      <div class="fr phone-num">
        <img src="../assets/img/7877635_1538278040.png" class="phone-icon">
        <span>13688143752</span>
      </div>
    </div>
  </div>
  <!-- nav 结束 -->
</template>
<style scoped>
@import '../assets/css/common.css';
</style>
<script>
export default {
  data () {
    return {
      theUrl: [
        { path: '/index', label: '首页' },
        { path: '/aboutus', label: '关于我们' },
        { path: '/showmodel', label: '模特展示' },
        { path: '/showenviron', label: '环境展示' },
        { path: '/nightnews', label: '夜场新闻' },
        { path: '/contactus', label: '联系我们' },
        { path: '/recruit', label: '招聘要求' }
      ],
      urlId: null
    }
  },
  methods: {
    getIndex (index) {
      this.urlId = index
    }
  }
}
</script>
