<template>
  <section class="lifespent-section w-full bg-white flex flex-col items-center tablet:px-[16px] laptop:px-[32px]"
    role="region" aria-label="LeftSpent 生命时光">

    <div
      class="flex flex-row w-full !items-center module-warpper tablet:mt-[20px] laptop:mt-[40px] desktop:mt-[80px] tablet:mb-[16px] laptop:mb-[34px] desktop:mb-[80px]">
      <h2 class="font-medium large-title vivo-blod-font" id="lifespent">生命时光</h2>
    </div>

    <article
      class="lifespent-card w-full desktop:w-[1200px] mb-[16px] laptop:mb-[32px] desktop:mb-[160px] bg-white rounded-[20px] desktop:rounded-[30px] flex flex-col items-center"
      role="article" aria-labelledby="lifespent-title">
      <div
        class="lifespent-content w-full flex flex-col desktop:flex-row items-center justify-between desktop:p-[60px] p-[24px]">
        <div class="lifespent-text desktop:w-[45%] w-full flex flex-col items-start">
          <h3
            class="tablet:text-[20px] text-[48px] tablet:leading-[32px] leading-[56px] vivo-blod-font font-medium mb-[20px] laptop:mb-[24px] desktop:mb-[32px] text-[#1D1D1F]">
            <a class="gradient-text" href="https://spent.lovejade.cn/" target="_blank" rel="noopener noreferrer"
              aria-label="访问 LeftSpent 应用">
              LeftSpent
            </a>
          </h3>
          <div
            class="tablet:text-[14px] text-[18px] tablet:leading-[24px] leading-[32px] text-[#86868B] desktop:text-[#666666] mb-[24px] laptop:mb-[32px]">
            LeftSpent 是一个极简主义网络应用，基于您的年龄、平均预期寿命和人口中位数年龄，展示您生命中已逝去的时间。没有激励，没有评判。只有数学。
          </div>
          <a class="lifespent-btn flex justify-center items-center text-[16px] laptop:text-[18px] desktop:text-[20px] w-[140px] laptop:w-[160px] desktop:w-[180px] h-[48px] laptop:h-[52px] desktop:h-[56px] rounded-[24px] laptop:rounded-[26px] desktop:rounded-[28px] border border-silvergrey hover:border-brand text-black hover:text-brand transition-all duration-300"
            href="https://spent.lovejade.cn/" target="_blank" rel="noopener noreferrer">
            体验一下
          </a>
        </div>

        <div class="lifespent-visual desktop:w-[55%] w-full flex flex-col items-center justify-center">
          <div class="relative lifespent-circle-container">
            <svg class="lifespent-circle" viewBox="0 0 200 200">
              <circle class="lifespent-bg" cx="100" cy="100" r="90" fill="none" stroke="#f0f0f0" stroke-width="12" />
              <circle class="lifespent-progress" cx="100" cy="100" r="90" fill="none" stroke="url(#lifespentGradient)"
                stroke-width="12" stroke-linecap="round" stroke-dasharray="565.48" stroke-dashoffset="565.48"
                transform="rotate(-90 100 100)" />
              <defs>
                <linearGradient id="lifespentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#f59e0b" />
                  <stop offset="50%" stop-color="#ff4582" />
                  <stop offset="100%" stop-color="#0ea5e9" />
                </linearGradient>
              </defs>
            </svg>
            <div class="absolute inset-0 flex items-center justify-center lifespent-percentage">
              <span
                class="lifespent-percent-text text-[32px] laptop:text-[40px] desktop:text-[48px] font-bold gradient-text">0%</span>
            </div>
          </div>
          <div class="lifespent-stats flex flex-col items-center mt-[24px] laptop:mt-[32px]">
            <div class="lifespent-stat-item flex items-center gap-[12px] laptop:gap-[16px]">
              <div
                class="lifespent-stat-dot w-[8px] h-[8px] laptop:w-[10px] desktop:w-[12px] rounded-full bg-gradient-to-r from-amber-500 via-pink-500 to-sky-500">
              </div>
              <span
                class="lifespent-stat-text text-[14px] laptop:text-[16px] desktop:text-[18px] text-[#666666]">已逝去时光</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'
