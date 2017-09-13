// 1.0 导入vue核心包
import Vue from 'vue';

// 2.0 导入App.vue的vue对象
import App from './App.vue';

// 3.0 将vue-router集成到这个项目中来
import router from './routers/router.js';

// 导入状态管理vuex
import Vuex from 'vuex';
// 绑定到Vue上
Vue.use(Vuex);

var store = new Vuex.Store({
	// state类似vue实例中的data 用来存放数据
	state: {
		// 可以设置一些需要全局使用的数据
		username: 'zxx'
	},
	// mutations类似vue实例中的methods
	mutations: {
		// 用来处理数据 比喻数据删除更新等操作
		update(state, name) {
			state.username = name;
		}
	}
})

// 4.0 注册mint-ui
// 导入mint-ui的css文件
import 'mint-ui/lib/style.min.css';
// 导入mint-ui组件对象
import mintui from 'mint-ui';
// 在Vue中全局使用mintui
Vue.use(mintui);

// 5.0 注册mui的css样式
import '../statics/mui/css/mui.css';

// 6.0 导入一个当前系统的全局基本样式
import '../statics/css/site.css';

// 7.0 将vue-resource在vue中绑定，自动在vue实例对象上注入一个$http对象就可以使用ajax方法请求数据
import vueResource from 'vue-resource';
Vue.use(vueResource);

// **集成axios演示**
import axios from './kits/axios.js';
Vue.use(axios);

// 8.0 定义一个全局过滤器实现日期格式化
import moment from 'moment';
Vue.filter('datefmt', function (input, fmtstring) {
	// 使用momentjs这个日期格式化类库实现日期的格式化功能
	return moment(input).format(fmtstring);
})

// 9.0 使用图片预览组件
import VuePreview from 'vue-preview';
Vue.use(VuePreview);

// 利用Vue对象进行解析渲染
new Vue({
	el: '#app',
	// 使用路由对象实例
	router,
	// 使用vuex
	store,
	// render:function(create){return create(App)} //es5的写法
	render: c => c(App)  // es6的函数写法 =>：goes to
});