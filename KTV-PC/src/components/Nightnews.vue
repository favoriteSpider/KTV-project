<template>
  <div class="night-news">
    <my-head></my-head>
    <my-subnav></my-subnav>
    <my-welfare></my-welfare>
    夜场新闻
    <my-foot></my-foot>
  </div>
</template>
<script>
import Head from '../views/Header.vue'
import Foot from '../views/Footer.vue'
import Subnav from '../views/Contactnav.vue'
import Welfare from '../views/Welfare.vue'
export default {
  components: {
    myHead: Head,
    myFoot: Foot,
    mySubnav: Subnav,
    myWelfare: Welfare
  }
}
</script>
