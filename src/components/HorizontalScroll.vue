<template>
  <section class="relative w-full bg-white" role="region" aria-label="博客列表">
    <div
      class="flex flex-row w-full !items-center module-warpper tablet:mt-[20px] laptop:mt-[58px] desktop:mt-[160px] tablet:mb-[16px] laptop:mb-[34px] desktop:mb-[80px]">
      <h2 class="font-medium large-title vivo-blod-font" id="open-source-works">个人博客</h2>
    </div>

    <div id="scroll-trigger" role="list"
      class="w-full bg-white images desktop:h-[100vh] flex desktop:flex-row flex-col overflow-hidden flex-nowrap overscroll-none tablet:mt-[16px] laptop:mt-[32px]"
      itemscope itemtype="https://schema.org/ItemList">
      <meta itemprop="@type" content="ItemList" />
      <meta itemprop="itemListOrder" content="Ascending" />
      <meta itemprop="numberOfItems" :content="blogsList.length" />
      <div itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem"
        class="panel w-full desktop:h-[100vh]" v-for="(item, index) in blogsList" :key="index" role="listitem">
        <meta itemprop="@type" content="ListItem" />
        <meta itemprop="position" :content="index + 1" />
        <div itemprop="item" itemscope itemtype="https://schema.org/Article">
          <meta itemprop="@type" content="Article" />
          <meta itemprop="headline" :content="item.title" />
          <meta itemprop="abstract" :content="item.desc" />
          <meta itemprop="description" :content="item.desc" />
          <link itemprop="url" :href="item.externalLink" />
          <meta itemprop="datePublished" :content="item.createdDate + 'T00:00:00+08:00'" />
          <meta itemprop="dateModified" :content="item.createdDate + 'T00:00:00+08:00'" />
          <div itemprop="author" itemscope itemtype="https://schema.org/Person">
            <meta itemprop="@type" content="Person" />
            <meta itemprop="name" content="nicejade" />
            <link itemprop="url" :href="item.authorUrl || 'https://github.com/nicejade'" />
          </div>
          <div itemprop="image" itemscope itemtype="https://schema.org/ImageObject">
            <meta itemprop="@type" content="ImageObject" />
            <link itemprop="url" :href="item.path" />
            <meta itemprop="width" content="1200" />
            <meta itemprop="height" content="630" />
          </div>
          <div itemprop="publisher" itemscope itemtype="https://schema.org/Organization">
            <meta itemprop="@type" content="Organization" />
            <meta itemprop="name" content="nicejade" />
            <div itemprop="logo" itemscope itemtype="https://schema.org/ImageObject">
              <meta itemprop="@type" content="ImageObject" />
              <link itemprop="url" :href="item.path" />
              <meta itemprop="width" content="1664" />
              <meta itemprop="height" content="936" />
            </div>
          </div>
          <meta itemprop="articleSection" content="Personal Blog" />
          <meta itemprop="keywords" :content="item.keywords" />
        </div>
        <a class="outline-none desktop:cursor-auto" :href="isMobileFlag ? item.externalLink : 'javascript:void(0)'"
          target="_self" rel="noopener noreferrer" :aria-label="item.title">
          <div
            class="w-full desktop:h-[100vh] flex flex-col justify-center desktop:items-start items-center tablet:px-[16px] laptop:px-[32px]">
            <section class="section w-full desktop:aspect-[16/9] section-responsive">
              <h3
                class="title desktop:text-[48px] laptop:text-[32px] tablet:text-[20px] font-bold desktop:mb-[60px] tablet:mb-[10px] laptop:mb-[20px] text-black"
                itemprop="name">
                {{ item.title }}
              </h3>
              <div
                class="w-full desktop:min-h-[60vh] flex desktop:flex-row flex-col justify-between desktop:space-x-[20px] desktop:bg-greywhile desktop:p-[50px] desktop:rounded-[40px]">
                <div
                  class="desktop:w-[400px] w-full desktop:h-full flex flex-col items-start justify-start desktop:pl-[10px]">
                  <div
                    class="text-silver desktop:text-[20px] laptop:text-[20px] tablet:text-[14px] desktop:leading-10 laptop:leading-8 tablet:leading-[24px] font-normal text-left tablet:mb-[10px] laptop:mb-[20px]"
                    itemprop="description">
                    {{ item.desc }}
                  </div>
                  <a class="tablet:hidden laptop:hidden flex justify-center text-[16px] mt-[24px] items-center text-black hover:text-brand w-[128px] h-[48px] rounded-[24px] border border-silvergrey hover:border-brand outline-none"
                    :href="item.externalLink" target="_blank" rel="noopener noreferrer">
                    {{ item.buttonText }}
                  </a>
                </div>
                <div class="desktop:max-w-[1280px] desktop:w-[60%] w-full desktop:h-full flex flex-col">
                  <img class="block w-full" :src="item.path" :alt="item.desc" loading="lazy"
                    :srcset="`${item.path} 1x, ${item.path} 2x`" sizes="(min-width: 1440px) 60vw, 100vw"
                    itemprop="image" />
                </div>
              </div>
            </section>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap, ScrollTrigger } from 'gsap/all'
