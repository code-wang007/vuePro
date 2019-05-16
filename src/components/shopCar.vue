<template>
	<div id="shopCar">
		<div>
			<h3 v-if="shopCarList().length">{{shopCarCon}}</h3>
			<h3 v-else>购物车空空如也~赶快去选购商品吧！</h3>
		</div>
		<ul>
			<li v-for="item in shopCarList()" :key="item.id">
				<div class="goodsDetail">
					<p>{{item.name}}</p>
					<p>{{item.price}}</p>
				</div>
				<div class="goodsNum">
					<span @click="reduceNum(item.id)">-</span>
					<input type="text" v-model="item.num">
					<span @click="increaNum(item.id)">+</span>
				</div>
				<div>小计: ￥{{item.price*item.num}}</div>
				<button @click="deleteGood(item.id)">删除商品</button>
			</li>
		</ul>
		<!-- 付款组件 -->
		<total-price :totalNum="getTotalPrice()"></total-price>
	</div>
</template>

<script>
	import { mapGetters, mapMutations } from 'vuex'
	import TotalPrice from '@/components/totalPrice'
	
	export default {
		data() {
			return {
				itemNum: 0,
				shopCarCon: '购物车详情页',
			};
		},
		mounted() {
console.log(this.$router)
		},
		beforeRouterEnter(to,from,next) {
			console.log(this.$router)
			next()
		},
		methods: {
			...mapMutations(['carReduceNum','carIncreaNum','varDeleteGood']),
			reduceNum(id) {
				this.carReduceNum(id)
			},
			increaNum(id) {
				this.carIncreaNum(id)
			},
			deleteGood(id) { //删除购物车商品
				this.varDeleteGood(id)
			}
		},
		computed: {
			...mapGetters(['getTotalPrice','shopCarList'])
		},
		components: {
			TotalPrice
		}
	}
</script>

<style lang="scss" scoped="scoped">
#shopCar {
	ul{
		padding: 0 10px;
		li{
			display: flex;
			justify-content: space-between;
			align-items: center;
			border: solid 1px gray;
			margin: 5px 0;
			.goodsDetail{
				display: flex;
			}
			.goodsNum{
				span{
					margin: 0 1px;
					padding: 0 5px;
					border: solid 1px gray;
					color: black;
					font-size: 18px;
				}
				input{
					width:30px;
					text-align: center;
				}
			}
			button{
				width:70px;
				height:20px;
				color: red;
			}
		}
	}
}
</style>
