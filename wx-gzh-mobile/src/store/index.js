// # 我们组装模块并导出 store 的地方
// import Vue from 'vue'
import Vuex from 'vuex'
import creNav from './modules/creNav'
import findMain from './modules/findMain'
import creditOrder from './modules/creditOrder'
import location from './modules/location'
import hackPage from './modules/hackPage'

// Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

// store中的全局变量，只在store中使用
// vuex实例  store

// vuex 模块
const store = {
  modules: {
  	creNav,
  	findMain,
  	creditOrder,
  	location,
  	hackPage
  },
  strict: debug
}

export default new Vuex.Store(store)