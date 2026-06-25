<template>
  <section
    class="agent-roam-section w-full bg-[#FAFBFC] desktop:bg-white flex flex-col items-start desktop:items-center tablet:px-[16px] laptop:px-[32px]"
    aria-label="智能体漫游展示区">

    <div
      class="flex flex-row w-full !items-center module-warpper tablet:mt-[30px] laptop:mt-[58px] desktop:mt-[160px] tablet:mb-[16px] laptop:mb-[34px] desktop:mb-[80px]">
      <h2 class="font-medium large-title vivo-blod-font" id="agent-roam-title">智能体漫游</h2>
    </div>

    <article
      class="agent-intro w-full desktop:w-[1200px] mb-[16px] laptop:mb-[32px] desktop:mb-[60px] bg-white rounded-[20px] desktop:rounded-[30px] p-[24px] laptop:p-[40px] desktop:p-[60px]"
      role="article" aria-labelledby="agent-intro-title">
      <div class="flex flex-col desktop:flex-row items-center gap-[30px] laptop:gap-[50px]">
        <div class="flex-1 text-left desktop:my-auto">
          <h3
            class="agent-intro-title tablet:text-[20px] text-[48px] laptop:text-[58px] tablet:leading-[32px] leading-[1.2] vivo-blod-font font-medium mb-[16px] laptop:mb-[20px] desktop:mb-[24px] text-[#1D1D1F]"
            id="agent-intro-title">
            <a class="gradient-text" href="https://agent.jeffjade.com/" target="_blank" rel="noopener noreferrer"
              aria-label="访问智能体漫游">
              Agent Roam
            </a>
          </h3>
          <div
            class="tablet:text-[14px] text-[18px] laptop:text-[20px] tablet:leading-[24px] leading-[36px] text-[#86868B] desktop:text-[#666666]">
            专注于快速掌握主流 AI Agent，如 Claude Code、Hermes Agent 等。通过实用教程、案例演示和最新资讯，让开发者和 AI 爱好者轻松上手，探索智能体应用潜力，提升学习效率与实践能力。
          </div>
          <div class="flex flex-wrap gap-[12px] mt-[24px]">
            <span class="agent-tag">🤖 AI Agent 中文知识库</span>
            <span class="agent-tag">📚 系统教程</span>
            <span class="agent-tag">🔄 Agent 循环</span>
            <span class="agent-tag">🛡️ 安全实践</span>
          </div>
        </div>
        <div class="flex items-center justify-center flex-1 agent-visual">
          <div class="agent-loop-container" aria-hidden="true">
            <div class="loop-ring ring-outer"></div>
            <div class="loop-ring ring-inner"></div>
            <div class="loop-core">🧠</div>
            <div class="loop-node node-plan">Plan</div>
            <div class="loop-node node-act">Act</div>
            <div class="loop-node node-learn">Learn</div>
            <div class="loop-node node-tool">Tool</div>
            <svg class="loop-connections" viewBox="0 0 200 200">
              <circle class="loop-path" cx="100" cy="100" r="72" fill="none" stroke-width="1" />
            </svg>
          </div>
        </div>
      </div>
    </article>

    <div class="agent-tracks w-full desktop:w-[1200px] mb-[16px] laptop:mb-[32px] desktop:mb-[160px]">
      <div class="agent-tracks-grid">
        <a v-for="(track, index) in tracks" :key="track.name" class="agent-track-card"
          :class="`agent-track-${index + 1}`" :href="track.url" target="_blank" rel="noopener noreferrer"
          :aria-label="`进入${track.name}专题`">
          <div class="track-accent" :style="{ background: track.accent }"></div>
          <div class="track-body">
            <div class="track-header">
              <span class="track-icon">{{ track.icon }}</span>
              <span class="track-badge">{{ track.chapters }} 章</span>
            </div>
            <strong class="track-name">{{ track.name }}</strong>
            <span class="track-name-en">{{ track.nameEn }}</span>
            <p class="track-desc">{{ track.desc }}</p>
            <ul class="track-topics">
              <li v-for="topic in track.topics" :key="topic">{{ topic }}</li>
            </ul>
            <span class="track-cta">进入专题 →</span>
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

