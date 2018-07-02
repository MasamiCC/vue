const Bar= {
	//数据
	state: {
		footerVisible: true,//底部bar显示的状态
    selectedTab: ''//选中的tab标签
	},
	
	//对数据进行计算的方法
	getter: {
		
	},
	
	//提交的一个请求(请求有不同的符号)来个更改数据（state）
	mutations: {
		//底部选中模块更改
		changeBar(state,barName) {
			state.selectedTab = barName
		},
		barVisible(state) {
      state.footerVisible = !state.footerVisible
		}
	},
	
	//用于提交mutaions的方法，可以使用异步
	actions: {
		//用于提交changeBar方法
		changeBar({commit},barName){
			commit('changeBar',barName)
		},
		//用于提交barVisible方法
		barVisible({commit}){
			commit('barVisible')
		}
	}
}


export default Bar;