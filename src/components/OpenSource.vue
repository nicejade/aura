<template>
  <section
    class="relative flex flex-col items-start desktop:items-center w-full open-source-section bg-[#FAFBFC] desktop:bg-white tablet:px-[16px] laptop:px-[32px]"
    aria-label="个人开源项目展示区">
    <div class="module-warpper flex flex-row w-full items-center module-space desktop:mb-[40px] tablet:mb-[20px]">
      <h2 class="font-medium large-title vivo-blod-font">开源项目</h2>
    </div>

    <div class="desktop:h-[260vh] animate-containers w-full h-auto m-auto relative">
      <div id="kt-animate-trigger" class="desktop:h-[160vh] items-center desktop:overflow-hidden flex flex-col">
        <figure class="img tablet:px-[16px] laptop:px-[32px] mt-[-8px]"></figure>
        <ul
          class="list w-full mx-auto flex flex-row items-start justify-between flex-wrap desktop:max-w-[1200px] laptop:px-[32px] tablet:px-[16px]">
          <li v-for="(project, idx) in openSourceProjects" :key="idx"
            class="item card-item tablet:w-full laptop:w-[49%] desktop:w-[31%] desktop:mb-[50px] laptop:mb-[32px] tablet:mb-[16px]">
            <a :href="project.url" target="_blank" rel="noopener noreferrer"
              class="flex flex-col w-full h-full text-left no-underline group" :aria-label="'访问 ' + project.title">
              <strong class="card-title block text-[20px] font-medium">{{ project.title }}</strong>
              <p
                class="card-desc ellipsis-text pt-[14px] text-[15px] leading-[26px] tablet:text-[14px] tablet:leading-[24px]">
                {{ project.desc }}
              </p>
              <div v-if="project.tags && project.tags.length" class="flex flex-wrap gap-[6px] pt-[14px]">
                <span v-for="(tag, i) in project.tags" :key="i" class="tag-chip">
                  {{ tag }}
                </span>
              </div>
              <span class="card-link mt-auto pt-[16px]">{{ project.linkText }} →</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap, ScrollTrigger } from 'gsap/all'
import { isSmallerScreen } from '../helper/utils'

gsap.registerPlugin(ScrollTrigger)

const openSourceProjects = [
  {
    title: 'FDC · Fine Directory Curator',
    desc: 'Rust 构建的文件分类整理工具，按年份与类型对源目录一级项归类，支持预览、不覆盖策略，适用于 macOS 与 Linux。',
    url: 'https://fine.niceshare.site/projects/fine-directory-curator/',
    linkText: '查看项目',
    tags: ['Rust', 'CLI', 'macOS', 'Linux']
  },
  {
    title: 'Aura | Build your digital aura',
    desc: 'A beautifully crafted, animation-rich personal homepage template. Designed to help you present your projects, blogs, and digital identity — with elegance.',
    url: 'https://github.com/nicejade/aura',
    linkText: 'GitHub',
    tags: ['Vue', 'TailwindCSS', 'GSAP']
  },
  {
    title: 'Homepage',
    desc: '基于 Astro、Starlight、Svelte、Markdown、MDX、TailwindCSS、TypeScript 构建的个人主页，快速、易用、易于访问、高度可定制。',
    url: 'https://github.com/nicejade/homepage',
    linkText: 'GitHub',
    tags: ['Astro', 'Starlight', 'Svelte', 'TailwindCSS']
  },
  {
    title: 'Arya Jarvis',
    desc: '为开发人员设计的命令行工具，支持复制路径、生成密码、Prettier 美化、本地静态服务、Markdown 预览、端口查看、二维码生成等。',
    url: 'https://github.com/nicejade/arya-jarvis',
    linkText: 'GitHub',
    tags: ['Node.js', 'CLI', 'Prettier']
  },
  {
    title: 'Arya Jarvis Doc',
    desc: 'Arya Jarvis 使用文档，旨在为开发人员节省更多时间和精力，涵盖路径复制、密码生成、代码美化、本地服务、Markdown 预览等实用功能说明。',
    url: 'https://github.com/nicejade/arya-jarvis-doc',
    linkText: 'GitHub',
    tags: ['Docs', 'Docsify', 'Frontend']
  },
  {
    title: 'Nice Front-End Tutorial',
    desc: '与时俱进版前端资源、教程与见解，涵盖大前端、框架、构建工具、测试、Node、Docker 等分类，持续维护与更新。',
    url: 'https://github.com/nicejade/nice-front-end-tutorial/',
    linkText: 'GitHub',
    tags: ['Vue', 'React', 'Tutorial', 'Resources']
  }
]

