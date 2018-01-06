import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
/**
 * @todo
 */
export default new Vuex.Store({
  state: {
    curr1: [],
    curr2: []
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    products: state => {
      return state.products
    }
  }
})
