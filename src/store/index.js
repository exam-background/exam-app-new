import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    type:false,
	token:''
  },
  mutations: {
    show(state,val){
      state.type = val
    },
	set_token(state, token) {
	state.token = token
	localStorage.setItem("stuToken",token)
	},
	del_token(state) {
	state.token = ''
	localStorage.removeItem('stuToken')
	}
  },
  actions: {
  },
  modules: {
  }
})
