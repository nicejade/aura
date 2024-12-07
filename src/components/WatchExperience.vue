<template>
  <section class="section-container w-full bg-[#020717] flex flex-col items-center">
    <h1 class="title text-[58px] leading-[58px] mb-[40px] mt-[240px] font-medium desktop:font-semibold laptop:text-[32px] laptop:leading-[48px] laptop:mt-[100px] laptop:mb-[20px] tablet:text-[16px] tablet:leading-[18px] tablet:mt-[60px] tablet:mb-[12px]">更流畅的产品体验</h1>
    <p class="w-[860px] text-[20px] leading-[40px] mb-[60px] text-[#979DBB] font-medium desktop:font-semibold laptop:w-[606px] laptop:text-[24px] laptop:leading-[40px] laptop:mb-[29px] tablet:w-[335px] tablet:text-[12px] tablet:leading-[20px] tablet:mb-[19px]">蓝河操作系统在手表产品带来最快的应用启动速度，在打开应用、应用切换、动效渲染、滑动列表和加载等方面，都有卓越的表现。</p>
    <div class="w-[1320px] flex felx-row flex-wrap justify-center laptop:w-[686px] tablet:w-[335px]">
      <div class="watch w-[440px] h-[442px] laptop:w-[228px] laptop:h-[228px] tablet:w-[250px] tablet:h-[250px]">
        <img src="./../assets/video/exp-1.gif" class="w-[320px] h-[320px] mt-[54px] ml-[52px] rounded-[50%] laptop:w-[166px] laptop:h-[166px] laptop:mt-[27px] laptop:ml-[27px] tablet:w-[182px] tablet:h-[182px] tablet:mt-[30px] tablet:ml-[30px]"/>
      </div>
      <div class="watch w-[440px] h-[442px] laptop:w-[228px] laptop:h-[228px] tablet:w-[165px] tablet:h-[165px]">
        <img src="./../assets/video/exp-2.gif" class="w-[320px] h-[320px] mt-[54px] ml-[52px] rounded-[50%] laptop:w-[166px] laptop:h-[166px] laptop:mt-[27px] laptop:ml-[27px] tablet:w-[120px] tablet:h-[120px] tablet:mt-[20px] tablet:ml-[20px] tablet:mr-[5px]"/>
      </div>
      <div class="watch w-[440px] h-[442px] laptop:w-[228px] laptop:h-[228px] tablet:w-[165px] tablet:h-[165px]">
        <img src="./../assets/video/exp-3.gif" class="w-[320px] h-[320px] mt-[54px] ml-[52px] rounded-[50%] laptop:w-[166px] laptop:h-[166px] laptop:mt-[27px] laptop:ml-[27px] tablet:w-[120px] tablet:h-[120px] tablet:mt-[20px] tablet:ml-[20px]"/>
      </div>
      <div class="watch w-[440px] h-[442px] laptop:w-[228px] laptop:h-[228px] tablet:w-[165px] tablet:h-[165px]">
        <img src="./../assets/video/exp-4.gif" class="w-[320px] h-[320px] mt-[54px] ml-[52px] rounded-[50%] laptop:w-[166px] laptop:h-[166px] laptop:mt-[27px] laptop:ml-[27px] tablet:w-[120px] tablet:h-[120px] tablet:mt-[20px] tablet:ml-[20px] tablet:mr-[5px]"/>
      </div>
      <div class="watch w-[440px] h-[442px] laptop:w-[228px] laptop:h-[228px] tablet:w-[165px] tablet:h-[165px]">
        <img src="./../assets/video/exp-5.gif" class="w-[320px] h-[320px] mt-[54px] ml-[52px] rounded-[50%] laptop:w-[166px] laptop:h-[166px] laptop:mt-[27px] laptop:ml-[27px] tablet:w-[120px] tablet:h-[120px] tablet:mt-[20px] tablet:ml-[20px]"/>
      </div>
    </div>
    <div class="w-[1200px] laptop:w-[686px] tablet:w-[343px] mt-[20px] text-[12px] leading-[16px] text-[#414867] laptop:mt-[10px] tablet:mt-[10px] tablet:text-[8px] tablet:leading-[8px]">效果仅示意，具体界面以实际为准。</div>
  </section>
</template>

<script>
export default {
  name: 'WatchExperience',
}
</script>

<style scoped lang="scss">
.title{
  background: linear-gradient(95deg, #ACC9F4 0%, rgba(191,187,255,0.70) 44%, rgba(75,110,225,0.64) 108%);
  background-clip: text;
  color: transparent;
}

.watch{
  background-image: url('./../assets/images/watch-face-bg.png');
  background-size: cover;
}
</style>
