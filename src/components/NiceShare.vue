<template>
  <section class="flex flex-col items-center w-full overflow-hidden niceshare-section" aria-label="逍遥自在轩展示区">
    <div class="relative w-full niceshare-bg">
      <div class="ambient-layer" aria-hidden="true">
        <div class="ambient-orb orb-1"></div>
        <div class="ambient-orb orb-2"></div>
        <div class="ambient-orb orb-3"></div>
      </div>

      <div
        class="relative z-10 w-full flex flex-col items-center tablet:py-[60px] laptop:py-[100px] desktop:py-[160px] tablet:px-[16px] laptop:px-[32px]">
        <div class="niceshare-header text-center tablet:mb-[32px] laptop:mb-[50px] desktop:mb-[80px]">
          <h2
            class="niceshare-title vivo-blod-font font-bold tablet:text-[28px] laptop:text-[56px] desktop:text-[72px] tablet:leading-[36px] laptop:leading-[68px] desktop:leading-[84px] tablet:mb-[12px] laptop:mb-[16px] desktop:mb-[20px]">
            逍遥自在轩
          </h2>
          <p
            class="niceshare-subtitle tablet:text-[14px] laptop:text-[20px] desktop:text-[24px] tablet:leading-[22px] laptop:leading-[32px] desktop:leading-[38px]">
            应无所住，而生其心
          </p>
          <p
            class="niceshare-desc tablet:text-[12px] laptop:text-[15px] desktop:text-[17px] tablet:leading-[20px] laptop:leading-[26px] desktop:leading-[28px] max-w-[560px] mx-auto tablet:mt-[8px] laptop:mt-[12px] desktop:mt-[16px]">
            汇聚生活和工作中频繁使用的工具、软件和服务
          </p>
        </div>

        <div class="ns-grid-wrapper w-full desktop:w-[1200px] tablet:mb-[32px] laptop:mb-[50px] desktop:mb-[72px]">
          <div class="ns-grid">
            <a v-for="(cat, index) in categories" :key="cat.name" class="ns-card" :class="`ns-card-${index}`"
              :href="cat.url" target="_blank" rel="noopener noreferrer" :aria-label="`浏览${cat.name}分类`">
              <span class="ns-card-glow" :style="{ background: cat.glow }" aria-hidden="true"></span>
              <span class="ns-card-icon">{{ cat.icon }}</span>
              <span class="ns-card-label">{{ cat.name }}</span>
            </a>
          </div>
        </div>

        <a class="ns-cta outline-none flex justify-center items-center tablet:px-[20px] tablet:h-[38px] laptop:px-[32px] laptop:h-[52px] desktop:px-[36px] desktop:h-[56px] tablet:text-[13px] laptop:text-[18px] desktop:text-[19px] rounded-[28px] text-white"
          href="https://www.niceshare.site/" target="_blank" rel="noopener noreferrer" aria-label="访问逍遥自在轩">
          探索更多
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
    name: '个人作品',
    icon: '🎨',
    url: 'https://www.niceshare.site/#个人作品',
    glow: 'radial-gradient(circle, rgba(245,158,11,0.35) 0%, transparent 70%)',
  },
  {
    name: '人工智能',
    icon: '🤖',
    url: 'https://www.niceshare.site/#人工智能',
    glow: 'radial-gradient(circle, rgba(139,92,246,0.35) 0%, transparent 70%)',
  },
  {
    name: '智能代理',
    icon: '🧠',
    url: 'https://www.niceshare.site/#智能代理',
    glow: 'radial-gradient(circle, rgba(59,130,246,0.35) 0%, transparent 70%)',
  },
  {
    name: '编码开发',
    icon: '💻',
    url: 'https://www.niceshare.site/#编码开发',
    glow: 'radial-gradient(circle, rgba(16,185,129,0.35) 0%, transparent 70%)',
  },
  {
    name: '智能搜索',
    icon: '🔍',
    url: 'https://www.niceshare.site/#智能搜索',
    glow: 'radial-gradient(circle, rgba(244,63,94,0.35) 0%, transparent 70%)',
  },
  {
    name: '常用软件',
    icon: '📦',
    url: 'https://www.niceshare.site/#常用软件',
    glow: 'radial-gradient(circle, rgba(20,184,166,0.35) 0%, transparent 70%)',
  },
  {
    name: '在线服务',
    icon: '☁️',
    url: 'https://www.niceshare.site/#在线服务',
    glow: 'radial-gradient(circle, rgba(99,102,241,0.35) 0%, transparent 70%)',
  },
  {
    name: '终端工具',
    icon: '⌨️',
    url: 'https://www.niceshare.site/#终端工具',
    glow: 'radial-gradient(circle, rgba(234,179,8,0.35) 0%, transparent 70%)',
  },
  {
    name: '前端开发',
    icon: '🌐',
    url: 'https://www.niceshare.site/#前端开发',
    glow: 'radial-gradient(circle, rgba(236,72,153,0.35) 0%, transparent 70%)',
  },
  {
    name: '部署服务',
    icon: '🚀',
    url: 'https://www.niceshare.site/#部署服务',
    glow: 'radial-gradient(circle, rgba(14,165,233,0.35) 0%, transparent 70%)',
  },
  {
    name: '文档构建',
    icon: '📝',
    url: 'https://www.niceshare.site/#文档构建',
    glow: 'radial-gradient(circle, rgba(168,85,247,0.35) 0%, transparent 70%)',
  },
  {
    name: '休闲娱乐',
    icon: '🎮',
    url: 'https://www.niceshare.site/#休闲娱乐',
    glow: 'radial-gradient(circle, rgba(251,146,60,0.35) 0%, transparent 70%)',
  },
]

