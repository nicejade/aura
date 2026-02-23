<template>
  <footer class="flex flex-col items-center w-full m-auto bg-gradient-to-t from-[#ece9e6] to-white" aria-label="网站页脚">
    <div
      class="desktop:w-[1200px] w-full desktop:h-[240px] flex flex-col justify-between desktop:py-[60px] text-greyblack">
      <div class="flex flex-col items-center justify-around w-full desktop:flex-row">
        <div
          class="flex-row items-start justify-start block w-full h-full desktop:w-1/3 desktop:flex desktop:space-x-2">
          <img class="laptop:hidden tablet:hidden w-[32px]" src="/favicon.svg" alt="BlusOS 联系方式" />
          <ul class="footer-col tablet:px-[16px] laptop:px-[32px]">
            <li
              class="item w-full tablet:h-[80px] laptop:h-[80px] desktop:text-brand desktop:vivo-blod-font flex justify-between items-center tablet:cursor-pointer laptop:cursor-pointer desktop:text-xl text-base desktop:mb-[20px]"
              @click="onItemClick">
              清风明月轩
              <img class="to-bottom desktop:hidden" src="/favicon.svg" alt="BlusOS 联系方式" />
            </li>
            <li class="flex flex-row my-2 space-x-2.5 desktop:my-0">
              <a href="https://github.com/nicejade" target="_blank" rel="noopener noreferrer">
                <img class="w-5 h-5 desktop:w-6 desktop:h-6" src="/svgs/github.svg" alt="Github nicejade">
              </a>
              <a href="https://x.com/MarshalXuan" target="_blank" rel="noopener noreferrer">
                <img class="w-5 h-5 desktop:w-6 desktop:h-6" src="/svgs/x.svg" alt="X MarshalXuan">
              </a>
              <a href="https://www.youtube.com/@MarshalXuan" target="_blank" rel="noopener noreferrer">
                <img class="w-5 h-5 desktop:w-6 desktop:h-6" src="/svgs/youtube.svg" alt="YouTube">
              </a>
              <a href="https://space.bilibili.com/690989854" target="_blank" rel="noopener noreferrer">
                <img class="w-5 h-5 desktop:w-6 desktop:h-6" src="/svgs/bilibili.svg" alt="Bilibili">
              </a>
              <a href="https://mastodon.social/@nicejade" target="_blank" rel="noopener noreferrer">
                <img class="w-5 h-5 desktop:w-6 desktop:h-6" src="/svgs/mastodon.svg" alt="Mastodon nicejade">
              </a>
              <a href="https://www.jeffjade.com/" target="_blank" rel="noopener noreferrer">
                <img class="w-5 h-5 desktop:w-6 desktop:h-6" src="/svgs/blogger.svg" alt="晚晴幽草轩">
              </a>
            </li>
          </ul>
        </div>

        <div class="flex flex-col items-start justify-between w-full desktop:w-2/3 desktop:flex-row">
          <nav class="footer-col tablet:px-[16px] laptop:px-[32px]" v-for="item in footerInfoArr" :key="item.title"
            :aria-label="item.title + '导航'">
            <h2
              class="item w-full tablet:h-full laptop:h-full desktop:text-brand desktop:vivo-blod-font flex justify-between items-center tablet:cursor-pointer laptop:cursor-pointer desktop:text-xl text-base desktop:mb-[20px]"
              @click="onItemClick">
              {{ item.title }}
              <img class="to-bottom desktop:hidden" src="./../assets/icons/bottom.svg" :alt="`展开${item.title}菜单`" />
            </h2>
            <ul class="ml-5 desktop:ml-0">
              <li
                class="item flex justify-between mt-0 desktop:mt-2 items-center desktop:text-base text-sm cursor-pointer text-greyblack hover:text-brand leading-[30px]"
                v-for="citem in item.branch" :key="citem.title">
                <a :href="citem.url" target="_blank" rel="noopener noreferrer" :title="citem.title">
                  {{ citem.title }}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <div class="h-16 mt-5 text-sm text-greyblack desktop:text-base">
      <p>© {{ currentYear }} lovejade.cn 保留所有权利</p>
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
      }
    ]
  },
  {
    title: '友情链接',
    branch: [
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
@media screen and (max-width: 1439px) {
  .footer-col {
    width: 100%;
    height: 40px;
    border-top: 1px solid #ebedf0;
    overflow: hidden;
    transition: all 0.8s;

    &.active {
      max-height: 256px;
      height: auto;
      transition: all 0.8s;
    }

    .item {
      height: 40px;
      -webkit-tap-highlight-color: transparent;
      tap-highlight-color: transparent;
    }
  }

  .to-bottom {
    display: block;
    width: 16px;
    height: 16px;
    transition: all 0.8s;
  }

  .active {
    .to-bottom {
      transform: rotateX(180deg);
    }
  }
}
</style>
