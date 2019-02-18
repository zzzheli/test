<template>
  <div class="company-detail">
    <div class="container">
      <div class="row company-detail-card">
        <div class="card-logo">
          <img class="w-h-90 object-fit" :src="getCompany.companyLogo">
        </div>
        <div class="card-text">
          <p class="company-name">{{getCompany.companyName}}&emsp;
            <img src="../assets/img/authentication.png" v-if="getCompany.companyAut === 0">
          </p>
          <p class="company-slogan">{{getCompany.companySlogan}}</p>
          <p class="company-slogan">{{getCompany.companyProductName}}</p>
        </div>
      </div>

      <!--公司内容部分开始-->
      <div class="row company-detail-content">

        <!--左侧公司内容开始-->
        <div class="col-sm-8 padding-tow-30">

          <div class="btn-tab">
            <a class="inline-block text-align a pointer"
                @click="company()"
                :class="{control:booling}">
              公司详情
            </a>
            <a class="inline-block text-align a pointer"
                @click="recruit()"
                :class="{control:booled}">
              在招职位
            </a>
          </div>

          <!--公司详情内容开始-->
          <div class="padding-bottom-40" v-if="booling">
            <div v-if="getCompany.companyProductName">
              <div class="company-production-title">&emsp;公司产品</div>
              <div class="flex-start">
                <img :src="getCompany.companyProductLogo" class="companyProductSlogan">
                <div class="inline-block padding-10-0-10-30">
                  <p class="bold-18px">{{getCompany.companyProductName}}</p>
                  <p class="margin-20px-0">{{getCompany.companyProductCaption}}</p>
                  <p class="margin-20px-0">{{getCompany.companyProductSlogan}}</p>
                </div>
              </div>
            </div>
            <div class="company-production-title">&emsp;公司介绍</div>
            <p class="px-15" v-html="getCompany.companyCaption"></p>
          </div>
          <!--公司详情内容开始-->

          <!--在招职位开始-->
          <div class="" v-if="booled" >
            <div class="company-production-title">&emsp;在招职位<span style="color: #fc2b47">{{countJob}}</span>个</div>
            <div class="recruit pointer"
                 v-for="(JobAtList,index) in getJobAtList"
                 :key="index"
                 @click="turn(JobAtList.jobId)">
              <span class="post point">{{JobAtList.jobName}}</span>
              <span class="recrui-compensation point">{{JobAtList.jobSalary | salary}}</span>
              <span class="recrui-experience point">{{JobAtList.jobExperience | exp}}/{{JobAtList.jobEducation | edu }}</span>
              <span class="recrui-experience-s point">{{JobAtList.updateAt | time}}发布</span>
            </div>

          </div>
          <!--在招职位结束-->

        </div>
        <!--左侧公司内容结束-->


        <!--右侧公司信息开始-->
        <div class="col-sm-4 company_body_info">
          <p>公司信息</p>
          <div class="com-information">
            <p class="align-center margin-bottom-18"><img src="../assets/img/about-peo-off.png">&emsp;&emsp;{{getCompany.companyPeople | peo}}
            </p>
            <div class="margin-bottom-18">
              <img src="../assets/img/comp-trade-icon.png">&emsp;&emsp;
              <p class="inline-block"
                 v-for="(tradeArray,index) in tradeArray"
                 :key="index">
                {{tradeArray | trade}}&nbsp;
              </p>
            </div>
            <p class="align-center margin-bottom-18"><img src="../assets/img/about-address.png">&emsp;&emsp;{{getCompany.companyArea | area}}
            </p>
          </div>
          <p>公司标签</p>
          <div class="com-information-second">
            <p class="tag inline-block" v-if="tagArray"
               v-for="(tagArray,index) in tagArray"
               :key="index">{{tagArray}}</p>
          </div>
        </div>
        <!--右侧公司信息结束-->

      </div>
      <!--公司内容部分结束-->
    </div>

  </div>
</template>

<script>
  import {getCompdetail} from '@/request/api'
  import {getCompjob} from '@/request/api'
    export default {
        name: 'companyDetail',
        data() {
            return {
                booling: true,
                booled : false,
                companyId: this.$route.query.companyId,
                companyName: this.$route.query.companyName,
                getCompany: {
                    companyArea: "",
                    companyAut: "",
                    companyCaption: "",
                    companyId: "",
                    companyLogo: "",
                    companyName: "",
                    companyPeople: "",
                    companyTag: "",
                    companyTrade: "",
                    companySlogan: "",
                    companyProductName: "",
                    companyProductLogo: "",
                    companyProductCaption: "",
                    companyProductSlogan: ""
                },
                getJobAtList:[],
                countJob :"",
                tradeArray: "",
                tagArray: "",
            }
        },
        methods: {
            //公司详情请求
            getCompDetail() {

              getCompdetail({
                companyId: this.$route.query.companyId
              })
                .then((res) => {
                  if (res.data.code === 0) {
                    this.getCompany = res.data.data.company;
                    console.log(this.getCompany)
                    this.tradeArray = res.data.data.company.companyTrade.split(",");
                    this.tagArray = res.data.data.company.companyTag.split(",");
                    //文本换行转换
                    this.getCompany.companyCaption = this.getCompany.companyCaption.replace(/\n/g,"<br>")
                  }
                })
                .catch((error) => {
                  console.log(error);

                })
            },

            //公司详情点击
            company:function(){
                let vm = this;
                vm.booling= true;
                vm.booled = false;
            },
            //在招职位点击
            recruit:function(){
                let vm = this;
                vm.booling= false;
                vm.booled = true;
                //在招职位请求
              getCompjob({
                companyName: this.companyName,
                currentPage: 1,
                size:10
              })
                .then((res)=>{
                  if(res.data.code === 0){
                    console.log(res);
                    vm.getJobAtList = res.data.data.JobAtList;
                    vm.countJob = res.data.data.countJob;
                  }
                })
                .catch(error=>{
                console.log(error)
              })
            },
            //在招职位内容点击跳转
            turn:function(id){
                this.$router.push({path:"/findJob/jobDetail",query:{jobId:id}});
            }
        },
        mounted() {
            this.getCompDetail(this.companyId);
        }
    }
</script>

<style lang="scss" scoped>
  @import "../assets/css/companyDetail";
</style>
