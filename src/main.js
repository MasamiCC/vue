// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' //路由
import store from './store/store.js' //vuex

//axio请求
import { fetchGet, fetchPost} from './api/axiosConfig'
Vue.prototype.$get = fetchGet //get方法
Vue.prototype.$post = fetchPost //post方法

//引入兼容ie的包
import es6Promise from "babel-polyfill";

import {initPlugins} from './init-plugins.js'
//初始化第三方的组件
initPlugins();

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, //路由
  store, //vuex
  components: { App },
  template: '<App/>'
})


