<template>
  <div class="show-model">
    <my-head></my-head>
    <my-subnav></my-subnav>
    <my-welfare></my-welfare>
    模特展示
    <my-foot></my-foot>
  </div>
</template>
<script>
import Head from '../views/Header.vue'
import Foot from '../views/Footer.vue'
import Contactnav from '../views/Contactnav.vue'
import Welfare from '../views/Welfare.vue'
export default {
  components: {
    myHead: Head,
    myFoot: Foot,
    mySubnav: Contactnav,
    myWelfare: Welfare
  }
}
</script>
