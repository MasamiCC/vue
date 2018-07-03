import Vue from 'vue'
import Router from 'vue-router'
import Main from '../page/main.vue'
import My from '../page/my.vue'
import Tool from '../page/tool/tool.vue'
//tool的子模块
import Chart from '../page/tool/chart.vue'
import Loadmore from '../page/tool/loadmore.vue'
import MemoNew from '../page/tool/memonew.vue'
import MemoList from '../page/tool/memolist.vue'

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
			component: Tool,
			meta: {
				title: '工具'
		  }
		},
		//图表
		{
      path: '/tool/chart',
			component: Chart,
			meta: {
				title: '图表'
		  }
		},
		//加载更多
		{
			path: '/tool/loadmore',
			component: Loadmore,
			meta: {
				title: '加载更多'
		  }
		},
		//新建提醒
		{
			path: '/tool/memonew',
			component: MemoNew,
			meta: {
				title: '新建提醒'
			}
		},
		//提醒列表
		{
			path: '/tool/memolist',
			component: MemoList,
			meta: {
				title: '提醒列表'
			}
		},
		//我的
		{
			path: '/my',
			component: My,
			meta: {
				title: '我的'
			}
	  }]
})


