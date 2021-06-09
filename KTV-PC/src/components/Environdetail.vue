<template>
  <div class="environ-detail">
    <my-head></my-head>
    <my-subnav></my-subnav>
    <my-welfare></my-welfare>

    <div class="w1200">
      <div class="where-you">
        <router-link to="/index">首页 </router-link>
        <span class="arrow">>></span>
        <router-link to="/showenviron"> 环境展示 </router-link>
        <span class="arrow">>></span>
        <a href="javascript:;" class=""> {{chooseData.title}}</a>
      </div>
      <h1>{{chooseData.title}}</h1>
      <div class="watch-pic clearfix">
        <div class="fl pic" ref="smallPic">
          <div class="mask" ref="mask"></div>
          <div class="small-pic">
            <img :src="baseURL + chooseData.image" alt="">
          </div>
          <div class="big-pic" ref="bigBox">
            <img :src="baseURL + chooseData.image" alt=""  ref="bigPic">
          </div>
        </div>
        <div class="fl price">暂无价格</div>
      </div>
      <div class="share">
        <ul class="clearfix">
          <li><a href="http://apps.hi.baidu.com/share/?url=http%3A%2F%2Fwww.comektv.com%2Fyczp1%2Fproducts%2F14932551.html%3Fbsh_bid%3D5616470774&title=%3F%3F%3F%3F%3F" title="分享至百度贴吧"></a></li>
          <li><a href="http://bshare.optimix.cn/bshare_redirect?site=sinaminiblog&type=0&publisherUuid=&url=http%3A%2F%2Fwww.comektv.com%2Fyczp1%2Fproducts%2F14932551.html&title=%E6%88%90%E9%83%BD%E5%A4%9C%E6%80%BB%E4%BC%9A&summary=%E6%88%90%E9%83%BD%E9%94%A6%E7%BC%98%E5%9B%BD%E9%99%85%E5%A4%9C%E6%80%BB%E4%BC%9A%E4%B8%BA%E4%BC%81%E4%B8%9A%E6%8F%90%E4%BE%9B%E6%88%90%E9%83%BD%E5%A4%9C%E6%80%BB%E4%BC%9A%2C%E6%88%90%E9%83%BD%E5%A4%9C%E6%80%BB%E4%BC%9A%E4%BB%B7%E6%A0%BC%2C%E6%88%90%E9%83%BD%E5%A4%9C%E6%80%BB%E4%BC%9A%E5%8F%82%E6%95%B0%E7%9B%B8%E5%85%B3%E4%BF%A1%E6%81%AF.&pic=&pics=https%3A%2F%2Faimg8.dlssyht.cn%2Fu%2F1913406%2Fmodule%2Fsimplepicbackground%2F1913406%2F10387%2F20772430_1609926138.png%3Fx-oss-process%3Dimage%2Fresize%2Cm_fixed%2Cw_134%2Ch_134%2Climit_0%7Chttps%3A%2F%2Faimg8.dlssyht.cn%2Fproduct%2F800_1500%2F7467%2F14932551_1913406_41609927217.jpeg%3Fx-oss-process%3Dimage%2Fresize%2Cm_lfit%2Climit_1%2Cw_420%2Ch_420%7Chttps%3A%2F%2Faimg8.dlssyht.cn%2Fu%2F1913406%2Fueditor%2Fimage%2F957%2F1913406%2F1609927211460752.jpeg%7Chttps%3A%2F%2Faimg8.dlssyht.cn%2Fproduct%2F800_1500%2F7467%2F14932548_1913406_41609927317.jpeg%3Fx-oss-process%3Dimage%2Fresize%2Cm_lfit%2Cw_200%2Ch_200%2Climit_1%7Chttps%3A%2F%2Faimg8.dlssyht.cn%2Fproduct%2F800_1500%2F7467%2F14932547_1913406_41609927354.jpeg%3Fx-oss-process%3Dimage%2Fresize%2Cm_lfit%2Cw_200%2Ch_200%2Climit_1%7Chttps%3A%2F%2Faimg8.dlssyht.cn%2Fu%2F1913406%2Fmodule%2Fsimplepicbackground%2F1913406%2F10387%2F20772427_1609926041.png%3Fx-oss-process%3Dimage%2Fresize%2Cm_fixed%2Cw_162%2Ch_162%2Climit_0&video=&vTag=&vUid=&vEmail=&product=&price=0&brand=&tag=&category=&template=1&popcss=&apvuid=&apts=&apsign=&request_locale=zh&lang=zh" title="分享至新浪微博"></a></li>
          <li><a href="https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=http%3A%2F%2Fwww.comektv.com%2Fyczp1%2Fproducts%2F14932551.html%3Fbsh_bid%3D5616470909&title=%3F%3F%3F%3F%3F&pics=&summary=%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%2C%3F%3F%3F%3F%3F%3F%3F%2C%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F.&desc=%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%2C%3F%3F%3F%3F%3F%3F%3F%2C%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F." title="分享至QQ空间"></a></li>
          <li><a href="https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?to=pengyou&url=http%3A%2F%2Fwww.comektv.com%2Fyczp1%2Fproducts%2F14932551.html%3Fbsh_bid%3D5616470939&pics=&title=%3F%3F%3F%3F%3F&summary=%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%2C%3F%3F%3F%3F%3F%3F%3F%2C%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F." title="分享朋友圈"></a></li>
          <li><a href="javascript:;" title="分享微信" @click="showWechat"></a></li>
        </ul>
      </div>
      <div class="share-wechat" v-show="wechatFlag">
        <div class="head clearfix">
          <div class="text fl">分享到-微信</div>
          <div class="close fr" @click="hideWechat">X</div>
        </div>
        <div class="code">
          <img src="" alt="">
        </div>
      </div>
      <div class="explain">
        <div class="text">产品说明</div>
        <div class="pic">
          <img :src="baseURL + chooseData.image" alt="">
        </div>
      </div>
      <div class="correlation">
        <div class="title">相关产品</div>
        <ul class="clearfix">
          <li v-for="val in otherPro" :key="val.id" @click="showData(val.id)">
            <div class="pic">
              <img :src="baseURL + val.image" alt="">
            </div>
            <div class="text">{{val.title}}</div>
          </li>
        </ul>
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
      chooseData: {},
      otherPro: [],
      wechatFlag: false
    }
  },
  methods: {
    showBig () {
      var smallPic = this.$refs.smallPic
      var bigPic = this.$refs.bigPic
      var mask = this.$refs.mask
      var bigBox = this.$refs.bigBox
      // 经过显示
      smallPic.addEventListener('mouseover', () => {
        bigBox.style.display = 'block'
        mask.style.display = 'block'
      })
      // 离开隐藏
      smallPic.addEventListener('mouseout', () => {
        bigBox.style.display = 'none'
        mask.style.display = 'none'
      })
      // 鼠标移动事件
      smallPic.addEventListener('mousemove', (e) => {
        // 获取鼠标位置
        var mouseX = e.pageX - smallPic.offsetLeft
        var mouseY = e.pageY - smallPic.offsetTop
        // 鼠标定位在遮罩层的中间,鼠标的位置不动,把遮罩层往左移动一半的距离,往上移一半的距离
        var maskX = mouseX - mask.offsetWidth / 2
        var maskY = mouseY - mask.offsetWidth / 2
        // 限制拖拽范围
        var max = smallPic.offsetWidth - mask.offsetWidth
        if (maskX > max) {
          maskX = max
        } else if (maskX < 0) {
          maskX = 0
        }
        if (maskY > max) {
          maskY = max
        } else if (maskY < 0) {
          maskY = 0
        }

        mask.style.left = maskX + 'px'
        mask.style.top = maskY + 'px'

        // 大盒子
        var bigMax = bigPic.offsetWidth - bigBox.offsetWidth
        var bigX = bigMax / max * maskX
        var bigY = bigMax / max * maskY
          bigPic.style.left = -bigX + 'px'
          bigPic.style.top = -bigY + 'px'
      })
    },
    showData (id) {
      this.$http.get('/ambient/get?id=' + id).then(res => {
        this.chooseData = res
      })
    },
    showWechat () {
      this.wechatFlag = true
    },
    hideWechat () {
      this.wechatFlag = false
    }
  },
  mounted () {
    var id = this.$route.params.id
    this.showData(id)
    this.$http.get('/ambient/list').then(res => {
      res = res.filter(val => val.id !== parseInt(id))
      this.otherPro = res
    })
    // 放大镜
    this.showBig()
  },
  components: {
    myHead: Head,
    myFoot: Foot,
    mySubnav: Subnav,
    myWelfare: Welfare
  }
}
</script>
