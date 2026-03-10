<template>
  <section
    class="wisdom-atlas-section w-full bg-[#FAFBFC] desktop:bg-white flex flex-col items-start desktop:items-center tablet:px-[16px] laptop:px-[32px]"
    aria-label="慧悟万象阁展示区">

    <div
      class="flex flex-row w-full !items-center module-warpper tablet:mt-[30px] laptop:mt-[58px] desktop:mt-[160px] tablet:mb-[16px] laptop:mb-[34px] desktop:mb-[80px]">
      <h2 class="font-medium large-title vivo-blod-font" id="wisdom-atlas-title">慧悟万象阁</h2>
    </div>

    <article
      class="atlas-intro w-full desktop:w-[1200px] mb-[16px] laptop:mb-[32px] desktop:mb-[60px] bg-white rounded-[20px] desktop:rounded-[30px] p-[24px] laptop:p-[40px] desktop:p-[60px]"
      role="article" aria-labelledby="atlas-intro-title">
      <div class="flex flex-col desktop:flex-row items-center gap-[30px] laptop:gap-[50px]">
        <div class="flex-1 text-left desktop:my-auto">
          <h3
            class="tablet:text-[20px] text-[48px] laptop:text-[58px] tablet:leading-[32px] leading-[58px] vivo-blod-font font-medium mb-[16px] laptop:mb-[20px] desktop:mb-[24px] text-[#1D1D1F]"
            id="atlas-intro-title">
            <a class="gradient-text" href="https://meta.niceshare.site/" target="_blank" rel="noopener noreferrer"
              aria-label="访问慧悟万象阁">
              Wisdom Atlas
            </a>
          </h3>
          <div
            class="tablet:text-[14px] text-[18px] laptop:text-[20px] tablet:leading-[24px] leading-[36px] text-[#86868B] desktop:text-[#666666]">
            一套活的、结构化的知识系统，汇聚高杠杆的认知工具——思维框架、心智模型、定律、谬误、悖论、原则与策略。扎根哲学，磨砺于经验，旨在帮助你提升判断力、增进清晰度，让更好的决策持续复利。
          </div>
          <div class="flex flex-wrap gap-[12px] mt-[24px]">
            <span class="atlas-tag">🧠 360+ 核心概念</span>
            <span class="atlas-tag">📐 10 大认知维度</span>
            <span class="atlas-tag">🔗 概念关系网络</span>
            <span class="atlas-tag">💎 深度解读文章</span>
          </div>
        </div>
        <div class="flex items-center justify-center flex-1 atlas-visual">
          <div class="atlas-orbit-container">
            <div class="atlas-core">🌐</div>
            <div class="orbit orbit-1"></div>
            <div class="orbit orbit-2"></div>
            <div class="orbit orbit-3"></div>
            <div class="orbit-dot dot-1"></div>
            <div class="orbit-dot dot-2"></div>
            <div class="orbit-dot dot-3"></div>
            <div class="orbit-dot dot-4"></div>
            <div class="orbit-dot dot-5"></div>
          </div>
        </div>
      </div>
    </article>

    <div class="atlas-grid-container w-full desktop:w-[1200px] mb-[16px] laptop:mb-[32px] desktop:mb-[160px]">
      <div class="atlas-grid">
        <a v-for="(category, index) in categories" :key="index" class="atlas-card" :class="`atlas-card-${index + 1}`"
          :href="category.url" target="_blank" rel="noopener noreferrer" :aria-label="`查看${category.name}分类`">
          <div class="atlas-card-accent" :style="{ background: category.accent }"></div>
          <div class="atlas-card-body">
            <div class="atlas-card-header">
              <span class="atlas-card-icon">{{ category.icon }}</span>
              <span class="atlas-card-count">{{ category.count }}</span>
            </div>
            <strong class="atlas-card-name">{{ category.name }}</strong>
            <span class="atlas-card-name-en">{{ category.nameEn }}</span>
            <p class="atlas-card-desc">{{ category.desc }}</p>
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
    name: '思维',
    nameEn: 'Thinking',
    icon: '💡',
    count: '35',
    desc: '从第一性原理到贝叶斯思维，认知是你的操作系统。',
    url: 'https://meta.niceshare.site/thinking/',
    accent: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    name: '效应',
    nameEn: 'Effects',
    icon: '🎭',
    count: '50',
    desc: '邓宁-克鲁格、确认偏误、损失厌恶——人类心智的默认程序。',
    url: 'https://meta.niceshare.site/effects/',
    accent: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    name: '定律',
    nameEn: 'Laws',
    icon: '⚖️',
    count: '35',
    desc: '帕累托法则、墨菲定律、摩尔定律——世界运行的稳定规则。',
    url: 'https://meta.niceshare.site/laws/',
    accent: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  },
  {
    name: '模型',
    nameEn: 'Models',
    icon: '🔧',
    count: '35',
    desc: '飞轮效应、复利模型、囚徒困境——拆解复杂性的可复用思维工具。',
    url: 'https://meta.niceshare.site/models/',
    accent: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
  },
  {
    name: '方法',
    nameEn: 'Methods',
    icon: '🛠️',
    count: '35',
    desc: '费曼技巧、OODA 循环、OKR——将思维转化为行动的可执行流程。',
    url: 'https://meta.niceshare.site/methods/',
    accent: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
  },
  {
    name: '原则',
    nameEn: 'Principles',
    icon: '🧭',
    count: '30',
    desc: 'KISS、奥卡姆剃刀、反脆弱——压力之下保持清醒的决策过滤器。',
    url: 'https://meta.niceshare.site/principles/',
    accent: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)'
  },
  {
    name: '谬误',
    nameEn: 'Fallacies',
    icon: '🚫',
    count: '35',
    desc: '稻草人、人身攻击、滑坡论证——识别谬误让你的论证无懈可击。',
    url: 'https://meta.niceshare.site/fallacies/',
    accent: 'linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)'
  },
  {
    name: '悖论',
    nameEn: 'Paradoxes',
    icon: '♾️',
    count: '32',
    desc: '费米悖论、忒修斯之船、斯托克代尔悖论——复杂性的最高浓缩。',
    url: 'https://meta.niceshare.site/paradoxes/',
    accent: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)'
  },
  {
    name: '策略',
    nameEn: 'Strategies',
    icon: '♟️',
    count: '35',
    desc: '蓝海战略、以牙还牙、BATNA——在竞争与合作中找到最优路径。',
    url: 'https://meta.niceshare.site/strategies/',
    accent: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)'
  },
  {
    name: '哲学',
    nameEn: 'Philosophy',
    icon: '🏛️',
    count: '45',
    desc: '斯多葛、存在主义、道家——一切思维工具的基岩。',
    url: 'https://meta.niceshare.site/philosophy/',
    accent: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)'
  }
]

