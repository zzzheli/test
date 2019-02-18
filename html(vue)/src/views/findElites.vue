<template>
  <main>
    <div class="find-elites">
      <div class="elites-banner">
        <img class="width" src="../assets/img/jingyingdatu.jpg" alt="图片">
      </div>
      <div class="container-fluid">
        <!-- 一 -->
        <div class="row">
          <div class="col-sm-6 content-img">
            <img src="../assets/img/jingying-logo1.png" alt="图片">
          </div>
          <div class="col-sm-6 content-box">
            <div class="content">
              <strong class="ct-strong">0预付 , 无风险</strong>
              <p class="ct-first-p">入职付一半，转正付一半</p>
              <p class="ct-finally-p">普通猎头是三个月的薪水。非一般的我们只收一个月的薪水。如果试用期不通过，免费推荐另一个</p>
            </div>
          </div>
        </div>
        <!-- 二 -->
        <div class="row row-second">
          <div class="col-sm-6 content-img-second">
            <img src="../assets/img/jingying-logo2.png" alt="图片">
          </div>
          <div class="col-sm-6 content-box-second">
            <div class="content">
              <strong class="ct-strong">专注于</strong>
              <p class="ct-first-p">最新最热门的IT互联网运人才</p>
              <p class="ct-finally-p">萝卜多自己开发了一套强大的IT互联网人才库系统，
                有业界最新最活跃最有效的人才库，这里有最新最热
                门的IT互联网运营和技术人才，在各大互联网公司都
                有足够强的人脉圈。</p>
            </div>
          </div>
        </div>
        <!--三 -->
        <div class="row">
          <div class="col-sm-6 content-img">
            <img src="../assets/img/jingying-logo3.png" alt="图片">
          </div>
          <div class="col-sm-6 content-box">
            <div class="content-bottom">
              <strong class="ct-strong">优选人才，高效推荐</strong>
              <p>
              <p class="ct-finally-p-a">1-3天推荐首批候选人<br/>
                甄选人才 简历脱水 推荐人才
              </p>
              <p class="ct-finally-p-a">3-5天安排候选人面试<br/>
                安排面试 协助客户选人用人
              </p>
              <p class="ct-finally-p-a"> 平均15天推荐成功<br/>
                背景调查 多方洽谈 增值服务
              </p>
            </div>
          </div>
        </div>
        <!-- 四 -->
        <div class="row process">
          <div class="col-xs-12">
            <p class="process-p">萝卜多，服务流程</p>
            <i class="h"></i>
            <div>
              <img src="../assets/img/jingying-fuwu.png" alt="图片">
              <p class="text-top">
                意向洽谈、深入评审、确认合作、签订
                合同、提出需求、提供jd、确立招聘标
                准
              </p>
              <p class="text-middle">
                开始招聘、候选人评审，初步确立聘用
                意向，背景调查
              </p>
              <p class="text-bottom">
                发送聘请通知，候选人上岗，付款、转
                入售后服务
              </p>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row advantage">
            <div class="col-xs-12">
              <p class="process-p">我们的优势</p>
              <i class="h"></i>
            </div>
            <div class="col-md-3 col-sm-6">
              <img src="../assets/img/jingying-youxiu1.png">
              <p class="advantage-p">30%的行业标准收费水平</p>
            </div>
            <div class="col-md-3 col-sm-6">
              <img src="../assets/img/jingying-youxiu2.png">
              <p class="advantage-p">一半一半无风险的收费模式</p>
            </div>
            <div class="col-md-3 col-sm-6">
              <img src="../assets/img/jingying-youxiu3.png">
              <p class="advantage-p">试用期内不满重推的推荐制度</p>
            </div>
            <div class="col-md-3 col-sm-6">
              <img src="../assets/img/jingying-youxiu4.png">
              <p class="advantage-p">高价值高数量的人才储备机制</p>
            </div>
          </div>
        </div>
        <!--成功案例-->
        <div class="container">
          <div class="row padding-bottom-65">
            <div class="col-xs-12">
              <p class="process-p">成功案例</p>
              <i class="h"></i>
            </div>
            <div class="col-md-3 col-sm-6 reserved-box"
                  v-for = "(successLists, index) in company_service"
                  :key = "index"
                  >
              <div class="reserved pointer" @click="details(successLists.companyId,successLists.companyName)">
                <img class="object-fit" v-lazy="successLists.companyLogo">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 text-align">
              <router-link to="/findElites/companyList">
                <button class="btn btn-danger company-btn">更多合作公司</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import {getNewJobCompany} from '@/request/api'
export default {
  name: 'findElites',
    data(){
      return {
          company_service : [],
      }
    },
    methods:{
      successCase:function(){
        getNewJobCompany({
          size: 8
        })
          .then((res) => {
            if(res.data.code === 0){
              this.company_service = res.data.data.company_service;
            }
          }).catch((error) => {
          console.log(error)
        })
      },
        details(id,name){
          this.$router.push({path:"/findElites/companyDetail",query:{companyId:id,companyName:name}});
        }
    },
    created(){
      this.successCase();
    }
}
</script>

<style lang="scss" scoped>
  @import "../assets/css/findElites";

</style>
