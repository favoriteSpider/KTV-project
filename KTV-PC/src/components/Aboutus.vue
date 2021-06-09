<template>
  <div class="about-us">
    <my-head></my-head>
    <my-subnav></my-subnav>
    关于我们
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
