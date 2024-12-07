<template>
  <section class="banner-section" itemscope itemtype="http://schema.org/WebSite">
    <el-carousel :height="height" arrow="never" :autoplay="false" indicator-position="none">
      <el-carousel-item>
        <div
          class="bg-img w-full flex items-center justify-center h-[460px] laptop:h-[920px] desktop:h-[100vh] bg-cover bg-center text-white flex-col text-start">
          <header
            class="tablet:mt-[52px] laptop:mt-[90px] tablet:mb-[12px] laptop:mb-[24px] desktop:mb-[30px] flex flex-col desktop:flex-row desktop:items-center">
            <h1 itemprop="name"
              class="gradient-title font-extrabold whitespace-nowrap tablet:text-[30px] tablet:leading-[30px] laptop:text-[60px] laptop:leading-[76px] desktop:text-[88px] desktop:leading-[88px] desktop:font-bold">
              清风明月轩
            </h1>
          </header>

          <div itemprop="description"
            class="gradient-desc text-greywhile tablet:mb-[12px] laptop:mb-[39px] desktop:mb-[40px] laptop:text-[28px] desktop:text-[28px] tablet:text-[14px] tablet:leading-[24px] laptop:leading-[42px] desktop:leading-[40px]">
            收录精心打磨的轩帅作品与独立网站
          </div>

          <a itemprop="url" class="homepage-link outline-none flex justify-center items-center tablet:w-[80px] tablet:h-[30px] laptop:w-[160px] laptop:h-[60px] 
            desktop:w-[176px] desktop:h-[52px] tablet:text-[12px] laptop:text-[24px] desktop:text-[20px] rounded-[30px] 
            desktop:rounded-[26px] border border-white text-white bg-[rgba(255,255,255,0.20)]"
            href="https://www.niceshare.site/" target="_blank" rel="noopener" aria-label="访问个人主页">
            个人主页
          </a>
        </div>
      </el-carousel-item>
    </el-carousel>
  </section>
</template>

<script>
export default {
  name: 'Banner',

  data() {
    return {
      height: '100vh',
    }
  },

  mounted() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },

  methods: {
    handleResize() {
      const screenWidth = window.innerWidth
      if (screenWidth >= 1440) {
        this.height = '100vh'
      } else if (screenWidth >= 768) {
        this.height = '920px'
      } else {
        this.height = '460px'
      }
    },
  },
}
</script>

<style scoped lang="scss">
.bg-img {
  background-image: url('https://www.thebettersites.com/images/Banner/mobile.jpeg');

  @media screen and (min-width: 1440px) {
    background-image: url('https://www.thebettersites.com/images/Banner/pc.jpeg');
  }
}

.gradient-title {
  background: linear-gradient(to right, #f3f9a7, #FBD786, #C6FFDD);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-font-smoothing: antialiased;
}

.gradient-desc {
  background: linear-gradient(to right, #c6ffdd, #fbd786, #f7797d);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-font-smoothing: antialiased;
}

.homepage-link:hover {
  cursor: pointer;
  animation: jelly 0.5s;
}

@keyframes jelly {

  0%,
  100% {
    transform: scale(1, 1);
  }

  25% {
    transform: scale(0.9, 1.1);
  }

  50% {
    transform: scale(1.1, 0.9);
  }

  75% {
    transform: scale(0.95, 1.05);
  }
}
</style>