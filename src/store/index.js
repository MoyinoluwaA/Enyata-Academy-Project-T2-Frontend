import Vue from 'vue'
import Vuex from 'vuex'
import TokenService from '../services/token'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		token: TokenService.getToken() || null,
		applicantId: null,
		batchId: null
	},
	getters: {
		getToken: (state) => state.token,
		getApplicantId: (state) => state.applicantId,
		getBatchId: (state) => state.batchId
	},
	mutations: {
		setToken: (state, payload) => state.token = payload,
		setApplicantId: (state, payload) => state.applicantId = payload,
		setBatchId: (state, payload) => state.batchId = payload,
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
		},
		saveApplicantDetails({commit}, applicant) {
			commit('setApplicantId', applicant.applicant_id),
			commit('setBatchId', applicant.batch_id)
		}
	},
	modules: {
	}
})
