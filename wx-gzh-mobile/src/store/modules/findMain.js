import * as types from '../mutations'

// initial state
const state = {
	selectedPostDe: '',
}

// getters
const getters = {
  selectedPostDe: state => state.selectedPostDe,
  userId: state => state.userId
}

const mutations = {
	[types.FIND_POST_DE](state, postObj) {
		state.selectedPostDe = postObj;
	}
}

export default {
	state,
	getters,
	mutations
}
