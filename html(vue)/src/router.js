import Vue from 'vue'
// 路由
import Router from 'vue-router'

// const Home = () => import(/* webpackChunkName: 'shanzhu' */'./views/home')
const Index = () => import(/* webpackChunkName: 'shanzhu' */'./views/index')
const FindJob = () => import(/* webpackChunkName: 'shanzhu' */'./views/findJob')
const JobSearch = () => import(/* webpackChunkName: 'shanzhu' */'./views/jobSearch')
const JobList = () => import(/* webpackChunkName: 'shanzhu' */'./views/jobList')
const JobDetail = () => import(/* webpackChunkName: 'shanzhu' */'./views/jobDetail')
const CompanySearch = () => import(/* webpackChunkName: 'shanzhu' */'./views/companySearch')
const FindElites = () => import(/* webpackChunkName: 'shanzhu' */'./views/findElites')
const CompanyList = () => import(/* webpackChunkName: 'shanzhu' */'./views/companyList')
const CompanyDetail = () => import(/* webpackChunkName: 'shanzhu' */'./views/companyDetail')
const About = () => import(/* webpackChunkName: 'shanzhu' */'./views/about')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta: {
        title: '萝卜多-知根知底的社群招聘-首页'
      }
    },
    // 找职位
    {
      path: '/findJob',
      name: 'findJob',
      component: FindJob,
      meta: {
        title: '萝卜多-知根知底的社群招聘-找职位'
      }
    },
    // 职位搜索
    {
      path: '/findJob/jobSearch',
      name: 'jobSearch',
      component: JobSearch,
      meta: {
        title: '萝卜多-知根知底的社群招聘-找职位-职位搜索'
      }
    },
    // 职位列表
    {
      path: '/findJob/jobList',
      name: 'jobList',
      component: JobList,
      meta: {
        title: '萝卜多-知根知底的社群招聘-找职位-职位搜索'
      }
    },
    // 职位详情
    {
      path: '/findJob/jobDetail',
      name: 'jobDetail',
      component: JobDetail,
      meta: {
        title: '萝卜多-知根知底的社群招聘-找职位-职位详情'
      }
    },
    // 公司搜索
    {
      path: '/findJob/companySearch',
      name: 'companySearch',
      component: CompanySearch,
      meta: {
        title: '萝卜多-知根知底的社群招聘-找职位-公司搜索'
      }
    },
    // 找精英
    {
      path: '/findElites',
      name: 'findElites',
      component: FindElites,
      meta: {
        title: '萝卜多-知根知底的社群招聘-找精英'
      }
    },
    // 公司列表
    {
      path: '/findElites/companyList',
      name: 'companyList',
      component: CompanyList,
      meta: {
        title: '萝卜多-知根知底的社群招聘-找精英-公司列表'
      }
    },
    // 公司详情
    {
      path: '/findElites/companyDetail',
      name: 'companyDetail',
      component: CompanyDetail,
      meta: {
        title: '萝卜多-知根知底的社群招聘-公司详情'
      }
    },
    // 关于我们
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        title: '萝卜多-知根知底的社群招聘-关于我们'
      }
    }
  ]
})
