<template>
  <section class="flex tablet:px-[16px] laptop:px-[32px] relative flex-col justify-center items-center w-full bg-white"
    role="region" aria-label="微信周边">
    <div
      class="flex flex-row w-full !items-center module-warpper tablet:mt-[20px] laptop:mt-[58px] desktop:mt-[160px] tablet:mb-[16px] laptop:mb-[34px] desktop:mb-[80px]">
      <h2 class="font-medium large-title vivo-blod-font" id="open-source-works">微信周边</h2>
    </div>
    <div
      class="w-full wechat-card desktop:w-[1200px] mb-[16px] laptop:mb-[32px] desktop:mb-[60px] bg-white rounded-[20px] desktop:rounded-[30px] flex flex-col-reverse desktop:flex-row items-center">
      <div
        class="container flex flex-col gap-8 justify-center items-center px-4 mx-auto my-28 max-w-screen-lg sm:flex-row sm:gap-6 md:gap-8 lg:gap-20 xl:gap-28"
        aria-label="微信周边">
        <div
          class="blue-shadow aspect-square w-full max-w-[360px] bg-gray-50 rounded-2xl p-6 transition-shadow duration-300">
          <div class="flex flex-col items-center">
            <img class="w-[80%] h-auto aspect-square object-cover" src="./../assets/images/qrcode_jqx.jpg"
              alt="微信公众号 - 晚晴幽草轩" />
            <span class="mt-4 text-lg font-medium tablet:text-base gradient-text">微信公众号</span>
          </div>
        </div>
        <div
          class="green-shadow aspect-square  w-full max-w-[360px] bg-gray-50 rounded-2xl p-6 transition-shadow duration-300">
          <div class="flex flex-col items-center">
            <img class="w-[80%] h-auto aspect-square object-cover" src="./../assets/images/qrcode_sph.jpeg"
              alt="微信视频号 - 倾城之链" />
            <span class="mt-4 text-lg font-medium tablet:text-base gradient-text">微信视频号</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'
import { isSmallerScreen } from '../helper/utils'
gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'Wechats',

  created() {
    this.$nextTick(() => {
      if (isSmallerScreen()) return

      this.addDynamicAnimate()
    })
  },

  methods: {
    addDynamicAnimate() {
      gsap.from('.wechat-card', {
        scrollTrigger: {
          trigger: '.wechat-card',
          markers: false,
          start: 'top 80%',
          end: 'bottom 200px',
          toggleActions: 'restart none none reverse'
        },
        duration: 0.5,
        y: 100,
        autoAlpha: 0
      })
    }
  }
}
</script>

<style>
.blue-shadow {
  background-color: #ffffffcf;
  backdrop-filter: blur(25px);
  box-shadow: inset 0 2px 80px #00000005,
    -9px 20px 60px -24px #0000000d,
    0 52px 36px -48px #bfe0f1cc,
    0 0 0 1px #f0f0f0;
}

.green-shadow {
  background-color: #ffffffcf;
  backdrop-filter: blur(25px);
  box-shadow: inset 0 2px 80px #00000005, -9px 20px 60px -24px #0000000d, 0 52px 36px -48px #b4f2d7, 0 0 0 1px #f0f0f0;
}

.wechat-card {
  background-image: url('https://www.lovejade.cn/images/ScrollReveal/card2.png');
}
</style>