import { isSmallerScreen } from '../helper/utils'
gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'LifeSpent',

  data() {
    return {
      scrollTriggers: [],
      timeline: null
    }
  },

  created() {
    this.$nextTick(() => {
      if (isSmallerScreen()) return

      this.addDynamicAnimate()
    })
  },

  beforeUnmount() {
    this.cleanupAnimations()
  },

  methods: {
    addDynamicAnimate() {
      // 卡片淡入动画
      const cardTrigger = gsap.from('.lifespent-card', {
        scrollTrigger: {
          trigger: '.lifespent-card',
          markers: false,
          start: 'top 80%',
          end: 'bottom 200px',
          toggleActions: 'restart none none reverse'
        },
        duration: 0.8,
        y: 100,
        autoAlpha: 0,
        ease: 'power2.out'
      })
      this.scrollTriggers.push(cardTrigger)

      // 文字逐行淡入动画
      const textTrigger = gsap.from('.lifespent-text', {
        scrollTrigger: {
          trigger: '.lifespent-text',
          markers: false,
          start: 'top 75%',
          end: 'bottom 200px',
          toggleActions: 'restart none none reverse'
        },
        duration: 0.6,
        x: -50,
        autoAlpha: 0,
        ease: 'power2.out',
        delay: 0.2
      })
      this.scrollTriggers.push(textTrigger)

      // 圆形容器缩放动画
      const circleTrigger = gsap.from('.lifespent-circle-container', {
        scrollTrigger: {
          trigger: '.lifespent-circle-container',
          markers: false,
          start: 'top 70%',
          end: 'bottom 200px',
          toggleActions: 'restart none none reverse'
        },
        duration: 0.8,
        scale: 0.5,
        autoAlpha: 0,
        ease: 'back.out(1.7)',
        delay: 0.4
      })
      this.scrollTriggers.push(circleTrigger)

      // 进度条动画
      const progressTrigger = gsap.to('.lifespent-progress', {
        scrollTrigger: {
          trigger: '.lifespent-circle-container',
          markers: false,
          start: 'top 60%',
          end: 'top 30%',
          scrub: 1
        },
        strokeDashoffset: 282.74,
        duration: 2,
        ease: 'power2.inOut'
      })
      this.scrollTriggers.push(progressTrigger)

      // 百分比数字动画
      const percentTrigger = gsap.to('.lifespent-percent-text', {
        scrollTrigger: {
          trigger: '.lifespent-circle-container',
          markers: false,
          start: 'top 60%',
          end: 'top 30%',
          scrub: 1
        },
        duration: 2,
        ease: 'power2.inOut',
        onUpdate: function () {
          const progress = this.progress()
          const percent = Math.round(progress * 50)
          this.targets()[0].textContent = `${percent}%`
        }
      })
      this.scrollTriggers.push(percentTrigger)

      // 统计信息淡入动画
      const statsTrigger = gsap.from('.lifespent-stats', {
        scrollTrigger: {
          trigger: '.lifespent-stats',
          markers: false,
          start: 'top 80%',
          end: 'bottom 200px',
          toggleActions: 'restart none none reverse'
        },
        duration: 0.6,
        y: 30,
        autoAlpha: 0,
        ease: 'power2.out',
        delay: 0.6
      })
      this.scrollTriggers.push(statsTrigger)

      // 按钮悬停动画
      gsap.set('.lifespent-btn', { transformOrigin: 'center' })
    },

    cleanupAnimations() {
      this.scrollTriggers.forEach(trigger => {
        if (trigger.scrollTrigger) {
          trigger.scrollTrigger.kill()
        }
        trigger.kill()
      })
      this.scrollTriggers = []

      if (this.timeline) {
        this.timeline.kill()
        this.timeline = null
      }
    }
  }
}
</script>

<style scoped lang="scss">
.lifespent-section {
  position: relative;
  overflow: hidden;
}

.lifespent-card {
  background: linear-gradient(135deg, #ffffff 0%, #fafafa 100%);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.1);
  }
}

.lifespent-content {
  position: relative;
}

.lifespent-circle-container {
  width: 200px;
  height: 200px;

  laptop: {
    width: 240px;
    height: 240px;
  }

  desktop: {
    width: 280px;
    height: 280px;
  }
}

.lifespent-circle {
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 4px 12px rgba(245, 158, 11, 0.2));
}

.lifespent-bg {
  opacity: 0.3;
}

.lifespent-progress {
  transition: stroke-dashoffset 0.3s ease;
}

.lifespent-percentage {
  pointer-events: none;
}

.lifespent-percent-text {
  font-family: 'VIVO-FONT-WEB-BOLD', sans-serif;
  -webkit-text-fill-color: transparent;
  background: linear-gradient(90deg, #f59e0b, #ff4582, #0ea5e9);
  background-clip: text;
  -webkit-background-clip: text;
}

.lifespent-stat-item {
  animation: pulse 2s ease-in-out infinite;
}

.lifespent-stat-dot {
  animation: glow 2s ease-in-out infinite;
}

.lifespent-btn {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(245, 158, 11, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
}

@keyframes pulse {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.7;
  }
}

@keyframes glow {

  0%,
  100% {
    box-shadow: 0 0 8px rgba(245, 158, 11, 0.4);
  }

  50% {
    box-shadow: 0 0 16px rgba(245, 158, 11, 0.8), 0 0 24px rgba(255, 69, 130, 0.4);
  }
}

@media screen and (min-width: 1440px) {
  .lifespent-card {
    background-image: url('https://www.lovejade.cn/images/ScrollReveal/card1.png');
    background-size: cover;
    background-position: center;
  }
}
</style>
