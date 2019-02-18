<template>
  <div>
    <div class="noResult">
      <img src="../assets/img/no-result.png">
      <div class="text-box">
        <p class="text1">暂时没有符合该搜索条件的内容</p>
        <p class="text2">请重新修改搜索条件后再次进行搜索</p>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="search-company-content col-md-4 col-sm-6 col-xs-12"
             v-for="item in parentMessage"
             :key="parentMessage.index">
          <div class="company-box">
            <div class="company-card pointer" @click="details(item.jobId )">
              <div class="company-logo">
                <img class="company-img object-fit" :src="item.companyLogo">
              </div>
              <div class="company-text">
                <p class="company-name">{{item.jobSalary | salary}}</p>
                <p class="common-slogan">{{item.jobName}}</p>
                <p class="company-jobs">
                  <span>{{item.jobCompany}}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "noResult",
    props: ['parentMessage'],
    methods: {
      details(id){
        this.$router.push({path:"/findJob/jobDetail",query:{jobId:id}})
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/css/noResult";
</style>