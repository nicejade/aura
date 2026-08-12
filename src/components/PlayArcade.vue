<template>
  <section
    class="play-arcade-section w-full bg-[#FAFBFC] desktop:bg-white flex flex-col items-start desktop:items-center tablet:px-[16px] laptop:px-[32px]"
    aria-label="逸趣游乐坊展示区">

    <div
      class="flex flex-row w-full !items-center module-warpper tablet:mt-[30px] laptop:mt-[58px] desktop:mt-[160px] tablet:mb-[16px] laptop:mb-[34px] desktop:mb-[80px]">
      <h2 class="font-medium large-title vivo-blod-font" id="play-arcade-title">逸趣游乐坊</h2>
    </div>

    <article
      class="play-intro w-full desktop:w-[1200px] mb-[16px] laptop:mb-[32px] desktop:mb-[60px] bg-white rounded-[20px] desktop:rounded-[30px] p-[24px] laptop:p-[40px] desktop:p-[60px]"
      role="article" aria-labelledby="play-intro-title">
      <div class="flex flex-col desktop:flex-row items-center gap-[30px] laptop:gap-[50px]">
        <div class="flex-1 text-left desktop:my-auto">
          <h3
            class="tablet:text-[20px] text-[48px] laptop:text-[58px] tablet:leading-[32px] leading-[58px] vivo-blod-font font-medium mb-[16px] laptop:mb-[20px] desktop:mb-[24px] text-[#1D1D1F]"
            id="play-intro-title">
            <a class="gradient-text" href="https://play.niceshare.site/" target="_blank" rel="noopener noreferrer"
              aria-label="访问逸趣游乐坊">
              Yiqu Playground
            </a>
          </h3>
          <div
            class="tablet:text-[14px] text-[18px] laptop:text-[20px] tablet:leading-[24px] leading-[36px] text-[#86868B] desktop:text-[#666666]">
            一处静心游乐，几款经典常在。汇聚 Threes!、2048、扫雷、数独、华容道、五子棋、围棋等经典益智游戏；进度存本机，开箱即玩，无需注册，支持键盘与触控。
          </div>
          <div class="flex flex-wrap gap-[12px] mt-[24px]">
            <span class="play-tag">🎮 30+ 经典游戏</span>
            <span class="play-tag">💾 本机存档</span>
            <span class="play-tag">📱 触控友好</span>
            <span class="play-tag">🔓 免注册</span>
          </div>
        </div>
        <div class="flex items-center justify-center flex-1 play-visual" aria-hidden="true">
          <div class="play-board-container">
            <div class="play-board">
              <span v-for="(tile, index) in boardTiles" :key="index" class="play-tile"
                :class="`play-tile-${tile.tone}`" :style="{ animationDelay: `${tile.delay}s` }">
                {{ tile.label }}
              </span>
            </div>
            <div class="play-board-glow"></div>
          </div>
        </div>
      </div>
    </article>

    <div class="play-grid-container w-full desktop:w-[1200px] mb-[16px] laptop:mb-[32px] desktop:mb-[160px]">
      <div class="play-grid">
        <a v-for="(category, index) in categories" :key="index" class="play-card" :class="`play-card-${index + 1}`"
          :href="category.url" target="_blank" rel="noopener noreferrer" :aria-label="`前往${category.name}：${category.badge}`">
          <div class="play-card-accent" :style="{ background: category.accent }"></div>
          <div class="play-card-body">
            <div class="play-card-header">
              <span class="play-card-icon">{{ category.icon }}</span>
              <span class="play-card-count">{{ category.badge }}</span>
            </div>
            <strong class="play-card-name">{{ category.name }}</strong>
            <span class="play-card-name-en">{{ category.nameEn }}</span>
            <p class="play-card-desc">{{ category.desc }}</p>
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

