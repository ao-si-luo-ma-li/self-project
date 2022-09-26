import * as types from '../mutations'

// initial state
const state = {
	creNavStatus: [false, false, false, false]
}

// getters
const getters = {
  creNavStatus: state => state.creNavStatus
}

const mutations = {
	[types.CRE_NAV_CHANGE](state, navObj) {
		state.creNavStatus = [false, false, false, false];
		state.creNavStatus.splice(navObj.index, 1, navObj.status);
	}
}

export default {
	state,
	getters,
	mutations
}
