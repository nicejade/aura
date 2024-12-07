<template>
  <section class="section-container w-full bg-[#020717] flex flex-col items-center">
    <div class="title text-[80px] leading-[82px] mb-[100px] mt-[220px] laptop:text-[42px] laptop:leading-[58px] laptop:mt-[80px] laptop:mb-[32px] tablet:text-[22px] tablet:leading-[32px] tablet:mt-[40px] tablet:mb-[20px]">
      蓝河操作系统率先落地手表产品
    </div>
    <div
      class="title text-[58px] leading-[82px] mb-[40px] laptop:text-[32px] laptop:leading-[48px] laptop:mb-[20px] tablet:text-[16px] tablet:leading-[18px] tablet:mb-[18px]">
      更智慧的交互体验
    </div>
    <div
      class="flex flex-col items-center text-[#979DBB] text-[28px] leading-[48px] mb-[62px] laptop:text-[20px] laptop:leading-[32px] laptop:mb-[70px] tablet:text-[12px] tablet:leading-[20px] tablet:mb-[40px]">
      <div>AIGC表盘 随心所欲创作 畅享无限表盘</div>
      <div>vivo WATCH 3和iQOO WATCH 全新上线</div>
    </div>
    <div class="flex felx-row flex-wrap justify-between w-[1200px] laptop:w-[590px] tablet:w-[336px]">
      <img
        class="w-[260px] h-[380px] mb-[40px] laptop:w-[152px] laptop:h-[232px] laptop:mb-[60px] tablet:w-[100px] tablet:h-[152px] tablet:mt-[40px] tablet:mb-[26px]"
        src="./../assets/images/watch-1.png" alt="watch">
      <img
        class="w-[260px] h-[380px] mb-[40px] laptop:w-[152px] laptop:h-[232px] laptop:mb-[60px] tablet:w-[120px] tablet:h-[183px] tablet:mb-[35px]"
        src="./../assets/images/watch-2.png" alt="watch">
      <img
        class="w-[260px] h-[380px] mb-[40px] laptop:w-[152px] laptop:h-[232px] laptop:mb-[60px] tablet:w-[100px] tablet:h-[152px] tablet:mt-[40px] tablet:mb-[26px]"
        src="./../assets/images/watch-3.png" alt="watch">
      <img class="w-[260px] h-[380px] desktop:mb-[40px] laptop:w-[152px] laptop:h-[232px] tablet:w-[100px] tablet:h-[152px]"
        src="./../assets/images/watch-4.png" alt="watch">
      <img class="w-[260px] h-[380px] desktop:ml-[210px] laptop:w-[152px] laptop:h-[232px] tablet:w-[120px] tablet:h-[183px] tablet:mt-[9px]"
        src="./../assets/images/watch-5.png" alt="watch">
      <img class="w-[260px] h-[380px] desktop:mr-[210px] laptop:w-[152px] laptop:h-[232px] tablet:w-[100px] tablet:h-[152px]"
        src="./../assets/images/watch-6.png" alt="watch">
    </div>
  </section>
</template>

<script>
export default {
  name: 'WatchFace',
}
</script>

<style scoped lang="scss">
.title {
  background: linear-gradient(93deg, #ACC9F4 0%, rgba(191, 187, 255, 0.70) 44%, rgba(75, 110, 225, 0.64) 108%);
  background-clip: text;
  color: transparent;
}
</style>
