import Vue from 'vue'
export default{
	addCount(state) {
		//mutation只能是同步函数  异步函数会报错不能追踪到状态的变化
// 		setTimeout(() =>{
// 			state.count++
// 		},0)
	
		state.count++
	},
	addShopCar(state,goodsParam) {
		let isHas = state.car.some(item=>{
			// console.log(item,'state.car')
			if(item.id == goodsParam.id) {
				item.num++
				return true
			}else {
				return false
			}
		})
		if(!isHas) {
			// goodsParam.num = 1
			state.car.push(goodsParam)
			let newItem = Object.assign({},goodsParam,{num:1})
			Vue.set(state.car,state.car.length-1,newItem)
		}
	},
	carReduceNum(state,param) {
		state.car.forEach((item,index) => {
			if(item.id == param) {
				item.num--
				if(item.num == 0) {
					state.car.splice(index,1)
				}
			}
		})
	},
	carIncreaNum(state,param) {
		state.car.forEach((item,index) => {
			if(item.id == param) {
				item.num++
			}
		})
	},
	varDeleteGood(state,param) {
		state.car.forEach((item,index) => {
			if(item.id == param) {
				state.car.splice(index,1)
			}
		})
	}
}