export default {
  name: 'OpenSource',

  data() {
    return {
      openSourceProjects: Object.freeze(openSourceProjects)
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
      const trigger = gsap.timeline({
        scrollTrigger: {
          toggleActions: 'restart none reverse none',
          trigger: '#kt-animate-trigger',
          start: 'top top',
          end: 'top -150%',
          pin: true,
          duration: 12,
          scrub: 0.2
        }
      })
      trigger
        .fromTo(
          '#kt-animate-trigger .img',
          { scale: 5, duration: 8 },
          { scale: 1, duration: 8 }
        )
        .fromTo(
          '#kt-animate-trigger .list .item',
          { y: 50, autoAlpha: 0, stagger: 0.3 },
          { y: 0, autoAlpha: 1, stagger: 1 }
        )
    }
  }
}
</script>

<style scoped lang="scss">
.open-source-section {
  isolation: isolate;
  background: #FAFBFC;

  &::before,
  &::after {
    display: none;
  }
}

/* ─── Text ellipsis ─────────────────────────────────────────────────── */
.ellipsis-text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
}

@media screen and (max-width: 1439px) {
  .ellipsis-text {
    display: block;
    overflow: visible;
    text-overflow: initial;
  }
}

/* ─── Project card ──────────────────────────────────────────────────── */
.card-item {
  position: relative;
  overflow: hidden;
  min-height: 228px;
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.06);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(17, 24, 39, 0.06);
  padding: 26px 22px;
  cursor: pointer;
  transition:
    transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.28s ease,
    border-color 0.2s ease,
    background 0.28s ease;

  &:hover {
    transform: translateY(-6px);
    background: #ffffff;
    box-shadow: 0 24px 50px rgba(17, 24, 39, 0.12);
    border-color: rgba(15, 23, 42, 0.12);

    .card-title {
      color: #1D1D1F;
    }

    .card-link {
      color: #1D1D1F;
    }

    .card-desc {
      color: #666666;
    }
  }

  &:focus-within {
    transform: translateY(-4px);
    border-color: rgba(15, 23, 42, 0.16);
    box-shadow: 0 0 0 3px rgba(17, 24, 39, 0.08), 0 18px 40px rgba(17, 24, 39, 0.1);
  }
}

/* laptop breakpoint: 768–1439px */
@media screen and (min-width: 768px) and (max-width: 1439px) {
  .card-item {
    min-height: 236px;
    padding: 28px 24px;
    border-radius: 20px;
  }
}

/* desktop breakpoint: 1440px+ */
@media screen and (min-width: 1440px) {
  .card-item {
    min-height: 248px;
    padding: 32px 28px;
    border-radius: 30px;
  }
}

/* ─── Card internals ─────────────────────────────────────────────────── */
.card-title {
  color: #1D1D1F;
  line-height: 1.32;
  letter-spacing: -0.01em;
  transition: color 0.2s ease;
  word-break: break-word;
}

.card-desc {
  color: #86868B;
  transition: color 0.2s ease;
}

.tag-chip {
  display: inline-block;
  padding: 4px 10px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.02em;
  border-radius: 999px;
  background: #f5f5f7;
  color: #5f6368;
  border: 1px solid rgba(15, 23, 42, 0.08);
  transition: background 0.18s ease, border-color 0.18s ease, color 0.18s ease;

  .card-item:hover & {
    background: #f0f0f2;
    border-color: rgba(15, 23, 42, 0.12);
    color: #3c4043;
  }
}

.card-link {
  display: inline-block;
  font-size: 13px;
  font-weight: 600;
  color: #1D1D1F;
  letter-spacing: 0;
  transition: transform 0.2s ease, color 0.2s ease;
}

/* ─── Placeholder image ──────────────────────────────────────────────── */
#kt-animate-trigger {
  width: 100%;
  overflow: hidden;

  .img {
    position: absolute;
    left: 50%;
    width: 800px;
    height: 800px;
    transform: translate(-50%, 0%) scale(1) translate3d(0px, 0px, 0px);
    transform-origin: 50% 20%;
    background-image: url('/images/OpenSource/mars.webp');
    background-size: cover;
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
      background-size: cover;
      border-radius: 0;

      &::after {
        display: none;
      }
    }
  }
}

/* ─── Desktop responsive layout ─────────────────────────────────────── */
@media screen and (min-width: 1440px) and (max-width: 1680px) {
  .animate-containers {
    min-height: 2380px;
  }

  #kt-animate-trigger {
    min-height: 900px;

    .img {
      width: 600px;
      height: 600px;
      background-size: cover;
    }

    .list {
      margin: 620px 0 0 0;
      padding-top: 0;
      padding-bottom: 72px;
      row-gap: 12px;

      .item {
        margin-bottom: 30px;

        .card-title {
          font-size: 18px;
        }

        .card-desc {
          font-size: 13px;
          padding-top: 8px;
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
        .card-title {
          font-size: 22px;
        }

        .card-desc {
          font-size: 15px;
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
        .card-title {
          font-size: 22px;
        }

        .card-desc {
          font-size: 15px;
        }
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .open-source-section {
    background: #FAFBFC;

    &::before,
    &::after {
      display: none;
    }
  }

  .card-item {
    min-height: auto;
    border-radius: 20px;
    padding: 22px 18px;
  }
}
</style>
