import * as types from '../mutations'

// initial state
const state = {
	location: {
		province: '',
		city: '',
		area: ''
	},
	alreadyLoc: ''
}

// getters
const getters = {
  location: state => state.location,
  alreadyLoc: state => state.alreadyLoc
}

const mutations = {
	[types.GET_LOCATION](state, locObj) {
		state.location = locObj;
	},
	[types.AlREADY_GET_LOCATION](state, isAlreadyLoc) {
		state.alreadyLoc = isAlreadyLoc;
	}
}

export default {
	state,
	getters,
	mutations
}
