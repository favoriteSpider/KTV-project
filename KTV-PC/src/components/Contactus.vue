<template>
  <div class="contact-us">
    <my-head></my-head>
    <my-subnav></my-subnav>
    联系我们
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