export default {
  name: 'NiceShare',

  data() {
    return {
      categories: Object.freeze(CATEGORIES),
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
      gsap.from('.niceshare-header', {
        scrollTrigger: {
          trigger: '.niceshare-header',
          start: 'top 85%',
          end: 'bottom 200px',
          toggleActions: 'restart none none reverse',
        },
        duration: 0.9,
        y: 60,
        opacity: 0,
        ease: 'power3.out',
      })

      const cards = gsap.utils.toArray('.ns-card')
      cards.forEach((card, index) => {
        const col = index % 6
        const row = Math.floor(index / 6)
        const originX = (col - 2.5) * 20
        const originY = row === 0 ? -50 : 50

        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            end: 'bottom 200px',
            toggleActions: 'restart none none reverse',
          },
          duration: 0.7,
          y: originY,
          x: originX,
          opacity: 0,
          scale: 0.8,
          ease: 'back.out(1.6)',
          delay: index * 0.05,
        })
      })

      gsap.from('.ns-cta', {
        scrollTrigger: {
          trigger: '.ns-cta',
          start: 'top 92%',
          end: 'bottom 200px',
          toggleActions: 'restart none none reverse',
        },
        duration: 0.6,
        y: 30,
        opacity: 0,
        scale: 0.9,
        ease: 'power2.out',
        delay: 0.3,
      })
    },
  },
}
</script>

<style scoped lang="scss">
.niceshare-section {
  isolation: isolate;
}

.niceshare-bg {
  background: linear-gradient(168deg,
      #020810 10%,
      #06101f 30%,
      #0a1628 50%,
      #0d1a30 70%,
      #081226 90%,
      #030a14 100%);
}

/* ─── Ambient glow orbs ──────────────────────────────────────────── */
.ambient-layer {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.ambient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  will-change: transform;
}

.orb-1 {
  width: 500px;
  height: 500px;
  top: -10%;
  left: -8%;
  background: radial-gradient(circle,
      rgba(85, 187, 138, 0.12) 0%,
      rgba(85, 187, 138, 0.04) 50%,
      transparent 70%);
  animation: orb-drift-1 18s ease-in-out infinite;
}

.orb-2 {
  width: 400px;
  height: 400px;
  top: 30%;
  right: -6%;
  background: radial-gradient(circle,
      rgba(99, 102, 241, 0.1) 0%,
      rgba(99, 102, 241, 0.03) 50%,
      transparent 70%);
  animation: orb-drift-2 22s ease-in-out infinite;
}

.orb-3 {
  width: 450px;
  height: 450px;
  bottom: -8%;
  left: 30%;
  background: radial-gradient(circle,
      rgba(236, 72, 153, 0.08) 0%,
      rgba(236, 72, 153, 0.02) 50%,
      transparent 70%);
  animation: orb-drift-3 20s ease-in-out infinite;
}

@keyframes orb-drift-1 {

  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }

  33% {
    transform: translate(40px, 30px) scale(1.08);
  }

  66% {
    transform: translate(-20px, 50px) scale(0.95);
  }
}

