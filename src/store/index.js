import Vue from 'vue'
import Vuex from 'vuex'
import TokenService from '../services/token'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		token: TokenService.getToken() || null
	},
	getters: {
		getToken: (state) => state.token
	},
	mutations: {
		setToken: (state, payload) => state.token = payload,
	},
	actions: {
		handleLogIn({ commit }, token) {
			if (token) {
				commit('setToken', token)
				TokenService.setToken(token)
			}
		},
		handleLogOut({ commit }) {
			commit('setToken', null)
			TokenService.removeToken()
		}
	},
	modules: {
	}
})