const TRACKS = [
  {
    name: 'Claude Code',
    nameEn: 'Agentic Coding',
    icon: '⚡',
    chapters: '18',
    desc: '吃透 Agentic Coding 心智模型、代理循环、Plan Mode 与工程交付，在代码库中安全高效地使用高权限智能体。',
    url: 'https://agent.jeffjade.com/claude-code/',
    accent: 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)',
    topics: ['CLAUDE.md', 'Hooks & Skills', '记忆']
  },
  {
    name: 'Hermes Agent',
    nameEn: 'Closed Learning Loop',
    icon: '🔮',
    chapters: '14',
    desc: 'closed learning loop、记忆与 Skill、工具系统与 Gateway、安全与架构拆解，以及从零实现与自测验收。',
    url: 'https://agent.jeffjade.com/hermes-agent/',
    accent: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    topics: ['MEMORY.md', 'Skill 自改进', 'Messaging Gateway']
  }
]

export default {
  name: 'AgentRoam',

  data() {
    return {
      tracks: Object.freeze(TRACKS)
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
      gsap.from('.agent-intro', {
        scrollTrigger: {
          trigger: '.agent-intro',
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

      gsap.from('.agent-loop-container', {
        scrollTrigger: {
          trigger: '.agent-loop-container',
          markers: false,
          start: 'top 80%',
          end: 'bottom 200px',
          toggleActions: 'restart none none reverse'
        },
        duration: 1.2,
        scale: 0,
        rotation: 45,
        opacity: 0,
        ease: 'elastic.out(1, 0.6)',
        delay: 0.2
      })

      gsap.from('.agent-tag', {
        scrollTrigger: {
          trigger: '.agent-tag',
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

      const cards = gsap.utils.toArray('.agent-track-card')
      cards.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            markers: false,
            start: 'top 88%',
            end: 'bottom 200px',
            toggleActions: 'restart none none reverse'
          },
          duration: 0.7,
          y: index === 0 ? -40 : 40,
          x: index === 0 ? -30 : 30,
          opacity: 0,
          scale: 0.9,
          ease: 'back.out(1.4)',
          delay: index * 0.12
        })
      })
    }
  }
}
</script>

<style scoped lang="scss">
.agent-roam-section {
  isolation: isolate;
}

.agent-intro-title .gradient-text {
  padding-bottom: 0.08em;
  line-height: 1.2;
}

.agent-intro {
  border: 1px solid rgba(15, 23, 42, 0.06);
  box-shadow: 0 10px 30px rgba(17, 24, 39, 0.06);
  transition: box-shadow 0.3s ease, transform 0.3s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(15, 23, 42, 0.12);
    box-shadow: 0 24px 50px rgba(17, 24, 39, 0.12);
  }
}

.agent-tag {
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

/* ─── Agent loop visual ───────────────────────────────────────────── */
.agent-visual {
  min-height: 200px;
}

.agent-loop-container {
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loop-core {
  position: relative;
  z-index: 3;
  font-size: 56px;
  filter: drop-shadow(0 6px 18px rgba(99, 102, 241, 0.25));
  animation: core-pulse 3s ease-in-out infinite;
}

@keyframes core-pulse {

  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.08);
  }
}

.loop-ring {
  position: absolute;
  border-radius: 50%;
  border: 1px dashed rgba(99, 102, 241, 0.2);

  &.ring-inner {
    width: 120px;
    height: 120px;
    animation: ring-spin 16s linear infinite;
  }

  &.ring-outer {
    width: 176px;
    height: 176px;
    border-color: rgba(139, 92, 246, 0.15);
    animation: ring-spin 24s linear infinite reverse;
  }
}

@keyframes ring-spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.loop-connections {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}

.loop-path {
  stroke: rgba(99, 102, 241, 0.15);
  stroke-dasharray: 8 6;
  animation: path-dash 20s linear infinite;
}

@keyframes path-dash {
  to {
    stroke-dashoffset: -200;
  }
}

