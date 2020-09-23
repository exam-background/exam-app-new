import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    type:false
  },
  mutations: {
    show(state,val){
      state.type = val
    }
  },
  actions: {
  },
  modules: {
  }
})
