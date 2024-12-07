<template>
  <div class="page-container">
    <Banner />
    <ScrollReveal />
    <ScrollZoom />
    <!-- <KeyTech /> -->
    <HorizontalScroll />
    <!-- <WatchFace /> -->
    <!-- <Elevator /> -->
    <Footer />
  </div>
</template>

<script>
import { debounce } from './../helper/utils'
import Banner from './../components/Banner.vue'
import ScrollReveal from '../components/ScrollReveal.vue'
import ScrollZoom from './../components/ScrollZoom.vue'
// import KeyTech from './../components/KeyTech.vue'
import HorizontalScroll from '../components/HorizontalScroll.vue'
// import WatchFace from './../components/WatchFace.vue'
import Footer from './../components/Footer.vue'
// import Elevator from './../components/Elevator.vue'

export default {
  name: 'Home',

  data() {
    return {}
  },

  components: {
    Banner,
    ScrollReveal,
    ScrollZoom,
    // KeyTech,
    HorizontalScroll,
    // WatchFace,
    Footer,
    // Elevator
  },

  mounted() {
    this.handleScreenChanges()
  },

  computed: {},

  methods: {
    handleScreenChanges() {
      let width = window.innerWidth
      let height = window.innerHeight
      const REFRESH_THRESHOLD_W = 20
      const REFRESH_THRESHOLD_H = 900

      const reload = debounce(() => {
        const newWidth = window.innerWidth
        const newHeight = window.innerHeight

        if (Math.abs(newWidth - width) > REFRESH_THRESHOLD_W || Math.abs(newHeight - height) > REFRESH_THRESHOLD_H) {
          location.reload()
        }
        width = newWidth
        height = newHeight
      }, 500)

      window.onresize = reload
    }
  }
}
</script>