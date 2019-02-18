<template>
  <div class="jobSearch-page">
    <!--搜索栏-->
    <div class="jobSearch container">
      <!--公司、职位列表头-->
      <div class="row title-box">
        <router-link class="search-title-btn search-title-btn-off pointer" to="/findJob/companySearch">公司</router-link>
        <div class="search-title-btn pointer" @click="clearBtn">职业</div>
      </div>
      <!--搜索选项-->
      <div class="row">
        <div class="search-list-one search-list-border">
          <span class="list-first-title">关&thinsp;&thinsp;键&thinsp;&thinsp;&thinsp;词：</span>
          <input class="search-input" type="text" v-model="nameModel" placeholder="输入职位关键词：如 产品经理等"/>
          <div class="search-list-first">
            <span class="list-first-title">所在地区：</span>
            <select-area :the-area="areaModel" @update:the-area="val => areaModel = val"></select-area>
          </div>
          <div class="search-list-first">
            <span class="list-first-title">职位类别：</span>
            <div class="search-list-second pointer"
                 v-for="(item, index) in jobtypes"
                 @click="changeType(index)"
                 :class="{chooseBtn:item.btn}"
                 v-model="typeModel"
            >
              {{item.type}}
            </div>
          </div>
          <div class="search-list-third" v-if="on">
            <span class="list-third-text pointer"
                  v-for="(item, index) in joblevel"
                  @click="changeLevel(index)"
                  :class="{chooseBtn:item.btn}"
                  v-model="levelModel"
            >
              {{item.name}}
            </span>
          </div>
          <div class="search-list-first">
            <span class="list-first-title">所属行业：</span>
            <div class="search-list-second pointer pointer"
                 v-for="(item, index) in comptrades"
                 @click="changeTrade(index)"
                 :class="{chooseBtn:item.btn}"
                 v-model="tradeModel"
            >
              {{item.type}}
            </div>
          </div>
          <div class="search-list-first">
            <span class="list-first-title">学历要求：</span>
            <div class="search-list-second pointer pointer"
                 v-for="(item, index) in jobedu"
                 @click="changeEdu(index)"
                 :class="{chooseBtn:item.btn}"
            >
              {{item.type}}
            </div>
          </div>
          <div class="search-list-first">
            <span class="list-first-title">工作经验：</span>
            <div class="search-list-second pointer pointer"
                 v-for="(item, index) in jobExp"
                 @click="changeExp(index)"
                 :class="{chooseBtn:item.btn}"
            >
              {{item.type}}
            </div>
          </div>
          <div class="search-list-first">
            <span class="list-first-title">薪资水平：</span>
            <div class="search-list-second pointer pointer"
                 v-for="(item, index) in jobsalary"
                 @click="changeSalary(index)"
                 :class="{chooseBtn:item.btn}"
            >
              {{item.type}}
            </div>
          </div>
          <div class="search-list-first">
            <span class="list-first-title">发布时间：</span>
            <div class="search-list-second pointer"
                 v-for="(item, index) in jobupdate"
                 @click="changeUpdate(index)"
                 :class="{chooseBtn:item.btn}"
            >
              {{item.type}}
            </div>
          </div>
          <div class="search-btn-box">
            <button class="clear-btn" @click="clearBtn()">清空</button>
            <button class="search-btn" @click="searchBtn()">搜索</button>
          </div>
        </div>
      </div>
    </div>
    <!--搜索结果-->
    <div class="jobs container">
      <!--搜索列表-->
      <div class="jobs-row row">
        <div class="jobs-box pointer" v-for="(job, index) in jobs" @click="gojobDetail(job.jobId)">
          <div class="jobs-detail">
            <span class="jobName">{{job.jobName}}</span>
            <span class="time">发布时间：{{job.updateAt | time}}</span>
            <div class="salary">{{job.jobSalary | salary}}</div>
            <span class="area">{{job.companyArea | area}} / </span>
            <span class="edu">{{job.jobEducation | edu}} / </span>
            <span class="exp">{{job.jobExperience | exp}}</span>
          </div>
          <div class="comp">
            <div class="comp-text">
              <div class="comp-name">{{job.jobCompany}}</div>
              <div class="comp-trades">
                <span class="comp-trade" v-for="(item, index) in comptrade[index]">{{item | trade}}</span>
              </div>
            </div>
            <div class="comp-img">
              <img class="comp-logo" :src='job.companyLogo' alt="jobCompany">
            </div>
          </div>
        </div>
      </div>
      <div class="jobs-row row" v-if="result">
        <no-result :parentMessage = rcmd></no-result>
      </div>
      <!--Pagination-分页器-->
      <div class="jobs-page row" v-if="!result">
        <el-pagination
          background
          @current-change="handleCurrentChange"
          :current-page.sync="nowPage"
          :page-size="10"
          :page-sizes="[10, 20, 30, 40]"
          layout="prev, pager, next, jumper"
          :total=jobsTotal>
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import SelectArea from "../components/selectArea"
  import noResult from '../components/noResult'
  export default {
    name: 'jobSearch',
    components: { SelectArea, noResult },
    data () {
      return {
        result: false,
        //判断页面跳入
        job: Number(this.$route.query.job),
        //判断是否展开职位等级选项
        on: false,
        //选项判断
        judgeNum: '',
        judgeData: '',
        judgeArr: '',
        //常量
        jobtypes: JSON.parse(JSON.stringify(this.constant.jobtypes)),
        joblevel: JSON.parse(JSON.stringify(this.constant.joblevel)),
        comptrades: JSON.parse(JSON.stringify(this.constant.comptrades)),
        jobedu: JSON.parse(JSON.stringify(this.constant.jobedu)),
        jobExp: JSON.parse(JSON.stringify(this.constant.jobExp)),
        jobsalary: JSON.parse(JSON.stringify(this.constant.jobsalary)),
        jobupdate: JSON.parse(JSON.stringify(this.constant.jobupdate)),
        //职位等级拷贝、下标
        copylevel: [],
        arrLevelIndex: [],
        // v-for数据
        jobs: '',
        // 请求数据
        areaModel: undefined,
        typeModel: undefined,
        levelModel: undefined,
        tradeModel: undefined,
        eduModel: undefined,
        expModel: undefined,
        nameModel: undefined,
        salaryModel: undefined,
        orderModel: undefined,
        updateModel: undefined,
        updateNum: undefined,
        jobsTotal: null,
        nowPage: 1,
        nowSize: 10,
        // 选择的选项下标数组
        arrType: [],
        arrLevel: [],
        arrTrade: [],
        arrEdu: [],
        arrExp: [],
        arrSalary: [],
        // 查询失败推荐职位
        rcmd: null
      }
    },
    mounted () {
      let vm = this
      // 获取选项状态
      vm.getSession()
      // 请求数据
      vm.getjobList(vm.areaModel,vm.tradeModel,vm.eduModel,vm.expModel,vm.levelModel,vm.nameModel,vm.salaryModel,vm.typeModel,vm.orderModel,vm.updateModel,vm.nowPage,vm.nowSize)
    },
    methods: {
      // 职业等级多选
      changeLevel (index) {
        let vm = this
        vm.judgeNum = 4
        vm.judge(index)
      },
      // 所属行业多选
      changeTrade (index) {
        let vm = this
        vm.judgeNum = 0
        vm.judge(index)
      },
      // 学历多选
      changeEdu (index) {
        let vm = this
        vm.judgeNum = 1
        vm.judge (index)
      },
      // 经验多选
      changeExp (index) {
        let vm = this
        vm.judgeNum = 2
        vm.judge (index)
      },
      // 薪资多选
      changeSalary (index) {
        let vm = this
        vm.judgeNum = 3
        vm.judge (index)
      },
      // 跳转职位详情
      gojobDetail (ID) {
        this.$router.push({path:'/findJob/jobDetail',query:{jobId:ID}})
      },
      // 分页功能
      handleCurrentChange (val) {
        let vm = this
        vm.nowPage = Number(`${val}`)
        vm.getjobList(vm.areaModel,vm.tradeModel,vm.eduModel,vm.expModel,vm.levelModel,vm.nameModel,vm.salaryModel,vm.typeModel,vm.orderModel,vm.updateModel,vm.nowPage,vm.nowSize)
        this.$router.replace({
          path: '/findJob/jobSearch',
          query: {
            companyArea: vm.areaModel,
            companyTrade: vm.tradeModel,
            jobEducation: vm.eduModel,
            jobExperience: vm.expModel,
            jobLevel: vm.levelModel,
            jobName: vm.nameModel,
            jobSalary: vm.salaryModel,
            jobType: vm.typeModel,
            orderType: vm.orderModel,
            updateAt: vm.updateModel,
            currentPage: vm.nowPage,
            size: vm.nowSize,
            job: vm.job, // 页面判断
            updateNum: vm.updateNum, // 更新时间Number
            load: true
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/css/jobSearch";
</style>
