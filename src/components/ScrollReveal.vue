<template>
  <section
    class="section-container w-full bg-[#FAFBFC] desktop:bg-white flex flex-col items-start desktop:items-center tablet:px-[16px] laptop:px-[32px]"
    aria-label="开源作品展示区" itemscope itemtype="http://schema.org/CollectionPage">
    <meta itemprop="name" content="开源作品展示" />
    <meta itemprop="description" content="展示包括生财有迹、玉桃文飨轩、在线编辑器等开源项目" />

    <div itemscope itemtype="http://schema.org/SoftwareApplication">
      <meta itemprop="name" content="生财有迹" />
      <meta itemprop="applicationCategory" content="FinanceApplication" />
      <meta itemprop="operatingSystem" content="Web" />
      <meta itemprop="url" content="https://fund.lovejade.cn/" />
      <div itemprop="offers" itemscope itemtype="http://schema.org/Offer">
        <meta itemprop="price" content="0" />
        <meta itemprop="priceCurrency" content="CNY" />
      </div>
      <div itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">
        <meta itemprop="ratingValue" content="4.9" />
        <meta itemprop="ratingCount" content="636" />
      </div>
    </div>

    <div itemscope itemtype="http://schema.org/SoftwareApplication">
      <meta itemprop="name" content="玉桃文飨轩" />
      <meta itemprop="applicationCategory" content="UtilityApplication" />
      <meta itemprop="operatingSystem" content="Web" />
      <meta itemprop="url" content="https://share.lovejade.cn/" />
      <div itemprop="offers" itemscope itemtype="http://schema.org/Offer">
        <meta itemprop="price" content="0" />
        <meta itemprop="priceCurrency" content="CNY" />
      </div>
      <div itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">
        <meta itemprop="ratingValue" content="4.9" />
        <meta itemprop="ratingCount" content="789" />
      </div>
    </div>

    <div itemscope itemtype="http://schema.org/SoftwareApplication">
      <meta itemprop="name" content="Arya Markdown 编辑器" />
      <meta itemprop="applicationCategory" content="DeveloperApplication" />
      <meta itemprop="operatingSystem" content="Web" />
      <meta itemprop="url" content="https://markdown.lovejade.cn/" />
      <div itemprop="offers" itemscope itemtype="http://schema.org/Offer">
        <meta itemprop="price" content="0" />
        <meta itemprop="priceCurrency" content="CNY" />
      </div>
      <div itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">
        <meta itemprop="ratingValue" content="4.9" />
        <meta itemprop="ratingCount" content="978" />
      </div>
    </div>

    <div
      class="flex flex-row w-full !items-center module-warpper  tablet:mt-[30px] laptop:mt-[58px] desktop:mt-[160px] tablet:mb-[16px] laptop:mb-[34px] desktop:mb-[80px]">
      <h2 class="font-medium large-title vivo-blod-font" id="open-source-works">开源作品</h2>
    </div>
    <article
      class="card1 marquee-border w-full desktop:w-[1200px] mb-[16px] laptop:mb-[32px] desktop:mb-[60px] bg-white rounded-[20px] desktop:rounded-[30px] flex flex-col desktop:flex-row items-center"
      role="article" aria-labelledby="wealth-tracker">
      <div class="text-left desktop:my-auto mx-[24px] laptop:mx-[60px] desktop:ml-[75px] desktop:mr-[35px]">
        <h3
          class="tablet:text-[20px] text-[58px] tablet:leading-[32px] leading-[58px] vivo-blod-font font-medium mb-[16px] laptop:mb-[20px] desktop:mb-[24px] mt-[24px] laptop:mt-[60px] desktop:mt-[0] text-[#1D1D1F]"
          id="wealth-tracker">
          <a class="hover:text-blue gradient-text" href="https://fund.lovejade.cn/" target="_blank"
            rel="noopener noreferrer" aria-label="访问生财有迹应用">生财有迹
          </a>
        </h3>
        <div
          class="tablet:text-[14px] text-[20px] tablet:leading-[24px] leading-[40px] text-[#86868B] desktop:text-[#666666] mb-[10px] desktop:mb-[0]">
          生财有迹💰（Wealth Tracker）是一款专注于个人资产分析的应用程序。其核心功能是：全面记录并展示用户的资产状况，帮助用户清晰地了解财务现状；结合每种资产的特性和当前经济环境，利用 AI
          技术进行分析，并提供适宜的财务建议。
        </div>
      </div>
      <img
        class="w-[294px] h-[248px] laptop:w-[566px] laptop:h-[479px] desktop:w-[710px] desktop:h-[600px] mb-[20px] desktop:mb-0"
        src="/images/ScrollReveal/WealthTracker.svg"
        alt="生财有迹💰（Wealth Tracker）是一款专注于个人资产分析的应用程序，帮助用户清晰地了解财务现状，结合资产特性和经济环境，利用 AI 技术进行分析并提供财务建议。" loading="lazy" />
    </article>
    <article
      class="card2 w-full desktop:w-[1200px] mb-[16px] laptop:mb-[32px] desktop:mb-[60px] bg-white rounded-[20px] desktop:rounded-[30px] flex flex-col-reverse desktop:flex-row items-center"
      role="article" aria-labelledby="markdown2png">
      <img
        class="w-[294px] h-[248px] laptop:w-[566px] laptop:h-[479px] desktop:w-[710px] desktop:h-[600px] mb-[20px] desktop:mb-0"
        src="/images/ScrollReveal/Markdown2png.svg"
        alt="玉桃文飨轩🍑 ，简单好用的在线文本工具；支持将 Markdown、Rich Text 等格式内容，快速转化为 PNG、PDF 等文件，并支持自定义设置、一键下载等功能。基于 Vue3 、 Vite 、 Pinia 、 TailwindCSS 、 TypeScript 构建。"
        loading="lazy" />
      <div class="text-left desktop:my-auto mx-[24px] laptop:mx-[60px] desktop:ml-[35px] desktop:mr-[75px]">
        <h3
          class="tablet:text-[20px] text-[58px] tablet:leading-[32px] leading-[58px] vivo-blod-font font-medium mb-[16px] laptop:mb-[20px] desktop:mb-[24px] mt-[24px] laptop:mt-[60px] desktop:mt-[0] text-[#1D1D1F] desktop:text-right"
          id="markdown2png">
          <a class="hover:text-brand gradient-text" href="https://share.lovejade.cn/" target="_blank"
            rel="noopener noreferrer" aria-label="访问玉桃文飨轩应用">玉桃文飨轩</a>
        </h3>
        <div
          class="tablet:text-[14px] text-[20px] tablet:leading-[24px] leading-[40px] text-[#86868B] desktop:text-[#666666] mb-[10px] desktop:mb-[0]">
          玉桃文飨轩🍑 ，简单好用的在线本工具；支持将 Markdown、Rich Text 等格式内容，快速转化为 PNG、PDF 等文件，并支持自定义设置、一键下载等功能。基于 Vue3 、 Vite 、
          Pinia、TailwindCSS 、 TypeScript 构建。
        </div>
      </div>
    </article>
    <article
      class="card3 w-full desktop:w-[1200px] mb-[16px] laptop:mb-[32px] desktop:mb-[160px] bg-white rounded-[20px] desktop:rounded-[30px] flex flex-col desktop:flex-row items-center"
      role="article" aria-labelledby="online-editor">
      <div class="text-left desktop:my-auto mx-[24px] laptop:mx-[60px] desktop:ml-[75px] desktop:mr-[35px]">
        <h3
          class="tablet:text-[20px] text-[58px] tablet:leading-[32px] leading-[58px] vivo-blod-font font-medium mb-[16px] laptop:mb-[20px] desktop:mb-[24px] mt-[24px] laptop:mt-[60px] desktop:mt-[0] text-[#1D1D1F]"
          id="online-editor">
          <a class="hover:text-blue gradient-text" href="https://markdown.lovejade.cn/" target="_blank"
            rel="noopener noreferrer" aria-label="访问在线编辑器应用">在线编辑器</a>
        </h3>
        <div
          class="tablet:text-[14px] text-[20px] tablet:leading-[24px] leading-[40px] text-[#86868B] desktop:text-[#666666] mb-[10px] desktop:mb-[0]">
          Arya - 在线 Markdown 编辑器，📝 基于 Vue2、Vditor，所构建的在线 Markdown 编辑器，支持绘制流程图、甘特图、时序图、任务列表、echarts 图表、五线谱，以及 PPT
          预览、视频音频解析、HTML 自动转换为 Markdown 等功能。
        </div>
      </div>
      <img
        class="w-[294px] h-[248px] laptop:w-[566px] laptop:h-[479px] desktop:w-[710px] desktop:h-[600px] mb-[20px] desktop:mb-0"
        src="/images/ScrollReveal/AryaMarkdown.svg"
        alt="📝 基于 Vue2、Vditor，所构建的在线 Markdown 编辑器，支持绘制流程图、甘特图、时序图、任务列表、echarts 图表、五线谱，以及 PPT 预览、视频音频解析、HTML 自动转换为 Markdown 等功能。"
        loading="lazy" />
    </article>
  </section>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'
