<template>
  <footer class="flex flex-col items-center w-full bg-gradient-to-t from-[#ece9e6] to-white" aria-label="网站页脚">
    <div class="w-full desktop:w-[1200px] desktop:pt-[60px] desktop:pb-10 laptop:pt-10 laptop:pb-8 pt-2 pb-4 text-greyblack">
      <div class="grid w-full grid-cols-1 laptop:grid-cols-2 desktop:grid-cols-4 laptop:px-8 laptop:gap-x-10 laptop:gap-y-10 desktop:px-0 desktop:gap-x-10 desktop:gap-y-0 laptop:items-start desktop:items-start">
        <div class="flex items-start w-full desktop:space-x-2">
          <img class="hidden desktop:block w-[32px] mt-1 shrink-0" src="/favicon.svg" alt="清风明月轩" />
          <ul class="footer-col w-full tablet:px-4 laptop:px-0">
            <li
              class="item footer-heading w-full laptop:text-brand desktop:text-brand laptop:vivo-blod-font desktop:vivo-blod-font flex justify-between items-center tablet:cursor-pointer laptop:text-lg desktop:text-xl text-base laptop:mb-4 desktop:mb-5"
              @click="onItemClick">
              清风明月轩
              <img class="to-bottom hidden tablet:block" src="/favicon.svg" alt="展开联系方式" />
            </li>
            <li class="flex flex-row flex-wrap gap-x-2.5 gap-y-2 py-2 desktop:py-0">
              <a class="footer-social" href="https://github.com/nicejade" target="_blank" rel="noopener noreferrer">
                <img class="w-5 h-5 desktop:w-6 desktop:h-6" src="/svgs/github.svg" alt="Github nicejade">
              </a>
              <a class="footer-social" href="https://x.com/MarshalXuan" target="_blank" rel="noopener noreferrer">
                <img class="w-5 h-5 desktop:w-6 desktop:h-6" src="/svgs/x.svg" alt="X MarshalXuan">
              </a>
              <a class="footer-social" href="https://www.youtube.com/@MarshalXuan" target="_blank" rel="noopener noreferrer">
                <img class="w-5 h-5 desktop:w-6 desktop:h-6" src="/svgs/youtube.svg" alt="YouTube">
              </a>
              <a class="footer-social" href="https://space.bilibili.com/690989854" target="_blank" rel="noopener noreferrer">
                <img class="w-5 h-5 desktop:w-6 desktop:h-6" src="/svgs/bilibili.svg" alt="Bilibili">
              </a>
              <a class="footer-social" href="https://mastodon.social/@nicejade" target="_blank" rel="noopener noreferrer">
                <img class="w-5 h-5 desktop:w-6 desktop:h-6" src="/svgs/mastodon.svg" alt="Mastodon nicejade">
              </a>
              <a class="footer-social" href="https://www.jeffjade.com/" target="_blank" rel="noopener noreferrer">
                <img class="w-5 h-5 desktop:w-6 desktop:h-6" src="/svgs/blogger.svg" alt="晚晴幽草轩">
              </a>
            </li>
          </ul>
        </div>

        <nav
          class="footer-col tablet:px-4 laptop:px-0"
          v-for="item in footerInfoArr"
          :key="item.title"
          :aria-label="item.title + '导航'">
          <h2
            class="item footer-heading w-full laptop:text-brand desktop:text-brand laptop:vivo-blod-font desktop:vivo-blod-font flex justify-between items-center tablet:cursor-pointer laptop:text-lg desktop:text-xl text-base laptop:mb-4 desktop:mb-5"
            @click="onItemClick">
            {{ item.title }}
            <img class="to-bottom hidden tablet:block" src="./../assets/icons/bottom.svg" :alt="`展开${item.title}菜单`" />
          </h2>
          <ul class="tablet:ml-5 laptop:ml-0 desktop:ml-0">
            <li
              class="item flex items-center mt-0 desktop:mt-2 desktop:text-base text-sm text-greyblack hover:text-brand"
              v-for="citem in item.branch"
              :key="citem.title">
              <a
                class="block py-1 leading-7 desktop:leading-8 focus-visible:outline-none focus-visible:text-brand"
                :href="citem.url"
                target="_blank"
                rel="noopener noreferrer"
                :title="citem.title">
                {{ citem.title }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="w-full border-t border-[#ebedf0]">
      <p class="py-6 text-sm text-center text-greyblack desktop:text-base">
        © {{ currentYear }} lovejade.cn 保留所有权利
      </p>
    </div>
  </footer>
</template>

<script>
const footerInfoArr = [
  {
    title: '开源项目',
    branch: [
      {
        title: '生财有迹',
        url: 'https://github.com/nicejade/wealth-tracker'
      },
      {
        title: '个人主页',
        url: 'https://github.com/nicejade/homepage'
      },
      {
        title: '倾城之链',
        url: 'https://github.com/nicejade/nicelinks-vue-client'
      },
      {
        title: '曼妙句子',
        url: 'https://github.com/nicejade/read.lovejade.cn'
      },
      { 
        title: '人生已过', 
        url: 'https://github.com/nicejade/life-spent' 
      },
			{ 
        title: '时空旅行', 
        url: 'https://github.com/nicejade/spacetime-travel' 
      },
    ]
  },
  {
    title: '友情链接',
    branch: [
      {
        title: '智能体漫游',
        url: 'https://agent.jeffjade.com/'
      },
      {
        title: '逍遥自在轩',
        url: 'https://www.niceshare.site'
      },
      {
        title: '晚晴幽草轩',
        url: 'https://www.jeffjade.com/'
      },
      {
        title: '缘知随心庭',
        url: 'https://fine.niceshare.site/'
      },
      {
        title: '逸趣游乐坊',
        url: 'https://play.niceshare.site/'
      },
      {
        title: '玉桃文飨轩',
        url: 'https://share.lovejade.cn/'
      }
    ]
  },
  {
    title: '推荐服务',
    branch: [
      {
        title: '常用软件',
        url: 'https://www.niceshare.site/#常用软件'
      },
      {
        title: '人工智能',
        url: 'https://www.niceshare.site/#人工智能'
      },
      {
        title: '智能搜索',
        url: 'https://www.niceshare.site/#智能搜索'
      },
      {
        title: '在线服务',
        url: 'https://www.niceshare.site/#在线服务'
      },
      {
        title: '终端工具',
        url: 'https://www.niceshare.site/#终端工具'
      },
      {
        title: '智能代理',
        url: 'https://www.niceshare.site/#智能代理'
      }
    ]
  }
]

export default {
  data() {
    return {
      footerInfoArr: Object.freeze(footerInfoArr),
      currentActive: null
    }
  },

  computed: {
    currentYear() {
      return new Date().getFullYear()
    },
  },

  methods: {
    onItemClick(e) {
      let k = e.target.parentElement
      if (e.target.className === 'to-bottom') {
        k = k.parentElement
      }
      if (this.currentActive) this.currentActive.classList.remove('active')
      if (this.currentActive === k) {
        this.currentActive = null
        return
      }
      this.currentActive = k
      k.classList.add('active')
    },
  }
}
</script>

<style lang="scss">
.footer-social {
  display: inline-flex;
  opacity: 0.72;
  transition: opacity 0.2s ease;

  &:hover,
  &:focus-visible {
    opacity: 1;
    outline: none;
  }
}

@media screen and (max-width: 767px) {
  .footer-col {
    width: 100%;
    max-height: 40px;
    border-top: 1px solid #ebedf0;
    overflow: hidden;
    transition: max-height 0.35s ease;

    &.active {
      max-height: fit-content;
      overflow: visible;
      padding-bottom: 12px;
    }

    .item {
      min-height: 40px;
      height: auto;
      -webkit-tap-highlight-color: transparent;
    }
  }

  .to-bottom {
    width: 16px;
    height: 16px;
    transition: transform 0.35s ease;
  }

  .active {
    .to-bottom {
      transform: rotateX(180deg);
    }
  }
}
</style>
