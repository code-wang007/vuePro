export default{
	getTotalPrice: state => () => {
		let totalPrice = 0;
		state.car.forEach(val => {
			// console.log(val.length,'gettersVal')
			if(state.car.length) {
				totalPrice += Number(val.price*val.num)
			}
		})
		// console.log(totalPrice,'getters')
		return totalPrice
	},
	shopCarList: state => () => {
		return state.car
	}
}