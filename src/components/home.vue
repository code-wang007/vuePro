<template>
	<div id="home">
		
		<h1>Home</h1>
		<h1>箭头函数:{{func}}</h1>
		<h1>箭头函数:{{func2()}}</h1>
		<h2>store仓库:{{countNumy}}</h2>
		<button @click="add">add</button>
		<button @click="actionFuc">触发action提交mutation</button>
		
		<!-- 双向绑定 -->
		
		<custom-input v-model="searchText"></custom-input>
		
		</br><p></p>
		<input
		  v-bind:value="searchText"
		  v-on:input="searchText = $event.target.value"
		>
		<h3>双向绑定:{{searchText}}</h3>
		
		</br><p></p>
		<input type="radio" v-model="pick" v-bind:value="a">
		<h3>{{a}}</h3>
		
		</br><p></p>
		<input type="checkbox" id="checkbox" v-model="checked">
		<label for="checkbox">{{ checked }}</label>
		
		<!-- </br><p></p> -->
		<div id='example-3'>
		  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
		  <label for="jack">Jack</label>
		  <input type="checkbox" id="john" value="John" v-model="checkedNames">
		  <label for="john">John</label>
		  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
		  <label for="mike">Mike</label>
		  <br>
		  <span>Checked names: {{ checkedNames }}</span>
		</div>
		
		<!-- 组件使用 -->
		<Toast-a></Toast-a>
	</div>
</template>

<script>
	import { mapMutations } from 'vuex'
	// import ToastA from '@/components/toast'
	import ToastA from '@/js/toast'
	import CustomInput from '@/components/customInput'
	
	export default {
		data() {
				return {
					count: '',
					checked: false,
					checkedNames: [],
					a: '值绑定',
					pick: '',
					searchText: ''
				}
		},
		created (){
			// console.log('home created')
		},
		mounted (){
// 			(function (){
// 				console.log('home实例挂在完成')
// 			})()
		},
		components:{
			ToastA,
			CustomInput
		},
		methods:{
			...mapMutations({
				add: 'addCount'
				}),
// 			add (){
// 				// this.$store.state.count++ //严格模式报错
// 				// this.$store.commit('addCount') 
// 			}
			actionFuc (){
				this.$store.dispatch('actionFunc')
			}
		},
		computed:{
			func (){
				let single = a => a
				// console.log(single('hello, world'))
				return single('hello, world')
			},
			func2 (){
				let single;
				return single = () => {
					return 'hello, world'
				}
			},
			countNumy (){
				return this.$store.state.count
			}
		}
	}
</script>

<style>
	body {
		margin: 0;
		padding: 0;
	}
	header {
		height:44px;		background: orange;
		color: #fff;
		text-align: center;
		line-height: 44px;
	}
#home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#home .navTab {
	box-sizing: border-box;
	width: 100%;
	padding: 0 10px;
	display: flex;
	justify-content: space-between;
}
#home ul li{
	list-style: none;
}
#home ul li .active {
	color: #FFA500;
}
footer {
	width: 100%;
	position: fixed;
	bottom: 0;
	background: ghostwhite;
}
</style>
