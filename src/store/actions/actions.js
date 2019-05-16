export default{
	actionFunc({commit}) {
		// commit('addCount')
		
		//action支持异步处理mutation
// 		setTimeout(() =>{
// 			commit('addCount')
// 		},0)
	},
	asyncAddCar({commit},params) {
// 		let resultCode = '2000' //假设请求接口成功
// 		if(resultCode == '2000') {
// 			commit('addShopCar',params)
// 		}
		commit('addShopCar',params)
	}
}