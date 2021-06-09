<template>
  <div class="recruit">
    <my-head></my-head>
    <my-subnav></my-subnav>
    招聘要求
    <my-foot></my-foot>
  </div>
</template>
<script>
import Head from '../views/Header.vue'
import Foot from '../views/Footer.vue'
import Contactnav from '../views/Contactnav.vue'
export default {
  components: {
    myHead: Head,
    myFoot: Foot,
    mySubnav: Contactnav
  }
}
</script>
