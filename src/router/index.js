import Vue from 'vue'
import Router from 'vue-router'
import Main from '../page/main.vue'
import my from '../page/my.vue'
import tool from '../page/tool.vue'

Vue.use(Router)

// 涉及到组件加载的路由
// 前往不能使用component: resolve => require(['../page/main.vue'], resolve),这样的
// 懒加载，会死的很难看

export default new Router({
	mode: 'history',
  routes: [{
			path: '/',
			redirect: '/main'
		},
	  //首页
	  {
			path: '/main',
			component: Main,
			meta: {
				title: '首页'
			}
		},
		//工具
		{
			path: '/tool',
			component: tool,
			meta: {
				title: '工具'
		  }
		},
		//我的
		{
			path: '/my',
			component: my,
			meta: {
				title: '我的'
			}
	  }]
})


