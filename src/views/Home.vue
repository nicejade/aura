<template>
  <main class="page-container" role="main">
    <Banner />
    <Wechats />
    <ScrollReveal />
    <WisdomAtlas />
    <GPTWordbook />
    <LifeSpent />
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
import Wechats from '../components/Wechats.vue'
import GPTWordbook from './../components/GPTWordbook.vue'
import WisdomAtlas from '../components/WisdomAtlas.vue'
import LifeSpent from '../components/LifeSpent.vue'
import ScrollZoom from './../components/ScrollZoom.vue'
import OpenSource from '../components/OpenSource.vue'
import HorizontalScroll from '../components/HorizontalScroll.vue'
import FAQSection from './../components/FAQSection.vue'
import Elevator from './../components/Elevator.vue'
import Footer from './../components/Footer.vue'

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
    WisdomAtlas,
    FAQSection
  },

  computed: {},

  methods: {}
}
</script>
