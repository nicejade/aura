<template>
  <section
    class="blueos-docs-section w-full bg-[#FAFBFC] desktop:bg-white flex flex-col items-start desktop:items-center tablet:px-[16px] laptop:px-[32px]"
    aria-label="蓝河文档馆展示区">

    <div
      class="flex flex-row w-full !items-center module-warpper tablet:mt-[30px] laptop:mt-[58px] desktop:mt-[160px] tablet:mb-[16px] laptop:mb-[34px] desktop:mb-[80px]">
      <h2 class="font-medium large-title vivo-blod-font" id="blueos-docs-title">蓝河文档馆</h2>
    </div>

    <article
      class="blueos-intro w-full desktop:w-[1200px] mb-[16px] laptop:mb-[32px] desktop:mb-[60px] bg-white rounded-[20px] desktop:rounded-[30px] p-[24px] laptop:p-[40px] desktop:p-[60px]"
      role="article" aria-labelledby="blueos-intro-title">
      <div class="flex flex-col desktop:flex-row items-center gap-[30px] laptop:gap-[50px]">
        <div class="flex-1 text-left desktop:my-auto">
          <h3
            class="tablet:text-[20px] text-[48px] laptop:text-[58px] tablet:leading-[32px] leading-[58px] vivo-blod-font font-medium mb-[16px] laptop:mb-[20px] desktop:mb-[24px] text-[#1D1D1F]"
            id="blueos-intro-title">
            <a class="gradient-text" href="https://blueos.niceshare.site/" target="_blank" rel="noopener noreferrer"
              aria-label="访问蓝河文档馆">
              BlueOS Docs
            </a>
          </h3>
          <div
            class="tablet:text-[14px] text-[18px] laptop:text-[20px] tablet:leading-[24px] leading-[36px] text-[#86868B] desktop:text-[#666666]">
            BlueOS（蓝河）应用开发文档中心。面向 Web / Vue 开发者，以类 Web 范式开发智能手表应用、表盘与卡片——用 UI 组件搭页面、用样式描述效果、用 JavaScript 写业务，支持类似 Vue2 的
            MVVM。
          </div>
          <div class="flex flex-wrap gap-[12px] mt-[24px]">
            <span class="blueos-tag">🌐 类 Web 范式</span>
            <span class="blueos-tag">🔗 Vue2 式 MVVM</span>
            <span class="blueos-tag">⚙️ Rust 内核</span>
            <span class="blueos-tag">⌚ 手表 / 表盘 / 卡片</span>
          </div>
        </div>
        <div class="flex items-center justify-center flex-1 blueos-visual" aria-hidden="true">
          <div class="blueos-watch-container">
            <div class="blueos-watch-glow"></div>
            <div class="blueos-watch">
              <div class="blueos-watch-bezel">
                <div class="blueos-watch-face">
                  <img class="blueos-face-icon" src="../assets/icons/framework.svg" alt="" />
                  <img class="blueos-face-icon blueos-face-icon-sm" src="../assets/icons/runtime.svg" alt="" />
                  <img class="blueos-face-icon blueos-face-icon-sm" src="../assets/icons/rust.svg" alt="" />
                </div>
              </div>
              <div class="blueos-watch-band blueos-watch-band-top"></div>
              <div class="blueos-watch-band blueos-watch-band-bottom"></div>
            </div>
          </div>
        </div>
      </div>
    </article>

    <div class="blueos-grid-container w-full desktop:w-[1200px] mb-[16px] laptop:mb-[32px] desktop:mb-[160px]">
      <div class="blueos-grid">
        <a v-for="(category, index) in categories" :key="index" class="blueos-card"
          :class="`blueos-card-${index + 1}`" :href="category.url" target="_blank" rel="noopener noreferrer"
          :aria-label="`前往${category.name}：${category.badge}`">
          <div class="blueos-card-accent" :style="{ background: category.accent }"></div>
          <div class="blueos-card-body">
            <div class="blueos-card-header">
              <span class="blueos-card-icon">{{ category.icon }}</span>
              <span class="blueos-card-count">{{ category.badge }}</span>
            </div>
            <strong class="blueos-card-name">{{ category.name }}</strong>
            <span class="blueos-card-name-en">{{ category.nameEn }}</span>
            <p class="blueos-card-desc">{{ category.desc }}</p>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'
import { isSmallerScreen } from '../helper/utils'
gsap.registerPlugin(ScrollTrigger)

