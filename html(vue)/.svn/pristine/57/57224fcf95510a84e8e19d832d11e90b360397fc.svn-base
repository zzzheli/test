<template>
  <div>
    <!--找职位banner-->
    <div class="find-banner">
      <div class="container">
        <div class="row">
          <!--职位搜索侧边栏-->
          <div class="jobBar col-lg-3 col-md-3">
            <!--左边栏-->
            <div class="jobBar-box" v-for="(bar,index) in bars" :key="index" @mouseenter="enter(index)" @mouseleave="leave(index)">
              <!--一级菜单-->
              <div class="jobBar-in">
                <img class="job-icon" :src="bar.jobicon">
                <span class="jobBar-title">{{bar.title}}</span>
                <img class="right-icon" :src="bar.righticon">
              </div>
              <!--二级菜单-->
              <div class="jobBar-ul">
                <a class="jobBar-li pointer" @click="goJobList(item.id)" v-for="item in bar.text">{{item.name}}</a>
              </div>
              <!--右边栏、三级菜单-->
              <div class="job-list">
                <ul class="job-list-box" v-for="(userJob,index) in userJobs" :key="index" v-if="bar.onUser">
                  <li class="job-list-title">{{userJob.title}}</li>
                  <li class="pointer" @click="goJobList2(item.type,item.id)" v-for="item in userJob.lv">{{item.name}}</li>
                </ul>
                <ul class="job-list-box" v-for="(developJob,index) in developJobs" :key="index" v-if="bar.onDevelop">
                  <li class="job-list-title">{{developJob.title}}</li>
                  <li class="pointer" @click="goJobList2(item.type,item.id)" v-for="item in developJob.lv">{{item.name}}</li>
                </ul>
                <ul class="job-list-box" v-for="(dataJob,index) in dataJobs" :key="index" v-if="bar.onData">
                  <li class="job-list-title">{{dataJob.title}}</li>
                  <li class="pointer" @click="goJobList2(item.type,item.id)" v-for="item in dataJob.lv">{{item.name}}</li>
                </ul>
              </div>
            </div>
          </div>
          <!--职位banner轮播图\公司搜索框-->
          <div class="jobBanner col-lg-9 col-md-9" id="page1">
            <!--公司搜索框-->
            <div class="companyFind">
              <div class="companyName">公司名称</div>
              <input class="typeName" type="text" v-model="companyName" placeholder="输入公司名称"/>
              <button class="btn btnFind" @click="skip(companyName)">
                  搜索
              </button>
            </div>
            <div class="companyFind-box"></div>
            <!--Banner轮播图-->
            <div class="swiper-button-prev prev" slot="button-prev"></div>
            <swiper class="bannerSwiper" :options="bannerOption" ref="bannerSwiper" v-if="bannerSlides.length">
              <swiper-slide class="bannerSlide" v-for="(slide,index) in bannerSlides" :key="index">
                <a class="find-banner-box">
                  <img class="find-banner-img" :src="slide.imageUrl" alt="" >
                </a>
              </swiper-slide>
            </swiper>
            <div class="pagination1"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </div>
        </div>
      </div>
    </div>
    <!--推荐职位、最新职位-->
    <div class="jobs">
      <div class="container">
        <!--职位切换、跳转-->
        <div class="job-title row">
          <span class="recjob-title pointer" @click="toRecJob()" :class="{on:onjob}">推荐职位</span>
          <span class="newjob-title pointer" @click="toNewJob()" :class="{on:!onjob}">最新职位</span>
          <a class="morejob pointer" @click="toJobList">查看更多&nbsp></a>
        </div>
        <!--推荐职位-->
        <div class="joblist row" v-if="onjob">
          <div class="joblist-box pointer" v-for="(recjob, index) in recJobs" :key="index" @click="gojobDetail(recjob.jobId)">
            <div class="joblist-img-box">
              <img class="joblist-img" v-lazy="recjob.companyLogo">
            </div>
            <div class="joblist-text-box">
              <p class="joblist-salary">{{recjob.jobSalary | salary}}</p>
              <p class="joblist-name">{{recjob.jobName}}</p>
              <p class="joblist-company">{{recjob.jobCompany}}</p>
            </div>
          </div>
        </div>
        <!--最新职位-->
        <div class="joblist row" v-else>
          <div class="joblist-box pointer" v-for="(newjob, index) in newJobs" :key="index" @click="gojobDetail(newjob.jobId)">
            <div class="joblist-img-box">
              <img class="joblist-img" v-lazy="newjob.companyLogo">
            </div>
            <div class="joblist-text-box">
              <p class="joblist-salary">{{newjob.jobSalary | salary}}</p>
              <p class="joblist-name">{{newjob.jobName}}</p>
              <p class="joblist-company">{{newjob.jobCompany}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--推荐公司-->
    <div class="companies">
      <div class="container">
        <div class="company-title row">
          <span class="recCompany-title pointer" @click="toRecCompany()">推荐公司</span>
          <router-link to="/findElites/companyList" class="moreCompany">查看更多&nbsp></router-link>
        </div>
        <!--最新认证公司、普通公司-->
        <div class="newRec-common row">
          <!--认证公司-->
          <div class="newRec-company pointer point" @click="goRecComp(newRcompanies.companyId,newRcompanies.companyName)">
            <span class="companyName">{{newRcompanies.companyName}}</span>
            <div class="newRcompany-text">
              <div class="companydetail">
                <img src="../assets/img/companyListTypeWhite.png">
                <span>{{recTrade | trade}}</span>
              </div>
              <div class="companydetail">
                <img src="../assets/img/companyListfinancingWhite.png">
                <span>{{newRcompanies.companySize | size}}</span>
              </div>
              <div class="companydetail">
                <img src="../assets/img/companyListMapWhite.png">
                <span>{{newRcompanies.companyArea | area}}</span>
              </div>
            </div>
          </div>
          <!--普通公司-->
          <div class="common-company-box">
            <div class="common-company pointer" @click="goComComp(index)" v-for="(commonCompany, index) in commonCompanies" :key="index">
              <img class="companyLogo" v-lazy="commonCompany.companyLogo">
            </div>
          </div>
        </div>
        <!--最新发布职位的认证公司-->
        <div class="newJob-company row">
          <div class="col-lg-12" v-if="companySlides.length">
            <div class="newJob-company-box" id="page2">
              <swiper class="newJobCompSwiper" :options="companyOption" ref="companySwiper">
                <swiper-slide v-for="(companySlide, index) in companySlides" :key="companySlide.index">
                  <div class="companySlide pointer" @click="goNewRecComp(index)">
                    <div class="newJobComp-img-box">
                      <img class="newJobComp-img object-fit" v-lazy="companySlide.companyLogo" :alt="companySlide.companyName" >
                    </div>
                    <div class="com-detail">
                      <div class="companyName">{{companySlide.companyName}}</div>
                      <div class="companySlogan">{{companySlide.companySlogan}}</div>
                      <p class="comp-trade-box">
                        <span class="comp-trade" v-for="(item, index) in tradeItems[index]">{{item | trade}}</span>
                      </p>
                    </div>
                    <div class="comp-job">
                      <div class="comp-job-title">正在热招</div>
                      <span class="comp-job-text" v-for="(item, index) in jobItems[index]">{{item}}</span>
                    </div>
                  </div>
                </swiper-slide>
              </swiper>
              <div class="pagination2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--宣传介绍-->
    <div class="Introduction">
      <div class="Introduction-box container">
        <div class="row">
          <div class="col-sm-6 content-img">
            <img src="../assets/img/findJob-safe.png" alt="图片">
          </div>
          <div class="col-sm-6 content-box">
            <div class="content">
              <strong class="ct-strong">无成本，零风险</strong>
              <p class="ct-first-p">无任何隐含费用全程免费</p>
              <p class="ct-finally-p">人才从投递到成功入职不需要任何费用，通过测试后还可免费提供从业建议，不浪费每一分天赋。</p>
            </div>
          </div>
        </div>
        <div class="row row-second">
          <div class="col-sm-6 content-box-second">
            <div class="content">
              <strong class="ct-strong">高效匹配，高度契合</strong>
              <p class="ct-finally-p">1-3天发送首个聘请通知甄选职位<br>
                深度匹配&nbsp&nbsp发送聘请通知</p>
              <p class="ct-finally-p">3-5天安排候选人面试<br>
                安排面试&nbsp&nbsp协助客户快速入职</p>
              <p class="ct-finally-p">平均15天推荐成功<br>
                多方洽谈&nbsp&nbsp售后服务</p>
            </div>
          </div>
          <div class="col-sm-6 content-img-second">
            <img src="../assets/img/finJob-hq.png" alt="图片">
          </div>
        </div>
        <div class="row findJob-bottom">
          <img class="findJob-bottom-box" src="../assets/img/findJob-bottom.jpg">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userIcon from './../assets/img/user-icon.png'
import userActiveIcon from './../assets/img/user-active-icon.png'
import dataIcon from './../assets/img/data-icon.png'
import dataActiveIcon from './../assets/img/data-active-icon.png'
import developIcon from './../assets/img/develop-icon.png'
import developActiveIcon from './../assets/img/develop-active-icon.png'
import rightIcon from './../assets/img/right-icon.png'
import rightActiveIcon from './../assets/img/right-active-icon.png'
import {getBanner} from '@/request/api'
import {getRecjob} from '@/request/api'
import {getNewfindjob} from '@/request/api'
import {getNewAutone} from '@/request/api'
import {getComcompany} from '@/request/api'
import {getNewJobCompany} from '@/request/api'

export default {
  name: 'findJob',
  data () {
    return {
      // 职位搜索一二级菜单
      bars: [
        {
          jobicon: userIcon,
          title: '用户体验',
          righticon: rightIcon,
          text: [
            { id: '0', name: '产品' },
            { id: '1', name: 'UI' },
            { id: '2', name: 'QA' }
          ],
          onUser: false
        },
        {
          jobicon: developIcon,
          title: '研发',
          righticon: rightIcon,
          text: [
            { id: '3', name: 'Android' },
            { id: '4', name: 'IOS' },
            { id: '5', name: 'WEB' },
            { id: '6', name: 'OP' },
            { id: '7', name: 'JAVA' }
          ],
          onDevelop: false
        },
        {
          jobicon: dataIcon,
          title: '大数据',
          righticon: rightIcon,
          text: [
            { id: '8', name: 'NLP' },
            { id: '9', name: 'DM' },
            { id: '10', name: 'DL' }
          ],
          onData: false
        }
      ],
      // 职位搜索三级菜单
      userJobs: [
        {
          title: '产品',
          lv: [
            { type: '0', id: '0', name: '助理' },
            { type: '0', id: '1', name: '初级' },
            { type: '0', id: '2', name: '中级' },
            { type: '0', id: '3', name: '高级' },
            { type: '0', id: '4', name: '总监' }
          ]
        },
        {
          title: 'UI',
          lv: [
            { type: '1', id: '0', name: '初级' },
            { type: '1', id: '1', name: '中级' },
            { type: '1', id: '2', name: '高级' },
            { type: '1', id: '3', name: '总监' }
          ]
        },
        {
          title: 'QA',
          lv: [
            { type: '2', id: '0', name: '初级' },
            { type: '2', id: '1', name: '中级' },
            { type: '2', id: '2', name: '高级' }
          ]
        }
      ],
      developJobs: [
        {
          title: 'Android',
          lv: [
            { type: '3', id: '0', name: '初级' },
            { type: '3', id: '1', name: '中级' },
            { type: '3', id: '2', name: '高级' }
          ]
        },
        {
          title: 'IOS',
          lv: [
            { type: '4', id: '0', name: '初级' },
            { type: '4', id: '1', name: '中级' },
            { type: '4', id: '2', name: '高级' }
          ]
        },
        {
          title: 'WEB',
          lv: [
            { type: '5', id: '0', name: '初级' },
            { type: '5', id: '1', name: '中级' },
            { type: '5', id: '2', name: '高级' }
          ]
        },
        {
          title: 'OP',
          lv: [
            { type: '6', id: '0', name: '初级' },
            { type: '6', id: '1', name: '中级' },
            { type: '6', id: '2', name: '高级' }
          ]
        },
        {
          title: 'JAVA',
          lv: [
            { type: '7', id: '0', name: '初级' },
            { type: '7', id: '1', name: '中级' },
            { type: '7', id: '2', name: '高级' },
            { type: '7', id: '3', name: '总监' }
          ]
        }
      ],
      dataJobs: [
        {
          title: 'NLP',
          lv: [
            { type: '8', id: '0', name: '初级' },
            { type: '8', id: '1', name: '中级' },
            { type: '8', id: '2', name: '高级' }
          ]
        },
        {
          title: 'DM',
          lv: [
            { type: '9', id: '0', name: '初级' },
            { type: '9', id: '1', name: '中级' },
            { type: '9', id: '2', name: '高级' }
          ]
        },
        {
          title: 'DL',
          lv: [
            { type: '10', id: '0', name: '初级' },
            { type: '10', id: '1', name: '中级' },
            { type: '10', id: '2', name: '高级' }
          ]
        }
      ],
      // Banner
      bannerSlides: '',
      bannerOption: {
        notNextTick: true,
        direction: 'horizontal',
        loop: true,
        autoplay: {
          disableOnInteraction: false
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.pagination1',
          clickable: true
        }
      },
      // 推荐职位\最新职位
      recJobs: '',
      newJobs: '',
      onjob: true,
      // 推荐公司
      newRcompanies: '',
      recTrade: [],
      tradeItems: [],
      jobItems: [],
      commonCompanies: '',
      companySlides: '',
      companyOption: {
        notNextTick: true,
        direction: 'vertical',
        loop: true,
        slidesPerView: 'auto',
        speed: 800,
        autoplay: {
          disableOnInteraction: false
        },
        pagination: {
          el: '.pagination2',
          clickable: true
        }
      },
        //公司名字
        companyName:"",
    }
  },
  mounted () {
    this.banner()
    this.recJob()
    this.newJob()
    this.newRec()
    this.commonCompany()
    this.newJobCompany()
  },
  methods: {
    // 获取banner图
    banner () {
      getBanner({
        imageType: 1,
        num: 2
      })
        .then(res => {
          this.bannerSlides = res.data.data.banner_list
        })
        .catch(error => {
          console.log(error)
        })
    },
    // 职位搜索鼠标事件改变样式
    enter (index) {
      if (index === 0) {
        let onUser = true
        this.bars[index].jobicon = userActiveIcon
        this.bars[index].onUser = true
      } else if (index === 1) {
        let onDevelop = true
        this.bars[index].jobicon = developActiveIcon
        this.bars[index].onDevelop = true
      } else {
        let onData = true
        this.bars[index].jobicon = dataActiveIcon
        this.bars[index].onData = true
      }
      this.bars[index].righticon = rightActiveIcon
    },
    leave (index) {
      if (index === 0) {
        this.bars[index].jobicon = userIcon
        this.bars[index].onUser = false
      } else if (index === 1) {
        this.bars[index].jobicon = developIcon
        this.bars[index].onDevelop = false
      } else {
        this.bars[index].jobicon = dataIcon
        this.bars[index].onData = false
      }
      this.bars[index].righticon = rightIcon
    },
    // 获取推荐职位
    recJob () {
      getRecjob().then(res => {
          this.recJobs = res.data.data.rcmd_job_list
        })
        .catch(error => {
          console.log(error)
        })
    },
    // 获取最新职位
    newJob () {
      getNewfindjob().then(res => {
        this.newJobs = res.data.data.newJob8
      })
        .catch(error => {
          console.log(error)
        })
    },
    // 推荐职位、最新职位切换
    toRecJob () {
      this.onjob = 1
    },
    toNewJob () {
      this.onjob = 0
    },
    toJobList () {
      this.$router.push({ path: '/findJob/jobList', query: { job: this.onjob } })
    },
    // 跳转职位详情
    gojobDetail (ID) {
      this.$router.push({ path: '/findJob/jobDetail', query:{ jobId: ID} })
    },
    // 获取最新认证公司
    newRec () {
      getNewAutone().then(res => {
          this.newRcompanies = res.data.data.newAutOne
          // 切割转换所属行业
          let arr = []
          let sp = this.newRcompanies.companyTrade
          let newsp = sp.split(',')
          arr.push(newsp)
          this.recTrade = arr[0][0]
        })
        .catch(error => {
          console.log(error)
        })
    },
    // 跳转认证公司详情
    goRecComp (id,name) {
      this.$router.push({ path: '/findElites/companyDetail', query: {companyId: id, companyName: name} })
    },
    // 普通公司
    commonCompany () {
      getComcompany().then(res => {
          this.commonCompanies = res.data.data.company_one_service
        })
        .catch(error => {
          console.log(error)
        })
    },
    // 跳转普通公司
    goComComp (index) {
      this.$router.push({ path: '/findElites/companyDetail', query: {companyId: this.commonCompanies[index].companyId, companyName: this.commonCompanies[index].companyName} })
    },
    // 最新职位认证公司
    newJobCompany () {
      getNewJobCompany({
            size: 4
        })
        .then(res => {
          this.companySlides = res.data.data.company_service
          // 切割转换所属行业
          let arr = []
          let abb1 = []
          let abb2 = []
          let abb3 = []
          let abb4 = []
          for (let i = 0; i < this.companySlides.length; i++) {
            let sp = this.companySlides[i].companyTrade
            let newsp = sp.split(',')
            arr.push(newsp)
            for (let j = 0; j < arr[i].length; j++) {
              if (i === 0) {
                let num = parseInt(arr[i][j])
                abb1.push(num)
              } else if (i === 1) {
                let num = parseInt(arr[i][j])
                abb2.push(num)
              } else if (i === 2) {
                let num = parseInt(arr[i][j])
                abb3.push(num)
              } else if (i === 3) {
                let num = parseInt(arr[i][j])
                abb4.push(num)
              }
            }
          }
          this.tradeItems.push(abb1, abb2, abb3, abb4)
          // 切割转换在招职位
          let arr2 = []
          for (let i = 0; i < this.companySlides.length; i++) {
            let sp2 = this.companySlides[i].jobName
            let newsp2 = sp2.split(',')
            arr2.push(newsp2)
          }
          this.jobItems = arr2
        })
        .catch(error => {
          console.log(error)
        })
    },
    // 跳转最新发布职位的认证公司
    goNewRecComp (index) {
      this.$router.push({ path: '/findElites/companyDetail', query: {companyId: this.companySlides[index].companyId, companyName: this.companySlides[index].companyName} })
    },
    // banner公司搜索跳转
    skip :function(name){
      sessionStorage.setItem("companyNamess",JSON.stringify(name));
      this.$router.push({path: "/findJob/companySearch"});
    },
    // banner职位搜索跳转
    //一级菜单职位类别
    goJobList (jobType) {
      this.$router.push({path: "/findJob/jobSearch", query: {jobType: jobType, job: 2, load: true, findJob: 1 }})
    },
    //二级菜单职位等级
    goJobList2 (jobType,joblevel) {
      this.$router.push({path: "/findJob/jobSearch", query: {jobLevel: joblevel, jobType: jobType, job: 2, load: true, findJob: 2 }})
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/css/findJob";
</style>