export default {
  name: 'WisdomAtlas',

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
      gsap.from('.atlas-intro', {
        scrollTrigger: {
          trigger: '.atlas-intro',
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

      gsap.from('.atlas-orbit-container', {
        scrollTrigger: {
          trigger: '.atlas-orbit-container',
          markers: false,
          start: 'top 80%',
          end: 'bottom 200px',
          toggleActions: 'restart none none reverse'
        },
        duration: 1.2,
        scale: 0,
        rotation: -90,
        opacity: 0,
        ease: 'elastic.out(1, 0.6)',
        delay: 0.2
      })

      gsap.from('.atlas-tag', {
        scrollTrigger: {
          trigger: '.atlas-tag',
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

      const cards = gsap.utils.toArray('.atlas-card')
      cards.forEach((card, index) => {
        const row = Math.floor(index / 5)
        const col = index % 5
        const originX = (col - 2) * 15
        const originY = row === 0 ? -40 : 40

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
          scale: 0.85,
          ease: 'back.out(1.4)',
          delay: index * 0.06
        })
      })
    }
  }
}
</script>

<style scoped lang="scss">
.wisdom-atlas-section {
  isolation: isolate;
}

.atlas-intro {
  border: 1px solid rgba(15, 23, 42, 0.06);
  box-shadow: 0 10px 30px rgba(17, 24, 39, 0.06);
  transition: box-shadow 0.3s ease, transform 0.3s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(15, 23, 42, 0.12);
    box-shadow: 0 24px 50px rgba(17, 24, 39, 0.12);
  }
}

.atlas-tag {
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
    background: #f0f0f2;
    color: #3c4043;
    box-shadow: 0 6px 16px rgba(17, 24, 39, 0.08);
  }
}

/* ─── Orbit visual ─────────────────────────────────────────────────── */
.atlas-visual {
  min-height: 200px;
}

.atlas-orbit-container {
  position: relative;
  width: 180px;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.atlas-core {
  font-size: 64px;
  z-index: 3;
  filter: drop-shadow(0 6px 18px rgba(17, 24, 39, 0.16));
  animation: core-breathe 4s ease-in-out infinite;
}

@keyframes core-breathe {

  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.06);
  }
}

.orbit {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(15, 23, 42, 0.06);
  animation: orbit-spin 20s linear infinite;

  &.orbit-1 {
    width: 100px;
    height: 100px;
    border-color: rgba(102, 126, 234, 0.15);
  }

  &.orbit-2 {
    width: 140px;
    height: 140px;
    border-color: rgba(240, 147, 251, 0.12);
    animation-duration: 30s;
    animation-direction: reverse;
  }

  &.orbit-3 {
    width: 176px;
    height: 176px;
    border-color: rgba(79, 172, 254, 0.10);
    animation-duration: 40s;
  }
}

