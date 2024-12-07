<template>
  <article id="scroll-zoom" class="w-full bg-white desktop:bg-silverwhile">
    <div class="module-warpper module-space">
      <h3
        class="tablet:text-[20px] text-[58px] tablet:leading-[32px] leading-[58px] vivo-blod-font font-medium mb-[16px] laptop:mb-[20px] desktop:mb-[24px] mt-[24px] laptop:mt-[60px] desktop:mt-[0] text-[#1D1D1F]"
        id="wealth-tracker">
        <a class="hover:text-blue gradient-text" href="https://site.lovejade.cn/" target="_blank"
          rel="noopener noreferrer" aria-label="访问倾城之链应用">
          倾城之链
        </a>
      </h3>
      <div class="general-desc py-[36px] tablet:py-[20px] text-left" v-html="contentHtmlStr" />
    </div>

    <!-- For desktop -->
    <div id="sz-animate-trigger" class="relative laptop:hidden tablet:hidden">
      <div class="w-full h-[55.6vw] flex justify-center items-center relative">
        <div class="img-container w-[62.5vw] h-[35.156vw] rounded-3xl flex flex-col overflow-hidden">
          <img class="dynamic-img block w-[100vw] h-full relative"
            style="translate: none; rotate: none; scale: none; transform: scale(1, 1)"
            src="/images/ScrollZoom/nicelinks.png" alt="倾城之链 - 开放型导航平台" loading="lazy" width="1920" height="1080" />
          <span class="stop-marker"></span>
        </div>
      </div>
    </div>

    <!-- For tablet & laptop  -->
    <div class="desktop:hidden w-full tablet:px-[16px] laptop:px-[32px] laptop:mb-[60px] tablet:mb-[30px]">
      <img id="scroll-zoom-img" class="block w-full" src="/images/ScrollZoom/nicelinks-tiny.png" alt="倾城之链移动端展示"
        loading="lazy" width="750" height="420" />
    </div>

    <!-- 添加结构化数据 -->
    <script type="application/ld+json">
      {
        "@context": "http://schema.org",
        "@type": "SoftwareApplication",
        "name": "倾城之链",
        "description": "开放型新一代导航平台，旨在云集全球优秀网站，探索互联网中更广阔的世界。",
        "image": "/images/ScrollZoom/nicelinks.png",
        "url": "https://site.lovejade.cn/",
        "applicationCategory": "WebApplication",
        "operatingSystem": "All",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "CNY"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "980",
          "bestRating": "5",
          "worstRating": "1"
        }
      }
    </script>
  </article>
</template>

<script>
import mediumZoom from 'medium-zoom'
import { gsap, ScrollTrigger } from 'gsap/all'
import { isSmallerScreen } from '../helper/utils'
gsap.registerPlugin(ScrollTrigger)

const contentHtmlStr = `开放型新一代导航平台，旨在云集全球优秀网站，探索互联网中更广阔的世界；在「倾城之链」，您可以轻松发现、学习、分享更多有用或有趣的事物。
<p class="line">在这个信息化的世界，海量的讯息可能让您不知所措；担心错过她而努力汲取的同时，却可能错过更多；「倾城之链」的存在，即是为您解决这种困扰；在这里，您可以浏览全球各类智慧的结晶；丰富视野的同时，可以标注抑或分享您喜欢的站点，从而为更多挖掘讯息的人提供建设性参考。</p>
<p class="line">在当今这信息化时代，即便是再小的个体，也当有自己的品牌。然而，独立的才是自己的。「倾城之链」作为一个开放平台，鼓励您创造属于您的个人品牌，烙印着自己的风格，替自己代言、发声。如果您已经这样做了，您可以尽情分享在这里，让更多人知道，且从中受益。当然，您也可以分享出您欢喜的其他有意思站点，让您的见识惠及更多人。</p>`

export default {
  name: 'ScrollZoom',

  data() {
    return {
      contentHtmlStr
    }
  },

  created() {
    this.$nextTick(() => {
      if (isSmallerScreen()) return

      this.addDynamicAnimate()
    })
  },

  mounted() {
    if (isSmallerScreen()) {
      const targetImgNode = document.querySelector('#scroll-zoom-img')
      if (targetImgNode) mediumZoom(targetImgNode)
    }
  },

  methods: {
    addDynamicAnimate() {
      this.trigger2scale()
      this.trigger2slide()
    },

    trigger2slide() {
      const trigger = gsap.timeline({
        scrollTrigger: {
          toggleActions: 'restart none reverse none',
          trigger: '#sz-animate-trigger',
          start: 'top 70%',
          end: 'top 70%',
          markers: false
        },
        onComplete: () => { }
      })
      trigger.fromTo(
        '#sz-animate-trigger .img-container',
        {
          y: 0
        },
        {
          y: '-4.167vw'
        }
      )
    },

    trigger2scale() {
      const trigger = gsap.timeline({
        scrollTrigger: {
          toggleActions: 'restart none reverse none',
          trigger: '#sz-animate-trigger',
          start: 'top top',
          end: '+=100%',
          markers: false,
          pin: true,
          scrub: 1
        }
      })

      trigger
        .fromTo(
          '#sz-animate-trigger .img-container',
          {
            width: '62.5vw',
            height: '35.156vw',
            borderRadius: '2.604vw'
          },
          {
            width: '100vw',
            height: '55.6vw',
            borderRadius: 0,
            y: 0,
            duration: 8,
            ease: 'none'
          },
          '0'
        )
        .fromTo(
          '.img-container .stop-marker',
          {
            y: 0,
            opacity: 0
          },
          {
            y: 0,
            opacity: 0,
            duration: 2,
            ease: 'none'
          },
          '4'
        )
    }
  }
}
</script>
