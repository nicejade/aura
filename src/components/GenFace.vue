<template>
  <section class="section-container w-full bg-[#020717] flex flex-col items-center">
    <div
      class="content w-[1200px] h-[600px] rounded-[28px] flex desktop:flex-row flex-col justify-between items-center mt-[180px] laptop:w-[686px] laptop:h-[856px] laptop:mt-[80px] tablet:w-[343px] tablet:h-[563px] tablet:mt-[40px]">
      <div class="desktop:ml-[80px] laptop:mt-[42px] tablet:mt-[30px]">
        <h1
          class="title mb-[24px] text-[38px] leading-[58px] font-medium desktop:font-semibold laptop:mb-[20px] laptop:text-[32px] laptop:leading-[48px] tablet:mb-[8px] tablet:text-[16px] tablet:leading-[26px]">
          应用开发新范式，人人都能成为开发者</h1>
        <p
          class="w-[684px] text-[20px] leading-[40px] text-[#979DBB] font-medium desktop:font-semibold laptop:w-[606px] laptop:text-[24px] laptop:leading-[40px] tablet:w-[291px] tablet:text-[12px] tablet:leading-[20px]">
          蓝河系统带来的全新的智慧交互体验，用户可以直接通过语音描述对表盘的需求，自动生成表盘，我们有无限的表盘供用户随心所欲的创造，所说即可见、所见即可用。</p>
      </div>
      <div
        class="watch bg-cover w-[340px] h-[500px] mt-[50px] mr-[80px] laptop:mx-auto laptop:mb-[60px] tablet:w-[230px] tablet:h-[339px] tablet:mx-auto tablet:mb-[30px]">
        <img
          class="w-[285px] h-[285px] mt-[107px] ml-[16px] rounded-[50%] tablet:w-[193px] tablet:h-[193px] tablet:mt-[73px] tablet:ml-[11px]"
          src="./../assets/video/gen-face.gif" />
      </div>
    </div>
    <div
      class="text-[#414867] w-[1200px] mt-[20px] text-[12px] leading-[18px] laptop:w-[656px] tablet:w-[346px] tablet:mt-[10px] tablet:text-[10px] tablet:leading-[16px]">
      <div>*该功能仅支持手表系统至v1.35.6及以上版本，与安卓手机配对使用，健康App需升级至v4.1.3.30及以上版本，在手表负一屏「AI表盘工坊」中体验。</div>
      <div>*展示表盘仅为示意，实际生成表盘会根据语音指令与模型算法呈现不同效果，请以实际体验为准。</div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'GenFace',
}
</script>

<style scoped lang="scss">
.content {
  background: linear-gradient(170deg, #0A1F3E 6%, rgba(15, 19, 23, 0.11) 122%);
}

.title {
  background: linear-gradient(97deg, #ACC9F4 0%, rgba(191, 187, 255, 0.70) 44%, rgba(75, 110, 225, 0.64) 107%);
  background-clip: text;
  color: transparent;
}

.watch {
  background-image: url('./../assets/images/watch-bg.png');
}</style>
