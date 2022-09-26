import * as types from '../mutations'

// initial state
const state = {
	hack_homePage: '',
	hack_from_creorder: '',
	hack_hideCreditDoor: ''
}

// getters
const getters = {
  hack_homePage: state => state.hack_homePage,
  hack_from_creorder: state => state.hack_from_creorder,
  hack_hideCreditDoor: state => state.hack_hideCreditDoor
}

const mutations = {
	[types.HACK_HOME_PAGE](state, homePage) {
		state.hack_homePage = homePage;
	},
	[types.HACK_FROM_CREORDER](state, is_from_creorder) {
		state.hack_from_creorder = is_from_creorder;
	},
	[types.HACK_CREDITDOOR](state, is_hideCreditDoor) {
		state.hack_hideCreditDoor = is_hideCreditDoor;
	}
}

export default {
	state,
	getters,
	mutations
}
