import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//引入 Bar 模块
import Bar from './Bar.js'


// 下面这个相当关键了，所有模块，记住是所有，注册才能使用
const store = new Vuex.Store({
	//通过modules属性引入ModuleA模块
  modules: {
    bar: Bar
  }
})
export default store