import { isSmallerScreen } from '../helper/utils'
gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'ScrollReveal',

  created() {
    this.$nextTick(() => {
      if (isSmallerScreen()) return

      this.addDynamicAnimate()
    })
  },
  methods: {
    addDynamicAnimate() {
      gsap.from('.card1', {
        scrollTrigger: {
          trigger: '.card1',
          markers: false,
          start: 'top 80%',
          end: 'bottom 200px',
          toggleActions: 'restart none none reverse'
        },
        duration: 0.5,
        y: 100,
        autoAlpha: 0
      })
      gsap.from('.card2', {
        scrollTrigger: {
          trigger: '.card2',
          markers: false,
          start: 'top 80%',
          end: 'bottom 200px',
          toggleActions: 'restart none none reverse'
        },
        duration: 0.5,
        y: 100,
        autoAlpha: 0
      })
      gsap.from('.card3', {
        scrollTrigger: {
          trigger: '.card3',
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

<style scoped lang="scss">
.card1 {
  @media screen and (min-width: 1440px) {
    background-image: url('https://www.thebettersites.com/images/ScrollReveal/card1.png');
  }
}

.card2 {
  @media screen and (min-width: 1440px) {
    background-image: url('https://www.thebettersites.com/images/ScrollReveal/card2.png');
  }
}

.card3 {
  @media screen and (min-width: 1440px) {
    background-image: url('https://www.thebettersites.com/images/ScrollReveal/card3.png');
  }
}
</style>
