import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './component/Home'
import Menu from './component/Menu'
import Admin from './component/Admin'
import About from './component/about/About'
import Login from './component/Login'
import Register from './component/Register'

//二级路由
import Contact from './component/about/Contact'
import Delivery from './component/about/Delivery'
import History from './component/about/History'
import OrderingGuide from './component/about/OrderingGuide'

//三级路由
import Phone from './component/about/contact/Phone'
import Personname from './component/about/contact/Personname'

Vue.use(VueRouter);

const routes =[
	{path:'/',name:'homeLink',component:Home},
	{path:'/menu',name:'menuLink',component:Menu},
	{path:'/Admin',name:'adminLink',component:Admin},
	{path:'/About',name:'aboutLink', redirect:'/about/contact',component:About, children:[
		{path:'/about/contact', name:'contactLink', redirect:'/personname', component:Contact, children:[
			{path:'/phone',name:'phoneNumber',component:Phone},
			{path:'/personname',name:'personName',component:Personname},
		]},
		{path:'/history', name:'historyLink', component:History},
		{path:'/delivery', name:'deliveryLink', component:Delivery},
		{path:'/orderingGuide', name:'orderingGuideLink', component:OrderingGuide},
	]},
	{path:'/Login',name:'loginLink',component:Login},
	{path:'/Register',name:'registerLink',component:Register},
	{path:'*',redirect:'/'},
];

const router = new VueRouter({
	routes,
	mode:'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
