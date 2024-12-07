import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/app.css'
import 'element-ui/lib/theme-chalk/index.css'
import { CarouselItem, Carousel } from 'element-ui'

Vue.config.productionTip = false
Vue.component(CarouselItem.name, CarouselItem)
Vue.component(Carousel.name, Carousel)

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
