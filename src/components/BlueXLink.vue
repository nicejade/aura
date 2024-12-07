<template>
  <section class="section-container w-full bg-[#020717] flex flex-col items-center">
    <h1 class="title text-[58px] leading-[58px] mb-[40px] mt-[131px] font-medium desktop:font-semibold laptop:text-[32px] laptop:leading-[48px] laptop:mt-[74px] laptop:mb-[20px] tablet:text-[16px] tablet:leading-[18px] tablet:mt-[42px] tablet:mb-[12px]">开放智联 BlueXlink</h1>
    <p class="w-[1100px] text-[20px] leading-[40px] mb-[40px] text-[#979DBB] font-medium desktop:font-semibold laptop:w-[606px] laptop:text-[24px] laptop:leading-[40px] laptop:mb-[40px] tablet:w-[335px] tablet:text-[12px] tablet:leading-[20px] tablet:mb-[20px]">搭载蓝河操作系统的手表发挥出了开放智联的技术优势，以手表为中心实现设备互联互通。与手机平板设备之间共享数据，可以轻松的将通知、健康等数据进行服务流转，还可以支持交通卡，门禁卡，NFC 车钥匙。</p>
    <div class="w-[1200px] flex desktop:flex-row desktop:flex-wrap flex-col justify-between mb-[140px] laptop:w-[606px] laptop:mb-[40px] tablet:w-[335px] tablet:mb-[24px]">
      <div class="link1 w-[380px] h-[302px] rounded-[28px] p-[40px] bg-cover laptop:w-[606px] laptop:h-[482px] laptop:mb-[40px] tablet:w-[335px] tablet:h-[283px] tablet:mb-[17px] tablet:p-[30px]">
        <div class="title text-[28px] leading-[40px] font-medium desktop:font-semibold laptop:text-[32px] laptop:leading-[34px] tablet:text-[16px] tablet:leading-[18px]">分布存储，数据共享</div>
      </div>
      <div class="link2 w-[380px] h-[302px] rounded-[28px] p-[40px] bg-cover laptop:w-[606px] laptop:h-[482px] laptop:mb-[40px] tablet:w-[335px] tablet:h-[283px] tablet:mb-[17px] tablet:p-[30px]">
        <div class="title text-[28px] leading-[40px] font-medium desktop:font-semibold laptop:text-[32px] laptop:leading-[34px] tablet:text-[16px] tablet:leading-[18px]">NFC 车钥匙，一碰即开</div>
      </div>
      <div class="link3 w-[380px] h-[302px] rounded-[28px] p-[40px] bg-cover laptop:w-[606px] laptop:h-[482px] tablet:w-[335px] tablet:h-[283px] tablet:p-[30px]">
        <div class="title text-[28px] leading-[40px] font-medium desktop:font-semibold laptop:text-[32px] laptop:leading-[34px] tablet:text-[16px] tablet:leading-[18px]">交通卡，门禁卡，</div>
        <div class="title text-[28px] leading-[40px] font-medium desktop:font-semibold laptop:text-[32px] laptop:leading-[34px] tablet:text-[16px] tablet:leading-[18px]">抬腕即刷，畅通无阻</div>
      </div>
      <div class="w-full mt-[40px] text-[12px] leading-[16px] text-[#414867] laptop:mt-[26px] tablet:mt-[19px] tablet:text-[8px] tablet:leading-[8px]">页面内的手表外观仅供参考，请以实物为准。</div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BlueXLink',
}
</script>

<style scoped lang="scss">
.title{
  background: linear-gradient(93deg, #ACC9F4 0%, rgba(191,187,255,0.70) 44%, rgba(75,110,225,0.64) 108%);
  background-clip: text;
  color: transparent;
}
.link1{
  background-image: url('./../assets/images/link-1.jpg');
}
.link2{
  background-image: url('./../assets/images/link-2.jpg');
}
.link3{
  background-image: url('./../assets/images/link-3.jpg');
}
</style>