import { isSmallerScreen } from '../helper/utils'
gsap.registerPlugin(ScrollTrigger)

const BLOGS_LIST = [
  {
    title: '晚晴幽草轩',
    desc: '晚晴幽草轩，始创于 2015 年 4 月，名字源自李商隐《晚晴》："天意怜幽草，人间重晚晴"。作为一个专业的 Web 技术博客，深度聚焦现代前端开发技术，包括 Vue、Svelte 等 Web 框架，快应用开发，小程序开发，以及 AI 应用实践、开发者效率工具等内容。同时分享互联网最新技术趋势与个人成长心得。',
    keywords: '晚晴幽草轩, 个人博客, 前端开发, 快应用开发, AI 应用实践, 开发者效率工具, Web 开发, Vue, Svelte, Hexo',
    path: '/images/HorizontalScroll/jeffjade.png',
    buttonText: '查看详情 >',
    externalLink: 'https://www.jeffjade.com',
    createdDate: '2015-04-01',
    authorUrl: 'https://nicejade.bio.link/'
  },
  {
    title: '静轩之别苑',
    desc: '静轩之别苑，创立于 2019 年 1 月，是一个基于现代化技术栈（Ghost、Docker 容器化）打造的专业技术博客平台，部署于阿里云服务器，确保高性能与稳定性。专注于快应用开发技术、AI 应用实践、前端工程化实践、DevOps 最佳实践等技术内容，同时分享互联网最新技术趋势与技术视野的拓展历程。',
    keywords: '静轩之别苑, Ghost, Docker, 快应用开发, AI 应用实践, 开发者效率工具, 前端工程化实践, DevOps 最佳实践',
    path: '/images/HorizontalScroll/lovejade.png',
    buttonText: '查看详情 >',
    externalLink: 'https://quickapp.lovejade.cn/',
    createdDate: '2019-01-01',
    authorUrl: 'https://zaap.bio/nicejade'
  },
  {
    title: '悠然宜想亭',
    desc: '悠然宜想亭，创建于 2021 年 3 月，基于 Flarum 框架与 Docker 技术打造的现代化技术社区。依托阿里云基础设施，打造高可用的技术交流空间，涵盖前沿技术探讨、创新思维激发、健康生活方式、科技资讯科普、优质资源分享、快应用生态、蓝河应用开发等多维度内容，致力于构建积极向上的技术社区生态。',
    keywords: '悠然宜想亭, Flarum, Docker, AI 应用实践, 开发者效率工具, 前沿技术探讨, 创新思维激发, 健康生活方式, 科技资讯科普, 优质资源分享, 快应用生态, 蓝河应用开发',
    path: '/images/HorizontalScroll/forum.png',
    buttonText: '查看详情 >',
    externalLink: 'https://forum.lovejade.cn/',
    createdDate: '2021-03-01',
    authorUrl: 'https://kee.so/nicejade'
  }
]

export default {
  name: 'HorizontalScroll',

  data() {
    return {
      isMobileFlag: isSmallerScreen(),
      currentUrlPath: location.href,
      blogsList: Object.freeze(BLOGS_LIST)
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
      const scrollWidth = document.querySelector('#scroll-trigger').scrollWidth
      const offset = scrollWidth - document.documentElement.clientWidth
      const panels = gsap.utils.toArray('#scroll-trigger .panel')

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: '#scroll-trigger',
          pin: true,
          scrub: 1,
          markers: false,
          end: `+=${offset}`
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
@media screen and (min-width: 1440px) {
  #scroll-trigger {
    padding-left: calc((100vw - 1200px) / 2);
  }
}

@media screen and (min-width: 1440px) and (max-width: 1760px) and (min-height: 900px) {
  #scroll-trigger {
    .panel {
      width: 1280px;
      min-width: 1280px;

      .section {
        width: 1200px;
        min-width: 1200px;

        .title {
          margin-bottom: 40px;
        }
      }
    }
  }
}

@media screen and (min-width: 1440px) and (max-width: 1760px) and (max-height: 900px) {
  #scroll-trigger {
    .panel {
      width: 1100px;
      min-width: 1100px;

      .section {
        width: 1000px;
        min-width: 1000px;

        .title {
          margin-bottom: 20px;
        }
      }
    }
  }
}

@media screen and (min-width: 1600px) {
  #scroll-trigger {
    .panel {
      min-width: 1560px;

      .section {
        width: 1440px;
        min-width: 1440px;
      }
    }
  }
}
</style>
