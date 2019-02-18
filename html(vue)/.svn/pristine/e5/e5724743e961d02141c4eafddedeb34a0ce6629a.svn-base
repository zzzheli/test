import Vue from 'vue'
import App from './App.vue'

// 路由
import router from './router'

// axios反向代理
import axios from 'axios'

// 图片懒加载
import VueLazyLoad from 'vue-lazyload'

// jQuery
import jquery from 'jquery'

// bootstrap
import 'bootstrap3/dist/css/bootstrap.css'
import 'bootstrap3/dist/js/bootstrap.js'

// Element-ui组件库
import { Select, Option, Pagination } from 'element-ui'
import './assets/css/element-variables.scss'

// swiper轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

// 导入所有的过滤器变量
import * as filters from './constant/filters'

// 公共方法
import common from './utils/common'

// 公共变量
import constant from './constant/constant'

Vue.prototype.$http = axios
Vue.prototype.constant = constant

Vue.use(common)
Vue.use(Select)
Vue.use(Option)
Vue.use(Pagination)
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyLoad, {
  error: 'assets/img/error.jpg'
})

// 每次路由跳转实现滚动条回到顶部
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

// 导出的是对象，可以直接通过key和value来获得过滤器的名和过滤器的方法
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

// 阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
