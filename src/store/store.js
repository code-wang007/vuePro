import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import state from '@/store/state/state.js'
import actions from '@/store/actions/actions.js'
import getters from '@/store/getters/getters.js'
import mutations from '@/store/mutations/mutations.js'

const store = new Vuex.Store({
	// strict: true,
	state,
	actions,
	getters,
	mutations
})

export default store