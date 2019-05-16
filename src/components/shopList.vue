<template>
	<div id="shopList">
		<h1>商品列表页</h1>
		<ul class="shopListDetail">
			<li v-for="item in goodsList" :key="item.id">
				<div class="content">
					<span>{{item.name}}</span><span>{{item.price}}</span>
				</div>
				<button class="btn" @click="addCar(item)">{{item.btn}}</button>
			</li>
		</ul>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'
	import { Toast } from 'mint-ui';
	
	export default {
		data() {
			return {
				goodsList:[
					{id: 0,name: '大白菜',price: '6',btn: '加入购物车'},
					{id: 1,name: '西红柿',price: '8',btn: '加入购物车'},
					{id: 2,name: '茄子',price: '6',btn: '加入购物车'},
					{id: 3,name: '西兰花',price: '9',btn: '加入购物车'},
					{id: 4,name: '黄瓜',price: '5',btn: '加入购物车'},
					{id: 5,name: '牛肉',price: '28',btn: '加入购物车'}
				]
			};
		},
		methods: {
			...mapActions(['asyncAddCar']),
			addCar(item) {
				// 假设请求接口成功
				let resultCode = '2000'
				if(resultCode == '2000') {
					Toast('加入购物车成功')
					this.$emit('addSuccess')
					this.asyncAddCar(item)
				}
			}
		},
	}
</script>

<style lang="scss" scoped="scoped">
// #about{
	#shopList{
		// div{
			.shopListDetail{
				padding: 0 10px;
				li{
					margin: 10px 0;
					width: 100%;
					border: solid 1px #000000;
					display: flex;
					justify-content: space-between;
					.content{
						span{
							padding: 0 20px;
						}
					}
					.btn{
						padding: 3px 5px;
						background: gray;
					}
				}
			}
		}
	// }
// }

</style>
