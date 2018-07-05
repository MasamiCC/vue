import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import { Toast,Indicator } from 'mint-ui';
// 响应时间
axios.defaults.timeout = 5 * 1000
// 配置cookie
// axios.defaults.withCredentials = true
// 配置请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// 静态资源
Vue.prototype.$static = ''

// 配置接口地址
axios.defaults.baseURL = ''
// POST传参序列化(添加请求拦截器)
axios.interceptors.request.use(
  config => {
    Indicator.open({
      text: '数据加载中，请稍后...',
      spinnerType: 'fading-circle'
    })
    if (config.method === 'post') {
      config.data = qs.stringify(config.data)
    }
    return config
  },
  err => {
    Indicator.close();
    Toast('请求错误')
    return Promise.reject(err)
  }
)
// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use(
  res => {
    if (res.data) {
      Indicator.close();
      return res
    } else {
      Indicator.close();
    }
  },
  err => {
    Indicator.close();
    Toast('请求失败，请稍后再试')
    return Promise.reject(err)
  }
)
// 发送请求
export function fetchPost (url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(
        res => {
          resolve(res.data)
        },
        err => {
          reject(err.data)
        }
      )
      .catch(err => {
        reject(err.data)
      })
  })
}
export function fetchGet (url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}