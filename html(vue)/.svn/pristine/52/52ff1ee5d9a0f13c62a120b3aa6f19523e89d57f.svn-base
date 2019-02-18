<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <ul class="about-sidebar col-lg-2 col-md-2 col-xs-12">
          <li class="about-bar pointer" v-for="(li, index) in list" @click="select(index)" :class="{active: on === index}">
            <i :class="li.icon"></i>
            <span class="sideColor">{{li.title}}</span>
          </li>
        </ul>
        <div class="about-contact col-lg-9 col-md-9 col-xs-12" v-if="on">
          <div class="contact-h">北京葡萄藤信息技术有限公司</div>
          <div>
            <div class="about-cont-col col-sm-6">
              <img src="../assets/img/about-phone.png"/>
              <span>&nbsp;&nbsp;电话： (010)59478634</span>
            </div>
            <div class="about-cont-col col-sm-6">
              <img src="../assets/img/about-internet.png"/>
              <span>&nbsp;&nbsp;网址： www.luoboduo.com</span>
            </div>
          </div>
          <div>
            <div class="about-cont-col col-sm-6">
              <img src="../assets/img/about-email.png"/>
              <span>&nbsp&nbsp邮箱： kefu@ptteng.com</span>
            </div>
            <div class="about-cont-col about-cont-address col-sm-6">
              <img src="../assets/img/about-address.png"/>&nbsp&nbsp
              <span>地址： 北京市亦庄经济技术开发区科创十二街鸿坤云时代B2座B303室</span>
            </div>
          </div>
          <img class="col-sm-12 col-xs-12" src="../assets/img/about-map.jpg"/>
        </div>
        <div class="about-article col-lg-9 col-md-9 col-xs-12" v-else>
          <span class="about-h">什么是萝卜多</span>
          <span class="about-t1">萝卜多是针对创业公司以及独立人才寻找伙伴合作，提供多对多服务，以按需推荐的方式帮助创业团队以及人才解决、盲目寻找、茫然等待的问题。萝卜多不同于其他招聘网站。萝卜多的合作企业和候选人，都是萝卜多精心筛选，认证，陪伴多年的伙伴。</span>
          <span class="about-h">萝卜多团队介绍</span>
          <span class="about-t2">成立于2014年，2015年3月开始运营，先后开启了IT修真院、草船云、萝卜多等三条项目主线，主打高质专业高效低价的理念，以卓越的技术实力和人才鉴别能力奠定基石，立足市场。</span>
          <span class="about-t2">葡萄藤始终秉持促进中国企业创新与成长为愿景，凭借其团队丰富的行业经验和全球资源网络以及在业界的声誉，不遗余力地帮助创业家和他们的企业突破自我、不断创新、共创事业、共享成功！</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      on: null,
      list: [
        {
          title: '关于我们',
          icon: 'about-pic'
        },
        {
          title: '联系我们',
          icon: 'contact-pic'
        }
      ]
    }
  },
  mounted () {
    this.on = Number(this.$route.query.on)
  },
  watch: {
    '$route' () {
      this.on = Number(this.$route.query.on)
    }
  },
  methods: {
    select (index) {
      this.$router.push({ path: '/about' ,query: {on: index} })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/css/about";
</style>