const BOARD_TILES = [
  { label: '2', tone: 'amber', delay: 0 },
  { label: '4', tone: 'coral', delay: 0.12 },
  { label: '8', tone: 'teal', delay: 0.24 },
  { label: '⚑', tone: 'slate', delay: 0.08 },
  { label: '♠', tone: 'ink', delay: 0.2 },
  { label: '16', tone: 'sky', delay: 0.32 },
  { label: '●', tone: 'stone', delay: 0.16 },
  { label: '○', tone: 'mist', delay: 0.28 },
  { label: '◆', tone: 'rose', delay: 0.36 }
]

const CATEGORIES = [
  {
    name: '逻辑',
    nameEn: 'Logic',
    icon: '🧩',
    badge: '扫雷',
    desc: '扫雷、数独、点灯——推理排雷与格点逻辑，冷静推演即可通关。',
    url: 'https://play.niceshare.site/games/minesweeper',
    accent: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    name: '棋类',
    nameEn: 'Board',
    icon: '♟️',
    badge: '五子棋',
    desc: '五子棋、围棋、象棋——经典盘面人机对弈，战绩与进度保存在本机。',
    url: 'https://play.niceshare.site/games/gomoku',
    accent: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    name: '算数',
    nameEn: 'Number',
    icon: '🔢',
    badge: '2048',
    desc: '2048、Threes!、24 点——滑动合并与心算挑战，数字乐趣开箱即玩。',
    url: 'https://play.niceshare.site/games/2048',
    accent: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  },
  {
    name: '空间',
    nameEn: 'Spatial',
    icon: '🧊',
    badge: '华容道',
    desc: '华容道、推箱子、汉诺塔——滑动、推挤与堆叠，锻炼空间直觉。',
    url: 'https://play.niceshare.site/games/klotski',
    accent: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
  },
  {
    name: '反应',
    nameEn: 'Reflex',
    icon: '⚡',
    badge: '方块',
    desc: '俄罗斯方块、贪吃蛇、宝石迷阵——节奏与手速的经典对决。',
    url: 'https://play.niceshare.site/games/tetris',
    accent: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
  },
  {
    name: '记忆',
    nameEn: 'Memory',
    icon: '🧠',
    badge: '翻牌',
    desc: '猜词、记忆翻牌、舒尔特方格——短时专注与记忆力的轻量训练。',
    url: 'https://play.niceshare.site/games/memory',
    accent: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)'
  }
]

