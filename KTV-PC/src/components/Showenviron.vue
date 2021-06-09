<template>
  <div class="show-environ">
    <my-head></my-head>
    <my-subnav></my-subnav>
    <my-foot></my-foot>
  </div>
</template>
<script>
import Head from '../views/Header.vue'
import Foot from '../views/Footer.vue'
import Subnav from '../views/Contactnav.vue'
export default {
  components: {
    myHead: Head,
    myFoot: Foot,
    mySubnav: Subnav
  }
}
</script>
