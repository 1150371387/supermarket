import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入组件
const Home = () => import('views/home/Home')
const Cart = () => import('views/cart/Cart')
const Category = () => import('views/category/Category')
const Profile = () => import('views/profile/Profile')
// 1.安装插件
Vue.use(VueRouter)
// 配置路由
const routes = [
	{
		path:'',
		redirect:'/home'
	},
	{
		name:'Home',
		path:'/home',
		component:Home
	},
	{
		name:'Category',
		path:'/category',
		component:Category
	},
	{
		name:'Cart',
		path:'/cart',
		component:Cart
	},
	{
		name:'Profile',
		path:'/profile',
		component:Profile
	}
]

const router = new VueRouter({
	routes,
	mode: 'history'
})

export default router
