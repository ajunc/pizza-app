import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
	routes,
	mode:'history'
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
  render: h => h(App)
})