const CATEGORIES = [
  {
    name: '快速入门',
    nameEn: 'Guide',
    icon: '🚀',
    badge: '教程',
    desc: '从安装与首个应用到待办实战，建立 BlueOS 开发的基础心智模型。',
    url: 'https://blueos.niceshare.site/guide/',
    accent: 'linear-gradient(135deg, #3380F2 0%, #5B8FF3 100%)'
  },
  {
    name: '官方参考',
    nameEn: 'Reference',
    icon: '📘',
    badge: '字典',
    desc: '系统能力概览、开发流程与配置说明，查参数、查能力时当字典用。',
    url: 'https://blueos.niceshare.site/reference/quickstart/introduction/',
    accent: 'linear-gradient(135deg, #5B8FF3 0%, #7BA3F5 100%)'
  },
  {
    name: 'UI 组件',
    nameEn: 'Components',
    icon: '🧩',
    badge: '组件',
    desc: '基础、表单、容器、画布与导航组件，用声明式 UI 搭建手表页面。',
    url: 'https://blueos.niceshare.site/component/basic/text/',
    accent: 'linear-gradient(135deg, #667eea 0%, #F886A1 100%)'
  },
  {
    name: 'JS API',
    nameEn: 'JavaScript API',
    icon: '⚡',
    badge: '接口',
    desc: '完整开放能力：生命周期、系统弹窗、互联与业务接口，高效完成应用开发。',
    url: 'https://blueos.niceshare.site/api/system/app/',
    accent: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
  },
  {
    name: 'Native API',
    nameEn: 'Native',
    icon: '🛠️',
    badge: '高性能',
    desc: '聚焦高性能与代码复用：连接、存储、通信等 Native 能力接口。',
    url: 'https://blueos.niceshare.site/native/quickstart/introduction/',
    accent: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
  },
  {
    name: '性能优化',
    nameEn: 'Performance',
    icon: '📈',
    badge: '指南',
    desc: '面向手表场景的性能实践，帮助打磨流畅、省电的蓝河应用体验。',
    url: 'https://blueos.niceshare.site/reference/perf-guide/overview/',
    accent: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)'
  }
]

export default {
  name: 'BlueOSDocs',

  data() {
    return {
      categories: Object.freeze(CATEGORIES)
    }
  },

  created() {
    this.$nextTick(() => {
      if (isSmallerScreen()) return
      this.addDynamicAnimate()
    })
  },

  methods: {
    addDynamicAnimate() {
      gsap.from('.blueos-intro', {
        scrollTrigger: {
          trigger: '.blueos-intro',
          markers: false,
          start: 'top 80%',
          end: 'bottom 200px',
          toggleActions: 'restart none none reverse'
        },
        duration: 0.8,
        y: 80,
        opacity: 0,
        ease: 'power2.out'
      })

      gsap.from('.blueos-watch-container', {
        scrollTrigger: {
          trigger: '.blueos-watch-container',
          markers: false,
          start: 'top 80%',
          end: 'bottom 200px',
          toggleActions: 'restart none none reverse'
        },
        duration: 1,
        scale: 0.7,
        y: 40,
        opacity: 0,
        ease: 'back.out(1.4)',
        delay: 0.15
      })

      gsap.from('.blueos-tag', {
        scrollTrigger: {
          trigger: '.blueos-tag',
          markers: false,
          start: 'top 90%',
          end: 'bottom 200px',
          toggleActions: 'restart none none reverse'
        },
        duration: 0.5,
        y: 20,
        opacity: 0,
        stagger: 0.1,
        ease: 'power2.out'
      })

      const cards = gsap.utils.toArray('.blueos-card')
      cards.forEach((card, index) => {
        const row = Math.floor(index / 3)
        const col = index % 3
        const originX = (col - 1) * 18
        const originY = row === 0 ? -36 : 36

        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            markers: false,
            start: 'top 88%',
            end: 'bottom 200px',
            toggleActions: 'restart none none reverse'
          },
          duration: 0.7,
          y: originY,
          x: originX,
          opacity: 0,
          scale: 0.88,
          ease: 'back.out(1.4)',
          delay: index * 0.07
        })
      })
    }
  }
}
</script>

<style scoped lang="scss">
.blueos-docs-section {
  isolation: isolate;
}

.blueos-intro {
  border: 1px solid rgba(15, 23, 42, 0.06);
  box-shadow: 0 10px 30px rgba(17, 24, 39, 0.06);
  transition: box-shadow 0.3s ease, transform 0.3s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(51, 128, 242, 0.2);
    box-shadow: 0 24px 50px rgba(51, 128, 242, 0.12);
  }
}

.blueos-tag {
  display: inline-block;
  padding: 6px 14px;
  background: #f5f5f7;
  color: #5f6368;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 500;
  cursor: default;
  border: 1px solid rgba(15, 23, 42, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.2s ease, color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    background: #eef4fe;
    color: #2b5fbf;
    box-shadow: 0 6px 16px rgba(51, 128, 242, 0.12);
  }
}

/* ─── Watch visual ─────────────────────────────────────────────────── */
.blueos-visual {
  min-height: 200px;
}

.blueos-watch-container {
  position: relative;
  width: 180px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.blueos-watch-glow {
  position: absolute;
  inset: 24px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(51, 128, 242, 0.22), transparent 70%);
  filter: blur(10px);
  z-index: 1;
  animation: blueos-glow 4.5s ease-in-out infinite;
}

