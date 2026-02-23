<template>
  <main class="page-container" role="main">
    <Banner />
    <Wechats />
    <ScrollReveal />
    <LifeSpent />
    <GPTWordbook />
    <ScrollZoom />
    <OpenSource />
    <HorizontalScroll />
    <FAQSection />
    <Elevator />
    <Footer />
  </main>
</template>

<script>
import Banner from './../components/Banner.vue'
import ScrollReveal from '../components/ScrollReveal.vue'
import LifeSpent from '../components/LifeSpent.vue'
import ScrollZoom from './../components/ScrollZoom.vue'
import Wechats from '../components/Wechats.vue'
import OpenSource from '../components/OpenSource.vue'
import HorizontalScroll from '../components/HorizontalScroll.vue'
import Footer from './../components/Footer.vue'
import Elevator from './../components/Elevator.vue'
import GPTWordbook from './../components/GPTWordbook.vue'
import FAQSection from './../components/FAQSection.vue'

export default {
  name: 'Home',

  data() {
    return {}
  },

  components: {
    Banner,
    ScrollReveal,
    ScrollZoom,
    Wechats,
    OpenSource,
    HorizontalScroll,
    LifeSpent,
    Footer,
    Elevator,
    GPTWordbook,
    FAQSection
  },

  computed: {},

  methods: {}
}
</script>