export default {
  name: 'PlayArcade',

  data() {
    return {
      boardTiles: Object.freeze(BOARD_TILES),
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
      gsap.from('.play-intro', {
        scrollTrigger: {
          trigger: '.play-intro',
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

      gsap.from('.play-board-container', {
        scrollTrigger: {
          trigger: '.play-board-container',
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

      gsap.from('.play-tag', {
        scrollTrigger: {
          trigger: '.play-tag',
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

      const cards = gsap.utils.toArray('.play-card')
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
.play-arcade-section {
  isolation: isolate;
}

.play-intro {
  border: 1px solid rgba(15, 23, 42, 0.06);
  box-shadow: 0 10px 30px rgba(17, 24, 39, 0.06);
  transition: box-shadow 0.3s ease, transform 0.3s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(15, 23, 42, 0.12);
    box-shadow: 0 24px 50px rgba(17, 24, 39, 0.12);
  }
}

.play-tag {
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

/* ─── Board visual ──────────────────────────────────────────────────── */
.play-visual {
  min-height: 200px;
}

.play-board-container {
  position: relative;
  width: 180px;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.play-board {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  width: 156px;
  height: 156px;
  padding: 10px;
  border-radius: 18px;
  background:
    linear-gradient(145deg, rgba(13, 122, 111, 0.08), rgba(245, 158, 11, 0.06)),
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 22px,
      rgba(15, 23, 42, 0.04) 22px,
      rgba(15, 23, 42, 0.04) 23px
    ),
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 22px,
      rgba(15, 23, 42, 0.04) 22px,
      rgba(15, 23, 42, 0.04) 23px
    ),
    #f8faf9;
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 12px 28px rgba(17, 24, 39, 0.1);
}

.play-tile {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 700;
  color: #1d1d1f;
  box-shadow: 0 4px 10px rgba(17, 24, 39, 0.08);
  animation: tile-pulse 3.6s ease-in-out infinite;

  &.play-tile-amber {
    background: linear-gradient(135deg, #fde68a, #f59e0b);
  }

  &.play-tile-coral {
    background: linear-gradient(135deg, #fecdd3, #fb7185);
  }

  &.play-tile-teal {
    background: linear-gradient(135deg, #99f6e4, #0d7a6f);
    color: #f7faf9;
  }

  &.play-tile-slate {
    background: linear-gradient(135deg, #e2e8f0, #94a3b8);
  }

  &.play-tile-ink {
    background: linear-gradient(135deg, #334155, #0f172a);
    color: #f8fafc;
  }

  &.play-tile-sky {
    background: linear-gradient(135deg, #bae6fd, #38bdf8);
  }

  &.play-tile-stone {
    background: linear-gradient(135deg, #d6d3d1, #78716c);
    color: #fafaf9;
  }

  &.play-tile-mist {
    background: linear-gradient(135deg, #f1f5f9, #cbd5e1);
  }

  &.play-tile-rose {
    background: linear-gradient(135deg, #fbcfe8, #e879f9);
  }
}

.play-board-glow {
  position: absolute;
  inset: 12px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(13, 122, 111, 0.18), transparent 70%);
  filter: blur(8px);
  z-index: 1;
  animation: board-glow 4.5s ease-in-out infinite;
}

@keyframes tile-pulse {
  0%,
  100% {
    transform: translateY(0) scale(1);
  }

  50% {
    transform: translateY(-3px) scale(1.04);
  }
}

@keyframes board-glow {
  0%,
  100% {
    opacity: 0.55;
    transform: scale(0.96);
  }

  50% {
    opacity: 0.9;
    transform: scale(1.05);
  }
}

/* ─── Category grid ────────────────────────────────────────────────── */
.play-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
}

.play-card {
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

    .play-card-accent {
      height: 4px;
    }

    .play-card-icon {
      transform: scale(1.15);
    }
  }

  &:focus-visible {
    outline: 2px solid rgba(13, 122, 111, 0.45);
    outline-offset: 2px;
  }
}

.play-card-accent {
  height: 3px;
  width: 100%;
  transition: height 0.3s ease;
}

.play-card-body {
  padding: 20px 18px 22px;

  @media screen and (min-width: 1440px) {
    padding: 22px 20px 26px;
  }
}

.play-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
}

.play-card-icon {
  font-size: 32px;
  transition: transform 0.3s ease;

  @media screen and (min-width: 1440px) {
    font-size: 36px;
  }
}

.play-card-count {
  font-size: 13px;
  font-weight: 600;
  color: #86868B;
  background: #f5f5f7;
  padding: 3px 10px;
  border-radius: 999px;
  letter-spacing: 0.02em;
}

.play-card-name {
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

.play-card-name-en {
  display: block;
  font-size: 12px;
  color: #86868B;
  letter-spacing: 0.04em;
  margin-bottom: 10px;
}

.play-card-desc {
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
  .play-arcade-section {
    background: #FAFBFC;
  }

  .play-card {
    border-radius: 16px;
  }

  .play-card-body {
    padding: 16px 14px 18px;
  }

  .play-board-container {
    width: 140px;
    height: 140px;
  }

  .play-board {
    width: 124px;
    height: 124px;
    gap: 6px;
    padding: 8px;
    border-radius: 14px;
  }

  .play-tile {
    border-radius: 8px;
    font-size: 12px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .play-tile,
  .play-board-glow {
    animation: none;
  }
}
</style>
