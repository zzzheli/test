<template>
  <div class="jobDetail">
    <div class="jobDetail-box container" v-for="(detail,index) in details" :key="index">
      <div class="jobShareDetail">
        <div class="jobDetail-job">
          <div class="jobDetail-jobIdc">
            <div class="jobName">{{detail.jobName}}</div>
            <div class="jobCompany">{{detail.jobCompany}}</div>
            <div class="job-text">
              <span class="jobSalary">{{detail.jobSalary | salary}}</span>
              <div class="job-inf">
                <img class="job-inf-icon" src="../assets/img/ads-icon.png">
                <span>{{detail.companyArea | area}}</span>
              </div>
              <div class="job-inf">
                <img class="job-inf-icon" src="../assets/img/edu-icon.png">
                <span>{{detail.jobEducation | edu}}</span>
              </div>
              <div class="job-inf job-inf2">
                <img class="job-inf-icon" src="../assets/img/exp-icon.png">
                <span>{{detail.jobExperience | exp}}</span>
              </div>
            </div>
            <div class="job-time">
              <img src="../assets/img/clock.png">
              <span class="updateAt">{{detail.updateAt | time}}</span>
            </div>
          </div>
          <div class="jobDetail-jobdtl">
            <div class="jobDetail-title">职位描述</div>
            <div class="job-title">岗位职责：</div>
            <div class="job-text2" v-html="detail.jobCaption"></div>
            <div class="job-title">必要条件：</div>
            <div class="job-text2" v-html="detail.jobRequirement"></div>
            <div class="job-title">公司福利：</div>
            <div class="job-text2" v-html="detail.jobWelfare"></div>
          </div>
          <div class="jobDetail-contact"></div>
        </div>
        <div class="jobDetail-share">
          <div class="share-int">
            <div class="share-box">
              <img src="../assets/img/share-icon.png">
              <span class="share-text point">分享</span>
              <!--微信分享模态框-->
              <a class="share-wx pointer" data-toggle="modal" data-target="#wxModal" data-backdrop="false">
                <img src="../assets/img/wechat.png">
              </a>
              <div class="wxModal modal fade" id="wxModal" tabindex="-1" role="dialog" aria-labelledby="wxModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="wxModal-content modal-content">
                    <div class="wxModal-header modal-header">
                      <button type="button" class="close wxclose" data-dismiss="modal"
                              aria-hidden="true">×
                      </button>
                      <h4 class="wxModal-title modal-title" id="wxModalLabel">
                        分享到微信朋友圈
                      </h4>
                    </div>
                    <div class="modal-body">
                      <p class="">
                        打开微信，点击底部的“发现”， 使用“扫一扫”即可将网页分享至朋友圈。
                      </p>
                      <img src="../assets/img/qrcode.jpg">
                    </div>
                  </div>
                </div>
              </div>
              <a class="share-qq pointer" @click="shareqq(detail.jobCompany,detail.jobName,detail.companyLogo)" target="_blank">
                <img src="../assets/img/qq.png">
              </a>
              <a class="share-wb pointer" @click="sharewb(detail.jobCompany,detail.jobName,detail.companyLogo)" target="_blank">
                <img src="../assets/img/sina.png" alt="分享到微博">
              </a>
            </div>
            <button class="btn-int btn" data-toggle="modal" data-target="#intModal">
              我感兴趣
            </button>
            <!--我感兴趣模态框-->
            <div class="modal fade" id="intModal" tabindex="-1" role="dialog" aria-labelledby="intModalLabel" aria-hidden="true">
              <div class="modal-dialog intModal-dialog">
                <div class="modal-content">
                  <div class="intModal-header modal-header">
                    <button type="button" class="intModal-close close" data-dismiss="modal"
                            aria-hidden="true">×
                    </button>
                    <h4 class="intModal-title modal-title" id="intModalLabel">
                      我感兴趣
                    </h4>
                  </div>
                  <div class="intModal-body modal-body">
                    <p class="intModal-idc">
                      模式介绍：萝卜多先技术面试-再推荐给用人单位
                    </p>
                    <p class="intModal-text1">
                      萝卜多是一个知根知底的社群招聘。萝卜多的合作企业和候选人，都是萝卜多精心筛选，认证，陪伴多年的伙伴。在萝卜多找工作快，工作有保障。值得您信任的招聘网站。
                    </p>
                    <p class="intModal-text2">
                      您将感兴趣的职位、公司名称以及您的个人信息发送到我们的邮箱，我们会尽快帮您安排。
                    </p>
                    <p class="intModal-email">
                      邮箱地址：hr@ptteng.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="jobDetail-company">
        <div class="comp-img-box">
          <img class="comp-img" :src="detail.companyLogo">
        </div>

        <a class="goComp pointer" @click="goComp(detail.companyId,detail.jobCompany)">
          <span class="goComp-text">{{detail.jobCompany}}</span>
          <img src="../assets/img/link-icon.png">
        </a>
        <div class="comp-detail">
          <span class="comp-detail-title">基本信息</span>
          <div class="comp-detail-border"></div>
        </div>
        <div class="comp-detail-text">
          <img class="comp-detail-icon" src="../assets/img/about-peo-off.png">
          <span>{{detail.companyPeople | peo}}人</span>
        </div>
        <div class="comp-detail-text">
          <img class="comp-detail-icon" src="../assets/img/comp-trade-icon.png">
          <div class="comp-trade-box">
            <span class="comp-trade" v-for="(item, index) in comptrade[0]">{{item | trade}} </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getJobdetail} from '@/request/api'

export default {
  name: 'jobDetail',
  data () {
    return {
      getJobID: this.$route.query.jobId,
      details: '',
      comptrade: []
    }
  },
  mounted () {
    this.getjobDetail(this.getJobID)
  },
  methods: {
    //请求职位详情
    getjobDetail () {
      getJobdetail({
        jobId: this.$route.query.jobId
      })
        .then(res => {
          this.details = res.data.data
          //文本换行转换
          this.details.job.jobCaption = this.details.job.jobCaption.replace(/\n/g,"<br>")
          this.details.job.jobRequirement = this.details.job.jobRequirement.replace(/\n/g,"<br>")
          this.details.job.jobWelfare = this.details.job.jobWelfare.replace(/\n/g,"<br>")
          // 切割转换所属行业
          let arr = []
          let sp = this.details.job.companyTrade
          let newsp = sp.split(',')
          arr.push(newsp)
          this.comptrade = arr
        })
        .catch(error => {
          console.log(error)
        })
    },
    //跳转公司详情
    goComp (id,name) {
      this.$router.push({path:"/findElites/companyDetail",query:{companyId:id,companyName:name}});
    },
    //外链跳转
    sharewb (jobCompany, jobName) {
      window.open('http://v.t.sina.com.cn/share/share.php?title=萝卜多-知根知底的社群招聘  ' + jobCompany + ' 在招职位：' + jobName + '&url=http://www.luoboduo.com/&content=utf-8&sourceUrl=&pic=newwindow')
    },
    shareqq (jobCompany, jobName) {
      window.open('http://connect.qq.com/widget/shareqq/index.html?url=http://www.luoboduo.com/&title=' + jobCompany + '&showcount=0&desc=&summary=' + jobName + '&pics=newwindow')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/css/jobDetail";
</style>