@keyframes orbit-spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.orbit-dot {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  z-index: 2;

  &.dot-1 {
    background: #667eea;
    animation: orbit-dot-1 20s linear infinite;
  }

  &.dot-2 {
    background: #f093fb;
    animation: orbit-dot-2 30s linear infinite reverse;
  }

  &.dot-3 {
    background: #4facfe;
    animation: orbit-dot-3 40s linear infinite;
  }

  &.dot-4 {
    background: #43e97b;
    animation: orbit-dot-4 25s linear infinite reverse;
  }

  &.dot-5 {
    background: #fa709a;
    animation: orbit-dot-5 35s linear infinite;
  }
}

@keyframes orbit-dot-1 {
  from {
    transform: rotate(0deg) translateX(50px) rotate(0deg);
  }

  to {
    transform: rotate(360deg) translateX(50px) rotate(-360deg);
  }
}

@keyframes orbit-dot-2 {
  from {
    transform: rotate(0deg) translateX(70px) rotate(0deg);
  }

  to {
    transform: rotate(360deg) translateX(70px) rotate(-360deg);
  }
}

@keyframes orbit-dot-3 {
  from {
    transform: rotate(120deg) translateX(88px) rotate(-120deg);
  }

  to {
    transform: rotate(480deg) translateX(88px) rotate(-480deg);
  }
}

@keyframes orbit-dot-4 {
  from {
    transform: rotate(200deg) translateX(70px) rotate(-200deg);
  }

  to {
    transform: rotate(560deg) translateX(70px) rotate(-560deg);
  }
}

@keyframes orbit-dot-5 {
  from {
    transform: rotate(60deg) translateX(88px) rotate(-60deg);
  }

  to {
    transform: rotate(420deg) translateX(88px) rotate(-420deg);
  }
}

/* ─── Category grid ────────────────────────────────────────────────── */
.atlas-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
  }
}

.atlas-card {
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
    box-shadow: 0 20px 44px rgba(17, 24, 39, 0.12);
    border-color: rgba(15, 23, 42, 0.12);

    .atlas-card-accent {
      height: 4px;
    }

    .atlas-card-icon {
      transform: scale(1.15);
    }
  }

  &:focus-visible {
    outline: 2px solid rgba(102, 126, 234, 0.5);
    outline-offset: 2px;
  }
}

.atlas-card-accent {
  height: 3px;
  width: 100%;
  transition: height 0.3s ease;
}

.atlas-card-body {
  padding: 20px 18px 22px;

  @media screen and (min-width: 1440px) {
    padding: 22px 20px 26px;
  }
}

.atlas-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
}

.atlas-card-icon {
  font-size: 32px;
  transition: transform 0.3s ease;

  @media screen and (min-width: 1440px) {
    font-size: 36px;
  }
}

.atlas-card-count {
  font-size: 13px;
  font-weight: 600;
  color: #86868B;
  background: #f5f5f7;
  padding: 3px 10px;
  border-radius: 999px;
  letter-spacing: 0.02em;
}

.atlas-card-name {
  display: block;
  font-size: 18px;
  font-weight: 700;
  color: #1D1D1F;
  line-height: 1.3;
  margin-bottom: 2px;
  font-family: 'VIVO-FONT-WEB-BOLD', sans-serif;

  @media screen and (min-width: 1440px) {
    font-size: 20px;
  }
}

.atlas-card-name-en {
  display: block;
  font-size: 12px;
  color: #86868B;
  letter-spacing: 0.04em;
  margin-bottom: 10px;
}

.atlas-card-desc {
  font-size: 13px;
  line-height: 1.6;
  color: #86868B;
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
  .wisdom-atlas-section {
    background: #FAFBFC;
  }

  .atlas-card {
    border-radius: 16px;
  }

  .atlas-card-body {
    padding: 16px 14px 18px;
  }

  .atlas-orbit-container {
    width: 140px;
    height: 140px;
  }

  .atlas-core {
    font-size: 48px;
  }

  .orbit {
    &.orbit-1 {
      width: 80px;
      height: 80px;
    }

    &.orbit-2 {
      width: 110px;
      height: 110px;
    }

    &.orbit-3 {
      width: 136px;
      height: 136px;
    }
  }
}

@media (prefers-reduced-motion: reduce) {

  .atlas-core,
  .orbit,
  .orbit-dot {
    animation: none;
  }
}
</style>
