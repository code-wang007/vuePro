<template>
	<div id="totalPrice">
		<div>
			<span>购物车商品总价为:</span>
			<span>{{totalNum}}</span>
		</div>
		<button>去付款</button>
	</div>
</template>

<script>
	export default {
		props: ['totalNum'],
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped="scoped">
#totalPrice{
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 10px;
	margin-bottom: 55px;
	height: 44px;
	div{
		
	}
	button{
		width: 40%;
		height: 100%;
		background: orangered;
		color: #fff;
		font-size: 20px;
		
	}
}
</style>
