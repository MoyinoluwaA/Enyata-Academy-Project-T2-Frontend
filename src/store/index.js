import Vue from 'vue'
import Vuex from 'vuex'
import { getAuthUser, setAuthUser, removeUser } from '../services/auth'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		user: getAuthUser || null
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
				setAuthUser(loggedInUser)
			}
		},
		handleLogOut({ commit }) {
			commit('setUser', null)
			removeUser()
		}
	},
	modules: {
	}
})