@keyframes orb-drift-2 {

  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }

  33% {
    transform: translate(-30px, -40px) scale(1.05);
  }

  66% {
    transform: translate(20px, -20px) scale(0.96);
  }
}

@keyframes orb-drift-3 {

  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }

  33% {
    transform: translate(30px, -20px) scale(1.06);
  }

  66% {
    transform: translate(-40px, 10px) scale(0.94);
  }
}

/* ─── Typography ─────────────────────────────────────────────────── */
.niceshare-title {
  background: linear-gradient(115deg,
      #f7fbff 0%,
      #c9ddf8 30%,
      #55bb8a 55%,
      #d4e8f9 80%,
      #f7fbff 100%);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-font-smoothing: antialiased;
  animation: title-shimmer 8s ease-in-out infinite;
}

@keyframes title-shimmer {

  0%,
  100% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }
}

.niceshare-subtitle {
  color: rgba(210, 225, 250, 0.85);
  letter-spacing: 0.06em;
  font-weight: 300;
}

.niceshare-desc {
  color: rgba(160, 180, 210, 0.6);
  letter-spacing: 0.02em;
}

/* ─── Category grid ──────────────────────────────────────────────── */
.ns-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(6, 1fr);
    gap: 20px;
  }
}

.ns-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 24px 12px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  overflow: hidden;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition:
    transform 0.36s cubic-bezier(0.34, 1.56, 0.64, 1),
    background 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  @media screen and (min-width: 768px) {
    padding: 30px 16px;
    gap: 12px;
  }

  @media screen and (min-width: 1440px) {
    padding: 36px 20px;
    gap: 14px;
    border-radius: 24px;
  }

  &:hover {
    transform: translateY(-6px) scale(1.02);
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.14);
    box-shadow:
      0 20px 48px rgba(0, 0, 0, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);

    .ns-card-glow {
      opacity: 1;
    }

    .ns-card-icon {
      transform: scale(1.15);
    }
  }

  &:focus-visible {
    outline: 2px solid rgba(85, 187, 138, 0.5);
    outline-offset: 2px;
  }
}

.ns-card-glow {
  position: absolute;
  inset: -20%;
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
  z-index: 0;
}

.ns-card-icon {
  position: relative;
  z-index: 1;
  font-size: 32px;
  transition: transform 0.3s ease;

  @media screen and (min-width: 768px) {
    font-size: 36px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 40px;
  }
}

.ns-card-label {
  position: relative;
  z-index: 1;
  font-size: 13px;
  font-weight: 500;
  color: rgba(220, 230, 245, 0.8);
  letter-spacing: 0.03em;
  white-space: nowrap;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 15px;
  }
}

/* ─── CTA button ─────────────────────────────────────────────────── */
.ns-cta {
  background: rgba(85, 187, 138, 0.15);
  border: 1px solid rgba(85, 187, 138, 0.3);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 0.04em;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.08),
    0 8px 24px rgba(0, 0, 0, 0.2);
  transition:
    transform 0.28s ease,
    background 0.28s ease,
    border-color 0.28s ease,
    box-shadow 0.28s ease;

  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
    background: rgba(85, 187, 138, 0.25);
    border-color: rgba(85, 187, 138, 0.5);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.12),
      0 12px 32px rgba(0, 0, 0, 0.3),
      0 0 40px rgba(85, 187, 138, 0.1);
  }
}

/* ─── Reduced motion ─────────────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .ambient-orb {
    animation: none;
  }

  .niceshare-title {
    animation: none;
    background-position: 0% 50%;
  }

  .ns-card,
  .ns-cta {
    transition: none;
  }
}
</style>
