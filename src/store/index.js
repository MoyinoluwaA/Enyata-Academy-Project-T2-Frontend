import Vue from 'vue'
import Vuex from 'vuex'
import AuthService from '../services/auth'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		user: AuthService.getAuthUser || null
	},
	getters: {
		getUser: (state) => state.user
	},
	mutations: {
		setUser: (state, payload) => state.user = payload,
	},
	actions: {
		handleLogIn({ commit }, loggedInUser) {
			if (loggedInUser) {
				commit('setUser', loggedInUser)
				AuthService.setAuthUser(loggedInUser)
			}
		},
		handleLogOut({ commit }) {
			commit('setUser', null)
			AuthService.removeUser()
		}

	},
	modules: {
	}
})
