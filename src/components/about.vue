<template>
	<div id="about">
		<h1>About</h1>
		<h2>git修改</h2>
		<!-- 商品列表页 -->
		<shop-list></shop-list>
		<!-- 购物车详情页 -->
		<button @click="shoCarIsHasClick">购物车</button>
		<shop-car v-if="shoCarIsHas"></shop-car>
		<router-view></router-view>
	</div>
</template>

<script>
	import shopList from '@/components/shopList'
	// import shopCar from '@/components/shopCar'
	
	export default {
		data() {
			return {
				itemNum: 0,
				shoCarIsHas: false,
				totalIsHas: true
			};
		},
		methods: {
			shoCarIsHasClick() {
				this.$router.push('about/shopCar')
				// this.shoCarIsHas = !this.shoCarIsHas
			},
// 			renderCar() {//重新渲染组件方法
// 				if(this.shoCarIsHas){
// 					this.shoCarIsHas = false
// 					this.$nextTick(() => {
// 						this.shoCarIsHas = true
// 					})
// 				}
// 			}
		},
		components:{
			shopList,
			// shopCar
		}
	}
</script>

<style lang="scss">

</style>
