<template>
  <section
    class="section-container w-full bg-[#FAFBFC] desktop:bg-white flex flex-col items-start desktop:items-center tablet:px-[16px] laptop:px-[32px]"
    aria-label="智析单词书展示区">

    <div
      class="flex flex-row w-full !items-center module-warpper tablet:mt-[30px] laptop:mt-[58px] desktop:mt-[160px] tablet:mb-[16px] laptop:mb-[34px] desktop:mb-[80px]">
      <h2 class="font-medium large-title vivo-blod-font" id="gpt-wordbook">智析单词书</h2>
    </div>

    <!-- 主介绍区域 -->
    <article
      class="intro-card w-full desktop:w-[1200px] mb-[16px] laptop:mb-[32px] desktop:mb-[60px] bg-white rounded-[20px] desktop:rounded-[30px] p-[24px] laptop:p-[40px] desktop:p-[60px] shadow-lg"
      role="article" aria-labelledby="wordbook-intro">
      <div class="flex flex-col desktop:flex-row items-center gap-[30px] laptop:gap-[50px]">
        <div class="flex-1 text-left desktop:my-auto">
          <h3
            class="tablet:text-[20px] text-[48px] laptop:text-[58px] tablet:leading-[32px] leading-[58px] vivo-blod-font font-medium mb-[16px] laptop:mb-[20px] desktop:mb-[24px] text-[#1D1D1F]">
            <a class="gradient-text" href="https://word.lovejade.cn/" target="_blank" rel="noopener noreferrer"
              aria-label="访问智析单词书应用">
              GPT Wordbook
            </a>
          </h3>
          <div
            class="tablet:text-[14px] text-[18px] laptop:text-[20px] tablet:leading-[24px] leading-[36px] text-[#86868B] desktop:text-[#666666]">
            智析单词书是 AI 驱动的深度英语词汇学习平台，精选 11000+ 核心词汇，利用 GPT 模型深度解析每个单词的词义、发音、例句、词根、词缀、同义词、反义词、文化内涵与使用场景，从理解本质出发构建长期记忆。
          </div>
          <div class="flex flex-wrap gap-[12px] mt-[24px]">
            <span class="feature-tag">🤖 AI 深度解析</span>
            <span class="feature-tag">📚 11000+ 核心词汇</span>
            <span class="feature-tag">🎯 词根词缀分析</span>
            <span class="feature-tag">💡 文化内涵解读</span>
          </div>
        </div>
        <div class="flex items-center justify-center flex-1 wordbook-visual">
          <div class="wordbook-icon-container">
            <div class="wordbook-icon">📖</div>
            <div class="wordbook-glow"></div>
          </div>
        </div>
      </div>
    </article>

    <!-- 单词卡片展示区域 -->
    <div class="word-cards-container w-full desktop:w-[1200px] mb-[16px] laptop:mb-[32px] desktop:mb-[160px]">
      <div class="word-cards-grid">
        <div v-for="(word, index) in wordList" :key="index" class="word-card" :class="`word-card-${index + 1}`"
          @mouseenter="handleCardHover(index)" @mouseleave="handleCardLeave(index)">
          <div class="word-card-inner">
            <div class="word-card-front">
              <div class="word-text">{{ word.word }}</div>
              <div class="word-phonetic">{{ word.phonetic }}</div>
              <div class="word-meaning">{{ word.meaning }}</div>
            </div>
            <div class="word-card-back">
              <div class="word-detail-title">深度解析</div>
              <div class="word-detail-item">
                <span class="detail-label">词根词缀：</span>
                <span class="detail-value">{{ word.etymology }}</span>
              </div>
              <div class="word-detail-item">
                <span class="detail-label">例句：</span>
                <span class="detail-value">{{ word.example }}</span>
              </div>
              <div class="word-detail-item">
                <span class="detail-label">同义词：</span>
                <span class="detail-value">{{ word.synonyms }}</span>
              </div>
            </div>
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

const WORD_LIST = [
  {
    word: 'Serendipity',
    phonetic: '/ˌserənˈdɪpəti/',
    meaning: '意外发现珍奇事物的本领',
    etymology: 'seren (快乐) + dipity (偶然)',
    example: 'Finding this book was pure serendipity.',
    synonyms: 'chance, fortune, luck'
  },
  {
    word: 'Ephemeral',
    phonetic: '/ɪˈfemərəl/',
    meaning: '短暂的，转瞬即逝的',
    etymology: 'epi (在...上) + hemera (天)',
    example: 'Fame is often ephemeral.',
    synonyms: 'transient, fleeting, short-lived'
  },
  {
    word: 'Resilience',
    phonetic: '/rɪˈzɪliəns/',
    meaning: '韧性，恢复力',
    etymology: 're (向后) + silire (跳)',
    example: 'Her resilience helped her overcome the challenge.',
    synonyms: 'toughness, endurance, strength'
  },
  {
    word: 'Eloquent',
    phonetic: '/ˈeləkwənt/',
    meaning: '雄辩的，有说服力的',
    etymology: 'e (向外) + loqui (说话)',
    example: 'She gave an eloquent speech.',
    synonyms: 'articulate, fluent, expressive'
  }
]