.loop-node {
  position: absolute;
  z-index: 2;
  padding: 4px 10px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: #6366f1;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 999px;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.12);
  white-space: nowrap;

  &.node-plan {
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    animation: node-float-1 4s ease-in-out infinite;
  }

  &.node-act {
    right: 4px;
    top: 50%;
    transform: translateY(-50%);
    color: #d97706;
    border-color: rgba(217, 119, 6, 0.25);
    animation: node-float-2 4.5s ease-in-out infinite;
  }

  &.node-learn {
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);
    color: #8b5cf6;
    border-color: rgba(139, 92, 246, 0.25);
    animation: node-float-3 5s ease-in-out infinite;
  }

  &.node-tool {
    left: 4px;
    top: 50%;
    transform: translateY(-50%);
    color: #059669;
    border-color: rgba(5, 150, 105, 0.25);
    animation: node-float-4 4.2s ease-in-out infinite;
  }
}

@keyframes node-float-1 {

  0%,
  100% {
    transform: translateX(-50%) translateY(0);
  }

  50% {
    transform: translateX(-50%) translateY(-4px);
  }
}

@keyframes node-float-2 {

  0%,
  100% {
    transform: translateY(-50%) translateX(0);
  }

  50% {
    transform: translateY(-50%) translateX(4px);
  }
}

@keyframes node-float-3 {

  0%,
  100% {
    transform: translateX(-50%) translateY(0);
  }

  50% {
    transform: translateX(-50%) translateY(4px);
  }
}

@keyframes node-float-4 {

  0%,
  100% {
    transform: translateY(-50%) translateX(0);
  }

  50% {
    transform: translateY(-50%) translateX(-4px);
  }
}

/* ─── Track cards ─────────────────────────────────────────────────── */
.agent-tracks-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}

.agent-track-card {
  position: relative;
  overflow: hidden;
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.06);
  border-radius: 24px;
  box-shadow: 0 8px 24px rgba(17, 24, 39, 0.05);
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

    .track-accent {
      height: 4px;
    }

    .track-icon {
      transform: scale(1.15);
    }

    .track-cta {
      color: #6366f1;
      transform: translateX(4px);
    }
  }

  &:focus-visible {
    outline: 2px solid rgba(99, 102, 241, 0.5);
    outline-offset: 2px;
  }
}

.track-accent {
  height: 3px;
  width: 100%;
  transition: height 0.3s ease;
}

.track-body {
  padding: 28px 24px 32px;

  @media screen and (min-width: 1440px) {
    padding: 32px 28px 36px;
  }
}

.track-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.track-icon {
  font-size: 40px;
  transition: transform 0.3s ease;
}

.track-badge {
  font-size: 13px;
  font-weight: 600;
  color: #86868B;
  background: #f5f5f7;
  padding: 4px 12px;
  border-radius: 999px;
}

.track-name {
  display: block;
  font-size: 24px;
  font-weight: 700;
  color: #1D1D1F;
  line-height: 1.3;
  margin-bottom: 4px;
  font-family: 'VIVO-FONT-WEB-BOLD', sans-serif;

  @media screen and (min-width: 1440px) {
    font-size: 28px;
  }
}

.track-name-en {
  display: block;
  font-size: 13px;
  color: #86868B;
  letter-spacing: 0.04em;
  margin-bottom: 14px;
}

.track-desc {
  font-size: 15px;
  line-height: 1.7;
  color: #666666;
  margin: 0 0 20px;
}

.track-topics {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0 0 20px;
  padding: 0;
  list-style: none;

  li {
    font-size: 12px;
    font-weight: 500;
    color: #5f6368;
    background: #f5f5f7;
    padding: 5px 12px;
    border-radius: 999px;
    border: 1px solid rgba(15, 23, 42, 0.06);
  }
}

.track-cta {
  display: inline-block;
  font-size: 15px;
  font-weight: 600;
  color: #86868B;
  transition: color 0.25s ease, transform 0.25s ease;
}

@media screen and (max-width: 767px) {
  .agent-loop-container {
    width: 160px;
    height: 160px;
  }

  .loop-core {
    font-size: 44px;
  }

  .loop-ring.ring-inner {
    width: 96px;
    height: 96px;
  }

  .loop-ring.ring-outer {
    width: 140px;
    height: 140px;
  }

  .loop-node {
    font-size: 10px;
    padding: 3px 8px;
  }
}

@media (prefers-reduced-motion: reduce) {

  .loop-core,
  .loop-ring,
  .loop-path,
  .loop-node {
    animation: none;
  }
}
</style>
