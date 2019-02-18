/**
 * axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from 'axios'
import QS from 'qs'

// 环境的切换
axios.defaults.baseURL = '/carrots-shanzhu-ajax/'

// 请求超时时间
axios.defaults.timeout = 10000

// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// 请求拦截器
axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.error(error)
  })

// 响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  // 服务器状态码不是200的情况
  error => {
    console.log(error.response)
    if (error.response.status) {
      switch (error.response.status) {
        // 404请求不存在
        case 404:
          console.log('网络请求不存在')
          break
        // 其他错误，直接抛出错误提示
        default:
          console.log('其他错误')
      }
      return Promise.reject(error.response)
    }
  }
)
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, QS.stringify(params))
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}
