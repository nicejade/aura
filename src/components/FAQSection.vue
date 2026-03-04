<template>
  <section class="w-full bg-white tablet:px-[16px] laptop:px-[32px]" role="region" aria-label="常见问题">
    <div
      class="flex flex-row w-full !items-center module-warpper tablet:mt-[20px] laptop:mt-[58px] desktop:mt-[120px] tablet:mb-[16px] laptop:mb-[34px] desktop:mb-[48px]">
      <h2 class="font-medium large-title vivo-blod-font" id="faq-section-title">常见问题</h2>
    </div>

    <div class="w-full desktop:w-[1200px] mx-auto desktop:mb-[120px] laptop:mb-[48px] tablet:mb-[24px]">
      <article v-for="(item, idx) in faqs" :key="idx"
        class="faq-item mb-6 rounded-[16px] border border-[#EAECEF] bg-[#FAFBFC] p-[18px] laptop:p-[22px]">
        <h3 class="text-[18px] leading-[28px] laptop:text-[20px] laptop:leading-[30px] font-medium text-[#1D1D1F]">
          <span>{{ item.question }}</span>
        </h3>
        <div class="mt-[8px] text-[15px] leading-[26px] text-[#5F6368]">
          <p>{{ item.answer }}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
const FAQS = [
  {
    question: '清风明月轩主要提供什么内容？',
    answer:
      '清风明月轩聚合作者的开源项目、技术博客与效率工具，帮助开发者快速了解可直接使用的产品与实践经验。'
  },
  {
    question: '这个站点适合哪些人？',
    answer:
      '适合关注前端工程化、AI 应用实践、自动化工具与独立开发的中文开发者，也适合作为个人作品集参考。'
  },
  {
    question: '站点是否面向全球访问与引用？',
    answer:
      '是。站点内容以中文为主，面向全球开发者开放访问，并提供结构化数据以提升搜索引擎和生成式答案引擎的理解与引用能力。'
  }
]

export default {
  name: 'FAQSection',
  data() {
    return {
      faqs: Object.freeze(FAQS)
    }
  }
}
</script>
