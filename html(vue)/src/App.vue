<template>
  <div id="app">
    <keep-alive include="heade">
      <my-header/>
    </keep-alive>
    <router-view/>
    <my-footer/>
  </div>
</template>
<script>
import MyHeader from './components/myHeader'
import MyFooter from './components/myFooter'

export default {
  name: 'App',
  components: {
    MyFooter, MyHeader
  },
  watch: {
    '$route' (to, from) {
      if (to.path !== '/findElites/companyList') {
        sessionStorage.removeItem('companySize')
        sessionStorage.removeItem('companyTrade')
        sessionStorage.removeItem('financingList')
        sessionStorage.removeItem('fieldList')
        sessionStorage.removeItem('compArea')
      }
      if (to.path !== '/findJob/companySearch') {
        sessionStorage.removeItem('companySize2')
        sessionStorage.removeItem('companyTrade2')
        sessionStorage.removeItem('financingList2')
        sessionStorage.removeItem('fieldList2')
        sessionStorage.removeItem('companyName2')
        sessionStorage.removeItem('companyNamess') //找职位公司搜索公司名
        sessionStorage.removeItem('compArea2')
      }
      if (to.path !== '/findJob/jobSearch') {
        sessionStorage.removeItem('copyLv')
        sessionStorage.removeItem('changedLv')
      }
      if (to.path !== '/findJob/jobList') {
        sessionStorage.removeItem('copyLv')
        sessionStorage.removeItem('changedLv')
      }
    }
  }

}
</script>
<style lang="scss">
  @import "assets/css/index";
</style>
