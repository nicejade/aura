<template>
  <section id="key-tech" class="w-full bg-silverwhile flex flex-col items-center relative">
    <div class="module-warpper module-space desktop:mb-[40px] tablet:mb-[20px]">
      <img class="blueos-logo" src="./../assets/images/BlueOS-black.png" alt="BlueOS Logo" />
      <h2 class="large-title vivo-blod-font font-medium">关键技术</h2>
    </div>

    <div class="desktop:h-[260vh] animate-containers w-full h-auto m-auto relative">
      <div id="kt-animate-trigger" class="desktop:h-[160vh] items-center desktop:overflow-hidden flex flex-col">
        <figure class="img tablet:px-[16px] laptop:px-[32px] mt-[-8px]"></figure>
        <ul
          class="list w-full mx-auto flex flex-row items-start justify-between flex-wrap desktop:max-w-[1200px] laptop:px-[32px] tablet:px-[16px]"
        >
          <li
            v-for="(item, idx) in keyTechList"
            :key="idx"
            class="item tablet:w-full laptop:w-[49%] desktop:w-[31%] flex flex-row items-start justify-start desktop:mb-[50px] laptop:mb-[32px] tablet:mb-[16px] tablet:rounded-2xl tablet:border tablet:py-[20px] laptop:py-[40px] tablet:px-[15px] laptop:px-[30px]"
          >
            <VTooltip class="desktop:block laptop:hidden tablet:hidden">
              <div class="flex flex-row items-start justify-start tablet:space-x-4 space-x-[20px] cursor-pointer">
                <div class="desktop:w-[60px] desktop:h-[60px] desktop:min-w-[60px] w-[40px] h-[40px] min-w-[40px]">
                  <img class="block w-full h-full" :src="getIconPath(item.icon)" :alt="item.title" />
                </div>
                <div class="flex flex-col text-left">
                  <strong class="title text-black text-[20px] font-medium whitespace-nowrap">{{ item.title }}</strong>
                  <p
                    class="desc text-silver pt-[16px] text-[16px] tablet:text-[14px] tablet:leading-[24px] ellipsis-text"
                  >
                    {{ filterHtmlTag(item.desc) }}
                  </p>
                </div>
              </div>
              <template #popper>
                <div class="desktop:w-[460px]">
                  <div class="desktop:w-[60px] desktop:h-[60px] desktop:min-w-[60px] w-[40px] h-[40px] min-w-[40px]">
                    <img class="block w-full h-full" :src="getIconPath(item.icon)" :alt="item.title" />
                  </div>
                  <div class="flex flex-col text-left">
                    <strong class="title text-black text-[20px] font-medium whitespace-nowrap">{{ item.title }}</strong>
                    <p
                      class="desc text-silver pt-[16px] text-[16px] tablet:text-[14px] tablet:leading-[24px]"
                      v-html="item.desc"
                    ></p>
                  </div>
                </div>
              </template>
            </VTooltip>
            <div
              class="desktop:hidden laptop:flex tablet:flex flex flex-row items-start justify-start tablet:space-x-4 space-x-[20px]"
            >
              <div class="desktop:w-[60px] desktop:h-[60px] desktop:min-w-[60px] w-[40px] h-[40px] min-w-[40px]">
                <img class="block w-full h-full" :src="getIconPath(item.icon)" :alt="item.title" />
              </div>
              <div class="flex flex-col text-left">
                <strong class="title text-black text-xl whitespace-nowrap">{{ item.title }}</strong>
                <p
                  class="desc text-silver pt-[16px] text-[16px] tablet:text-[14px] tablet:leading-[24px] ellipsis-text"
                >
                  {{ filterHtmlTag(item.desc) }}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
import { VTooltip, Tooltip } from 'floating-vue'
import 'floating-vue/dist/style.css'
import { gsap, ScrollTrigger } from 'gsap/all'
import { isSmallerScreen } from './../helper/utils'

import FloatingVue from 'floating-vue'

FloatingVue.options.themes.tooltip.delay.hide = 300
FloatingVue.options.distance = 10

gsap.registerPlugin(ScrollTrigger)
Vue.directive('tooltip', VTooltip)
Vue.component('VTooltip', Tooltip)

