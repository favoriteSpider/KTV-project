<template>
  <!-- 福利 开始 -->
  <div class="welfare">
    <img :src="baseURL + info.image" class="img-bg">
    <div class="text">
      <VueMarkdown :source="info.content"></VueMarkdown>
      <div class="what-room">小包低消1080元 中包低消1280 大包低消1380 豪包低消2680</div>
    </div>
    <img src="../assets/img/patrick.png" class="code">
    <div class="telphone">T: 13688143752</div>
  </div>
  <!-- 福利 结束 -->
</template>
<style scoped>
@import '../assets/css/common.css';
</style>
<script>
import VueMarkdown from 'vue-markdown'
export default {
  data () {
    return {
      info: {}
    }
  },
  mounted () {
    this.$http.get('/carousel_map/list').then(res => {
      res.some((val, index) => {
        if (index === 0) {
          val.content = val.content.replace(/#/g, '')
          this.info = val
          return true
        }
      })
    })
  },
  components: {
    VueMarkdown
  }
}
</script>
