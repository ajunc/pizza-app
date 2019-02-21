import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'
import axios from 'axios'

import {store} from './store/store.js'

Vue.use(VueRouter);

//配置默认根路径
axios.defaults.baseURL = "https://wd3451744778iotmac.wilddogio.com/"

//配置vue原型(在任何组件中都可以正常使用axios)
Vue.prototype.http = axios

const router = new VueRouter({
	routes,
	mode:'history',
	scrollBehavior(to,from,savePosition){
		//return {x:0,y:100}

		//return {selector: '.btn'}

		if(savePosition){
			return savePosition
		}else{
			return {x:0,y:0}
		}
	}
})

//全局守卫
/*router.beforeEach((to, from, next) => {
	//alert('还没有登录，请先登录');
	//next()

	console.log(to);

	//判断store.gettes.isLogin == false
	if(to.path == '/login' || to.path == '/register'){
		next()
	}else{
		alert('还没有登录，请先登录');
		next('/login')
	}
})*/

//后置钩子
/*router.afterEach((to,from)=>{
	alert('alert each')
})*/

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