const keyTechList = [
  {
    title: 'AI 能力',
    desc: '通过 vcap 能力升级，完成对算法层的推理支持，有 AI 大模型的加持，实现 AI 服务引擎和多模输入子系统，探索出应用开发新范式，带来多模态交互新体验，打造 AI 时代智慧操作系统新型应用。',
    icon: 'ai'
  },
  {
    title: '虚拟显卡框架',
    desc: `推出了虚拟显卡解决方案，实现了超级渲染树，将每个应用一颗渲染树整合成多应用共用一颗根渲染树，并行渲染对渲染整个流程进行并行化处理，异构渲染支持将多种硬件融合进行渲染，解决了丢帧、掉帧、帧同步的问题。`,
    icon: 'framework'
  },
  {
    title: 'Runtime',
    desc: 'Runtime 执行引擎做了技术突破，同时还将前端框架下沉，针对关键场景提供直通调用通道，一步直达内核。',
    icon: 'runtime'
  },
  {
    title: '超级协程',
    desc: '超级协程将资源与协程进行绑定，既拥有协程原有的优势(轻量、更低的切换开销)，同时又能被安全取消从而不浪费 CPU 执行指令。',
    icon: 'coroutine'
  },
  {
    title: 'Rust 语言开发',
    desc: '基于高安全、高性能的 Rust 语言开发系统框架，Rust 一系列的安全技术特性，保障了内存安全和并发安全。',
    icon: 'rust'
  },
  {
    title: 'BlueXlink',
    desc: '基于 vivo 自研的 BlueXlink 跨端智联技术，采用了分布式设计理念，兼容行业标准协议，让数据可以在多设备间完成高效、稳定、安全的流转和访问。',
    icon: 'bluehyperlink'
  }
]

export default {
  name: 'KeyTech',

  data() {
    return {
      keyTechList: Object.freeze(keyTechList)
    }
  },

  created() {
    this.$nextTick(() => {
      if (isSmallerScreen()) return

      this.addDynamicAnimate()
    })
  },

  methods: {
    getIconPath(name) {
      const icons = require.context('./../assets/icons/', false, /\.svg$/)
      return icons('./' + name + '.svg')
    },

    filterHtmlTag(str = '') {
      return str.replace(/<(.|\n)*?>/g, '')
    },

    addDynamicAnimate() {
      const trigger = gsap.timeline({
        scrollTrigger: {
          toggleActions: 'restart none reverse none',
          trigger: `#kt-animate-trigger`,
          start: 'top top',
          end: 'top -150%',
          pin: true,
          duration: 12,
          scrub: 0.2
        }
      })
      trigger
        .fromTo(
          `#kt-animate-trigger .img`,
          {
            scale: 5,
            duration: 8,
            onComplete: function () {}
          },
          {
            scale: 1,
            duration: 8
          }
        )
        .fromTo(
          `#kt-animate-trigger .list .item`,
          { y: 50, autoAlpha: 0, stagger: 0.3 },
          { y: 0, autoAlpha: 1, stagger: 1 }
        )
    }
  }
}
</script>

<style scoped lang="scss">
.ellipsis-text {
  overflow: hidden;
  -webkit-text-overflow: ellipsis;
  -moz-text-overflow: ellipsis;
  -ms-text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
@media screen and (max-width: 1439px) {
  .ellipsis-text {
    display: block;
    overflow: visible;
    text-overflow: initial;
  }
}

#kt-animate-trigger {
  width: 100%;
  overflow: hidden;
  .img {
    position: absolute;
    left: 50%;
    width: 770px;
    height: 703px;
    transform: translate(-50%, 0%) scale(1) translate3d(0px, 0px, 0px);
    transform-origin: 50% 20%;
    background-size: 770px 703px;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('./../assets/images/key-tech.jpg');
    background-position: center;
    background-repeat: no-repeat;
  }
}
@media screen and (max-width: 1439px) {
  #kt-animate-trigger {
    .img {
      position: relative;
      top: 0;
      left: 0;
      transform: none;
      width: 100vw;
      height: 91.46667vw;
      aspect-ratio: 1/1;
      background-size: 100%;
    }
  }
}

@media screen and (min-width: 1440px) and (max-width: 1680px) {
  .animate-containers {
    min-height: 2080px;
  }
  #kt-animate-trigger {
    min-height: 900px;
    .img {
      width: 663px;
      height: 606px;
      background-size: 663px 606px;
    }
    .list {
      margin: 540px 0 0 0;
      padding-top: 0;
      padding-bottom: 72px;
      .item {
        margin-bottom: 30px;
        .title {
          font-size: 20px;
        }
        .desc {
          font-size: 14px;
          padding-top: 5px;
        }
      }
    }
  }
}

@media screen and (min-width: 1681px) {
  .animate-containers {
    min-height: 2680px;
  }
  #kt-animate-trigger {
    .list {
      margin: 680px 0 0 0;
      padding-top: 0;
      padding-bottom: 90px;
      .item {
        .title {
          font-size: 28px;
        }
        .desc {
          font-size: 16px;
        }
      }
    }
  }
}
@media screen and (min-width: 1920px) and (max-width: 2560px) {
  #kt-animate-trigger {
    .list {
      margin: 800px 0 0 0;
      padding-top: 0;
      padding-bottom: 90px;
      .item {
        .title {
          font-size: 28px;
        }
        .desc {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
