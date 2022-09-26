import * as types from '../mutations'

// initial state
const state = {
	saveBanks: [],
	saveBasic: {},
	saveWork: {},
	savePersonInfo: {},
	saveCurArea: '',
	saveCPloc: []
}

// getters
const getters = {
  saveBanks: state => state.saveBanks,
  saveBasic: state => state.saveBasic,
  saveWork: state => state.saveWork,
  saveCurArea: state => state.saveCurArea,
  saveCPloc: state => state.saveCPloc,
  savePersonInfo: stata => state.savePersonInfo
}

const mutations = {
	[types.CREDIT_ORDER_BANK](state, bankArr) {
		state.saveBanks = bankArr;
	},
	[types.CREDIT_ORDER_BASIC](state, basicObj) {
		// 判断是否为空对象
		if (JSON.stringify(basicObj) === "{}") {
			state.saveBasic = Object.assign({}, {}, basicObj);
		}else {
			state.saveBasic = Object.assign({}, state.saveBasic, basicObj);
		}
	},
	[types.CREDIT_ORDER_WORK](state, workObj) {
		// 判断是否为空对象
		if (JSON.stringify(workObj) === "{}") {
			state.saveWork = Object.assign({}, {}, workObj);
		}else {
			state.saveWork = Object.assign({}, state.saveWork, workObj);
		}
	},
	[types.CREDIT_ORDER_PERSONINFO](state, personObj) {
		// 判断是否为空对象
		if (JSON.stringify(personObj) === "{}") {
			state.savePersonInfo = Object.assign({}, {}, personObj);
		}else {
			state.savePersonInfo = Object.assign({}, state.savePersonInfo, personObj);
		}
	},
	[types.CREDIT_ORDER_CURAREA](state, curArea) {
		state.saveCurArea = curArea;
	},
	[types.CREDIT_ORDER_CPLOC](state, CPlocArr) {
		state.saveCPloc = CPlocArr;
	}
}

export default {
	state,
	getters,
	mutations
}
