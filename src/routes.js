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

export const routes =[
	{path:'/',name:'homeLink',components:{
		default:Home,
		'orderingGuide':OrderingGuide,
		'delivery':Delivery,
		'history':History
	}},
	{path:'/menu',name:'menuLink',component:Menu},
	{path:'/admin',name:'adminLink',component:Admin, 
	  //beforeEnter: (to, from, next)=>{
		//路由独享守卫
		//alert('非登录状态，不能访问此页');
		//next(false);

		//判断store.gettes.isLogin == false
		/*if(to.path == '/login' || to.path == '/register'){
			next()
		}else{
			alert('还没有登录，请先登录');
			next('/login')
		}*/
		//}
	},
	{path:'/about',name:'aboutLink', redirect:'/about/contact',component:About, children:[
		{path:'/about/contact', name:'contactLink', redirect:'/personname', component:Contact, children:[
			{path:'/phone',name:'phoneNumber',component:Phone},
			{path:'/personname',name:'personName',component:Personname},
		]},
		{path:'/history', name:'historyLink', component:History},
		{path:'/delivery', name:'deliveryLink', component:Delivery},
		{path:'/orderingGuide', name:'orderingGuideLink', component:OrderingGuide},
	]},
	{path:'/login',name:'loginLink',component:Login},
	{path:'/register',name:'registerLink',component:Register},
	{path:'*',redirect:'/'},
];