.blueos-watch {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.blueos-watch-band {
  width: 54px;
  height: 22px;
  background: linear-gradient(180deg, #5b8ff3, #3380f2);
  border-radius: 8px;

  &.blueos-watch-band-top {
    margin-bottom: -4px;
    border-radius: 10px 10px 4px 4px;
  }

  &.blueos-watch-band-bottom {
    margin-top: -4px;
    border-radius: 4px 4px 10px 10px;
  }
}

.blueos-watch-bezel {
  width: 120px;
  height: 132px;
  padding: 8px;
  border-radius: 28px;
  background: linear-gradient(145deg, #3380f2, #f886a1);
  box-shadow: 0 14px 28px rgba(51, 128, 242, 0.28);
}

.blueos-watch-face {
  width: 100%;
  height: 100%;
  border-radius: 22px;
  background:
    linear-gradient(160deg, rgba(255, 255, 255, 0.92), rgba(238, 244, 254, 0.96)),
    #f7faff;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1.2fr 1fr;
  gap: 6px;
  padding: 14px 12px;
  place-items: center;
}

.blueos-face-icon {
  width: 40px;
  height: 40px;
  grid-column: 1 / -1;
  animation: blueos-icon-breathe 3.8s ease-in-out infinite;
}

.blueos-face-icon-sm {
  width: 28px;
  height: 28px;
  grid-column: auto;
  animation-delay: 0.4s;

  &:last-child {
    animation-delay: 0.8s;
  }
}

@keyframes blueos-glow {
  0%,
  100% {
    opacity: 0.55;
    transform: scale(0.96);
  }

  50% {
    opacity: 0.95;
    transform: scale(1.06);
  }
}

@keyframes blueos-icon-breathe {
  0%,
  100% {
    transform: translateY(0) scale(1);
  }

  50% {
    transform: translateY(-2px) scale(1.04);
  }
}

/* ─── Category grid ────────────────────────────────────────────────── */
.blueos-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
}

.blueos-card {
  position: relative;
  overflow: hidden;
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.06);
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(17, 24, 39, 0.05);
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  display: block;
  transition:
    transform 0.32s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.32s ease,
    border-color 0.2s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 44px rgba(51, 128, 242, 0.14);
    border-color: rgba(51, 128, 242, 0.18);

    .blueos-card-accent {
      height: 4px;
    }

    .blueos-card-icon {
      transform: scale(1.15);
    }
  }

  &:focus-visible {
    outline: 2px solid rgba(51, 128, 242, 0.5);
    outline-offset: 2px;
  }
}

.blueos-card-accent {
  height: 3px;
  width: 100%;
  transition: height 0.3s ease;
}

.blueos-card-body {
  padding: 20px 18px 22px;

  @media screen and (min-width: 1440px) {
    padding: 22px 20px 26px;
  }
}

.blueos-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
}

.blueos-card-icon {
  font-size: 32px;
  transition: transform 0.3s ease;

  @media screen and (min-width: 1440px) {
    font-size: 36px;
  }
}

.blueos-card-count {
  font-size: 13px;
  font-weight: 600;
  color: #86868b;
  background: #f5f5f7;
  padding: 3px 10px;
  border-radius: 999px;
  letter-spacing: 0.02em;
}

.blueos-card-name {
  display: block;
  font-size: 18px;
  font-weight: 700;
  color: #1d1d1f;
  line-height: 1.3;
  margin-bottom: 2px;
  font-family: 'VIVO-FONT-WEB-BOLD', sans-serif;

  @media screen and (min-width: 1440px) {
    font-size: 20px;
  }
}

.blueos-card-name-en {
  display: block;
  font-size: 12px;
  color: #86868b;
  letter-spacing: 0.04em;
  margin-bottom: 10px;
}

.blueos-card-desc {
  font-size: 13px;
  line-height: 1.6;
  color: #86868b;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media screen and (min-width: 1440px) {
    font-size: 14px;
  }
}

/* ─── Mobile adjustments ───────────────────────────────────────────── */
@media screen and (max-width: 767px) {
  .blueos-docs-section {
    background: #fafbfc;
  }

  .blueos-card {
    border-radius: 16px;
  }

  .blueos-card-body {
    padding: 16px 14px 18px;
  }

  .blueos-watch-container {
    width: 140px;
    height: 168px;
  }

  .blueos-watch-bezel {
    width: 96px;
    height: 108px;
    border-radius: 22px;
    padding: 6px;
  }

  .blueos-watch-face {
    border-radius: 18px;
    padding: 10px 8px;
    gap: 4px;
  }

  .blueos-face-icon {
    width: 32px;
    height: 32px;
  }

  .blueos-face-icon-sm {
    width: 22px;
    height: 22px;
  }

  .blueos-watch-band {
    width: 42px;
    height: 18px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .blueos-watch-glow,
  .blueos-face-icon {
    animation: none;
  }
}
</style>