export default {
  name: 'GPTWordbook',

  data() {
    return {
      wordList: Object.freeze(WORD_LIST),
      hoveredCard: null
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
      // 介绍卡片动画
      gsap.from('.intro-card', {
        scrollTrigger: {
          trigger: '.intro-card',
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

      // 单词卡片动画 - 依次飞入
      const wordCards = gsap.utils.toArray('.word-card')
      wordCards.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            markers: false,
            start: 'top 85%',
            end: 'bottom 200px',
            toggleActions: 'restart none none reverse'
          },
          duration: 0.6,
          y: 60,
          x: index % 2 === 0 ? -30 : 30,
          opacity: 0,
          rotation: index % 2 === 0 ? -3 : 3,
          ease: 'back.out(1.7)',
          delay: index * 0.1
        })
      })

      // 图标动画
      gsap.from('.wordbook-icon', {
        scrollTrigger: {
          trigger: '.wordbook-icon-container',
          markers: false,
          start: 'top 80%',
          end: 'bottom 200px',
          toggleActions: 'restart none none reverse'
        },
        duration: 1,
        scale: 0,
        rotation: -180,
        ease: 'elastic.out(1, 0.5)'
      })

      // 光晕动画
      gsap.from('.wordbook-glow', {
        scrollTrigger: {
          trigger: '.wordbook-icon-container',
          markers: false,
          start: 'top 80%',
          end: 'bottom 200px',
          toggleActions: 'restart none none reverse'
        },
        duration: 1.2,
        scale: 0,
        opacity: 0,
        ease: 'power2.out',
        delay: 0.3
      })

      // 特性标签动画
      gsap.from('.feature-tag', {
        scrollTrigger: {
          trigger: '.feature-tag',
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
    },

    handleCardHover(index) {
      if (isSmallerScreen()) return

      const card = document.querySelector(`.word-card-${index + 1}`)
      if (card) {
        gsap.to(card.querySelector('.word-card-inner'), {
          rotateY: 180,
          duration: 0.6,
          ease: 'power2.inOut'
        })
      }
    },

    handleCardLeave(index) {
      if (isSmallerScreen()) return

      const card = document.querySelector(`.word-card-${index + 1}`)
      if (card) {
        gsap.to(card.querySelector('.word-card-inner'), {
          rotateY: 0,
          duration: 0.6,
          ease: 'power2.inOut'
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.intro-card {
  border: 1px solid rgba(15, 23, 42, 0.06);
  box-shadow: 0 10px 30px rgba(17, 24, 39, 0.06);
  transition: box-shadow 0.3s ease, transform 0.3s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(15, 23, 42, 0.12);
    box-shadow: 0 24px 50px rgba(17, 24, 39, 0.12);
  }
}

.feature-tag {
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

.wordbook-visual {
  min-height: 200px;
}

.wordbook-icon-container {
  position: relative;
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.wordbook-icon {
  font-size: 100px;
  z-index: 2;
  filter: drop-shadow(0 6px 14px rgba(17, 24, 39, 0.14));
}

.wordbook-glow {
  position: absolute;
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, rgba(15, 23, 42, 0.12) 0%, rgba(15, 23, 42, 0.05) 70%, transparent 100%);
  border-radius: 50%;
  z-index: 1;
  animation: pulse 3s ease-in-out infinite;
}

@keyframes pulse {

  0%,
  100% {
    transform: scale(1);
    opacity: 0.6;
  }

  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
}

.word-cards-container {
  perspective: 1000px;
}

.word-cards-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
  }
}

.word-card {
  height: 280px;
  cursor: pointer;
  perspective: 1000px;

  @media screen and (min-width: 1440px) {
    height: 320px;
  }
}

.word-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  border-radius: 20px;
  border: 1px solid rgba(15, 23, 42, 0.06);
  box-shadow: 0 10px 30px rgba(17, 24, 39, 0.06);
}

.word-card-front,
.word-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.word-card-front {
  background: #ffffff;
  color: #1D1D1F;
}

.word-card-back {
  background: #f5f5f7;
  color: #1D1D1F;
  transform: rotateY(180deg);
}

.word-text {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 8px;
  font-family: 'VIVO-FONT-WEB-BOLD', sans-serif;

  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }
}

.word-phonetic {
  font-size: 16px;
  opacity: 0.7;
  margin-bottom: 16px;
  font-family: 'Courier New', monospace;

  @media screen and (min-width: 1440px) {
    font-size: 18px;
  }
}

.word-meaning {
  font-size: 16px;
  line-height: 1.6;
  color: #666666;

  @media screen and (min-width: 1440px) {
    font-size: 18px;
  }
}

.word-detail-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
  font-family: 'VIVO-FONT-WEB-BOLD', sans-serif;
  color: #1D1D1F;

  @media screen and (min-width: 1440px) {
    font-size: 24px;
  }
}

.word-detail-item {
  width: 100%;
  text-align: left;
  margin-bottom: 12px;
  font-size: 14px;
  line-height: 1.6;
  color: #666666;

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
}

.detail-label {
  font-weight: 600;
  color: #1D1D1F;
}

.detail-value {
  color: #666666;
}

// 移动端优化
@media screen and (max-width: 767px) {
  .word-card-inner {
    transform: rotateY(0) !important;
  }

  .word-card-back {
    display: none;
  }

  .word-card {
    height: auto;
    min-height: 200px;
  }

  .word-card-front {
    position: relative;
  }
}
</style>
