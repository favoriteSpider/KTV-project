<template>
  <!-- nav 开始 -->
  <div class="nav">
    <div class="w1166">
      <div class="logo fl">
        <img src="../assets/img/image_3.png" alt="" />
      </div>
      <ul class="fl clearfix">
        <li><a href="javascript:;" class="active" @click="index">首页</a></li>
        <li><a href="javascript:;" @click="aboutUs">关于我们</a></li>
        <li><a href="javascript:;" @click="showModel">模特展示</a></li>
        <li><a href="javascript:;" @click="showEnviron">环境展示</a></li>
        <li><a href="javascript:;" @click="nightNews">夜场新闻</a></li>
        <li><a href="javascript:;" @click="contactUs">联系我们</a></li>
        <li><a href="javascript:;" @click="recruit">招聘要求</a></li>
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
  methods: {
    index () {
      this.$router.push('/index')
    },
    aboutUs () {
      this.$router.push('/aboutus')
    },
    showModel () {
      this.$router.push('/showmodel')
    },
    showEnviron () {
      this.$router.push('/showenviron')
    },
    nightNews () {
      this.$router.push('/nightnews')
    },
    contactUs () {
      this.$router.push('/contactus')
    },
    recruit () {
      this.$router.push('/recruit')
    }
  }
}
</script>
