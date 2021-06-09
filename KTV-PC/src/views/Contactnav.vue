<template>
  <!-- 侧边栏联系我们 开始 -->
  <div class="subnav">
    <div class="icon" :class="flag1 ? 'contact-show' : 'hide'" @mouseenter="enter"></div>
    <div class="function" :class="flag1 ? 'hide-left' : 'show-right'">
      <div :class="arrowFlag === true ? 'arrow1' : 'arrow2'" @mouseenter="arrowEnter" @mouseleave="arrowLeave" @click="leave"></div>
      <ul>
        <li>
          <img src="../assets/img/online_tel.png" alt="">
          <span>电话直呼</span>
        </li>
        <li>
          <img src="../assets/img/online_message.png" alt="">
          <span>在线留言</span>
        </li>
        <li>
          <img src="../assets/img/online_email.png" alt="">
          <span>发送邮件</span>
        </li>
      </ul>
    </div>
  </div>
  <!-- 侧边栏联系我们 结束 -->
</template>
<script>
export default {
  data () {
    return {
      flag1: true,
      arrowFlag: true
    }
  },
  methods: {
    enter () {
      this.flag1 = false
    },
    arrowEnter () {
      this.arrowFlag = false
    },
    arrowLeave () {
      this.arrowFlag = true
    },
    leave () {
      this.flag1 = true
    }
  }
}
</script>
