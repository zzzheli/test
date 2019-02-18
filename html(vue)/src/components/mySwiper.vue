<template>
  <div class="carousel">
    <div class="swiper-button-prev prev" slot="button-prev"></div>
    <swiper class="swiper" :options="swiperOption" ref="mySwiper">
      <swiper-slide class="swiper-box">
        <img src="../assets/img/cpn-logo1.png">
        <div class="swiper-title">北京咸蛋科技</div>
        <div class="swiper-text">萝卜多在技术人员的推荐成功率出奇的高，绝对值得一试！</div>
      </swiper-slide>
      <swiper-slide class="swiper-box">
        <img src="../assets/img/cpn-logo2.png">
        <div class="swiper-title">北京美数信息科技</div>
        <div class="swiper-text">萝卜多的推荐非常精准，可以很好领会用人单位对技术人员的需求，并且能够快速给到候选人。是非常好的招聘合作伙伴。</div>
      </swiper-slide>
      <swiper-slide class="swiper-box">
        <img src="../assets/img/cpn-logo3.png">
        <div class="swiper-title">北京贝兔科技</div>
        <div class="swiper-text">跟萝卜王（葡萄藤CEO李亚冲）认识很久了，对他的能力和思想都非常的认同，今年开始自己创业，也从这里请了几个萝卜共事，结果是非常满意的。支持葡萄藤，推荐萝卜多。</div>
      </swiper-slide>
      <swiper-slide class="swiper-box">
        <img src="../assets/img/cpn-logo4.png">
        <div class="swiper-title">中国康辉旅游社集团</div>
        <div class="swiper-text">萝卜多”对应聘者和招聘公司的需求了解的非常清晰，不像平台类产品的以量取胜，而是量身定做的以质取胜。通过“萝卜多”内推的员工已成为能够独当一面的核心骨干。</div>
      </swiper-slide>
      <swiper-slide class="swiper-box">
        <img src="../assets/img/cpn-logo5.png">
        <div class="swiper-title">北京拓尔思信息科技</div>
        <div class="swiper-text">萝卜多推荐的同学有一个共性就是高度的工作责任感与吃苦耐劳的结合，同时技术过硬，工作扎实、认真。来我司服务的两名同事入职以来，表现优异，都在工作中起到了关键作用。萝卜多，为你点个赞</div>
      </swiper-slide>
      <swiper-slide class="swiper-box">
        <img src="../assets/img/cpn-logo6.png">
        <div class="swiper-title">北京天晓启航</div>
        <div class="swiper-text">萝卜多推荐的人才质量比较高，很务实，很给力！</div>
      </swiper-slide>
    </swiper>
    <div class="swiper-button-next next" slot="button-next"></div>
  </div>
</template>

<script>
export default {
  name: 'mySwiper',
  data () {
    return {
      swiperOption: {
        notNextTick: true,
        direction: 'horizontal',
        loop: true,
        autoplay: {
          autoplay: true,
          delay: 3000,
          disableOnInteraction: false
        },
        speed: 800,
        slidesPerView: 4,
        spaceBetween: 15,
        breakpoints: {
          767: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          991: {
            slidesPerView: 2
          }
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/css/swiper.scss";
</style>
