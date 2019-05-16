import Vue from 'vue'
import Router from 'vue-router'
const _importPath = require('./_import_'+ process.env.NODE_ENV).default
console.log(_importPath)

// import HelloWorld from '@/components/HelloWorld'
// import Home from '@/components/home'
// import About from '@/components/about'
// import Other from '@/components/other'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
	  redirect: {name: 'HelloWorld'},
	},
	{
	  path: '/HelloWorld',
      name: 'HelloWorld',
      component: _importPath('HelloWorld'),
			beforeEnter: (to,from,next) => {
				console.log('路由独享守卫',to,from,next)
				next()
			},
	  children: [
		  {
		  	path: 'home',
		  	name: 'Home',
		  	component: _importPath('home')
		  },
		  {
		  	path: 'about',
		  	name: 'About',
		  	component: _importPath('about'),
		  	children: [
		  		{
		  			path: 'shopCar',
		  			name: 'shopCar',
		  			component: resolve => require(['@/components/shopCar'],resolve)
		  		}
		  	]
		  },
		  {
		  	path: 'other',
		  	name: 'Other',
		  	component: _importPath('other')
		  },
	  ]
    },
	{
		path: '/login',
		name: 'Login',
		component: _importPath('login')
	}
  ]
})
