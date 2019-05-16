import Vue from 'vue'
import toast from '@/components/toast'

let ToastConstructor = Vue.extend(toast)
let myToast = ()=>{
	let toastDom = new ToastConstructor({
		el: document.createElement('div'),
	})
	// console.log('extend toastDom 挂载实例',ToastConstructor)
// 	console.log(document.getElementById('home')) //null
	// document.getElementById('home').appendChild(toastDom.$el) //这样报错  一位此时home组件还没有被挂在到实例上获取不到id=home的home组件
	setTimeout(()=>{
		document.getElementById('home').appendChild(toastDom.$el)
		// console.log(document.getElementById('home'),'异步函数',toastDom.$el)
	},0)
}

export default myToast
