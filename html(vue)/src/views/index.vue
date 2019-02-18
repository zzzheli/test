<template>
  <div class="home">
    <!--首页Banner-->
    <div class="carousel-content">
      <swiper class="bannerSwiper" :options="bannerOption" ref="bannerSwiper" v-if="bannerSlides.length">
        <swiper-slide class="bannerSlide" v-for="(slide,index) in bannerSlides" :key="index">
          <a>
            <img :src="slide.imageUrl" alt="">
          </a>
        </swiper-slide>
      </swiper>
    </div>
    <!--宣传栏-->
    <div class="feature-content">
      <div class="container">
        <div class="feature row">
          <div class="feature-box col-md-3">
            <img class="feature-pic" src="../assets/img/banner-pic1.png"/>
            <span class="feature-t1">超短响应时间</span>
            <span class="feature-t2">48小时高效推荐</span>
          </div>
          <div class="feature-box col-md-3">
            <img class="feature-pic" src="../assets/img/banner-pic2.png"/>
            <span class="feature-t1">行业1/3的价格</span>
            <span class="feature-t2">成功推荐仅收费1月工资</span>
          </div>
          <div class="feature-box feature-box-b col-md-3">
            <img class="feature-pic" src="../assets/img/banner-pic3.png"/>
            <span class="feature-t1">三维的人才测评</span>
            <span class="feature-t2">技术人事背景三维评定</span>
          </div>
          <div class="feature-box2 col-md-3">
            <div class="feature-inform">
              <span class="inform-num">5家</span>
              <span class="inform-text">信赖公司</span>
            </div>
            <div class="feature-inform">
              <span class="inform-num">1500+</span>
              <span class="inform-text">人才库</span>
            </div>
            <div class="feature-inform">
              <span class="inform-num">200+</span>
              <span class="inform-text">人才入职</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--最新职位-->
    <div class="newJob-content">
      <div class="container">
        <div class="newJob row">
          <div class="newJob-title col-md-12">
            <span class="newJob-title-text">最新职位</span>
            <div class="newJob-border"></div>
            <span class="newJob-title-en">NEW POSITION</span>
          </div>
        </div>
        <div class="newJobRow row">
          <a class="newJob-more pointer" @click="goNewJob">更多&nbsp></a>
          <div class="newJobCarousel">
            <div class="swiper-button-prev prev" slot="button-prev"></div>
            <swiper class="newJobSwiper" :options="newJobOption" ref="newJobSwiper" v-if="newJobSlides.length">
              <swiper-slide class="newJobSlide pointer" v-for="(slide,index) in newJobSlides" :key="index">
                <div class="logo-box" @click="goJobDetail(slide.jobId)">
                  <a class="jobCompany-logo">
                    <img class="jobCompany-logo-pic" :src="slide.companyLogo">
                  </a>
                  <a class="jobText">
                    <span class="jobName">{{slide.jobName}}</span>
                    <div class="jobName-border"></div>
                    <span class="jobCompany">{{slide.jobCompany}}</span>
                  </a>
                </div>
              </swiper-slide>
            </swiper>
            <div class="swiper-button-next next" slot="button-next"></div>
          </div>
        </div>
      </div>
    </div>
    <!--服务流程-->
    <div class="process-content">
      <div class="container">
        <div class="process row">
          <div class="process-t col-md-12">
            <span class="prc-tt">服务流程</span>
            <div class="prc-b"></div>
            <span class="prc-tx">SERVICE FLOW</span>
          </div>
          <div class="process-box col-md-12">
            <div class="prc-box">
              <div class="prc-card">
                <img class="prc-card-img" src="../assets/img/index-process1.jpg">
                <span class="prc-card-text">1.意向洽谈，深入评审</span>
              </div>
              <div class="prc-card card-plane">
                <img class="plane" src="../assets/img/plane-icon.png"/>
              </div>
              <div class="prc-card">
                <img class="prc-card-img" src="../assets/img/index-process2.jpg">
                <span class="prc-card-text">2.确认合作，签订合同</span>
              </div>
              <div class="prc-card card-plane">
                <img class="plane" src="../assets/img/plane-icon.png"/>
              </div>
              <div class="prc-card">
                <img class="prc-card-img" src="../assets/img/index-process3.jpg">
                <span class="prc-card-text">3.提出需求，提供js</span>
              </div>
            </div>
            <div class="prc-box">
              <div class="prc-card">
                <img class="prc-card-img" src="../assets/img/index-process4.jpg">
                <span class="prc-card-text">4.开始招聘，人才精选</span>
              </div>
              <div class="prc-card card-plane">
                <img class="plane" src="../assets/img/plane-icon.png"/>
              </div>
              <div class="prc-card">
                <img class="prc-card-img" src="../assets/img/index-process5.jpg">
                <span class="prc-card-text">5.人才评测，简历脱水</span>
              </div>
              <div class="prc-card card-plane">
                <img class="plane" src="../assets/img/plane-icon.png"/>
              </div>
              <div class="prc-card">
                <img class="prc-card-img" src="../assets/img/index-process6.jpg">
                <span class="prc-card-text">6.上岗，转入售后</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--伙伴之言-->
    <div class="partner-content">
      <div class="container">
        <div class="partner row">
          <div class="partner-title col-md-12">
            <span class="partner-title-text">伙伴之言</span>
            <div class="partner-border"></div>
            <span class="partner-title-en">PARTNER ADVICE</span>
          </div>
        </div>
        <!--轮播图-->
        <div class="row">
          <my-swiper></my-swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mySwiper from '../components/mySwiper'
import {getBanner} from '@/request/api'
import {getNewjob} from '@/request/api'
export default {
  name: 'index',
  components: { mySwiper },
  data () {
    return {
      bannerSlides: '',
      newJobSlides: '',
      //banner轮播图配置
      bannerOption: {
        notNextTick: true,
        loop: true,
        autoplay: {
          disableOnInteraction: false
        }
      },
      //职位轮播图配置
      newJobOption: {
        notNextTick: true,
        direction: 'horizontal',
        loop: true,
        simulateTouch: false,
        autoplay: {
          disableOnInteraction: false
        },
        speed: 800,
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 20,
        breakpoints: {
          767: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10
          },
          991: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 15
          }
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  mounted () {
    this.banner()
    this.newJob()
  },
  methods: {
    //首页banner请求
    banner () {
      getBanner({
        imageType: 0,
        num: 2
      })
        .then(res => {
          this.bannerSlides = res.data.data.banner_list
        })
        .catch(error => {
          console.log(error)
        })
    },
    //最新职位请求
    newJob () {
      getNewjob().then(res => {
          this.newJobSlides = res.data.data.new_job_list
        })
        .catch(error => {
          console.log(error)
        })
    },
    //跳转最新职位列表
    goNewJob () {
      // sessionStorage.setItem('num', 1)
      this.$router.push({ path: '/findJob/jobList', query: {job: 0, num: 1} })
    },
    //跳转最新职位详情
    goJobDetail (ID) {
      // sessionStorage.setItem('num', 1)
      this.$router.push({ path:'/findJob/jobDetail', query: {jobId: ID, num: 1} })
    }
  }
}
</script>

<style lang="scss">
  @import "../assets/css/home";
</style>
