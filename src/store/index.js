import Vue from 'vue'
import Vuex from 'vuex'
import TokenService from '../services/token'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		token: TokenService.getToken() || null,
		applicantId: null,
		batchId: null,
		daysToAssessment: 0,
		applicantStatus: 'pending',
		assessment: {},
		submittedTime: {}
	},
	getters: {
		getToken: (state) => state.token,
		getApplicantId: (state) => state.applicantId,
		getBatchId: (state) => state.batchId,
		getDaysToAssessment: (state) => state.daysToAssessment,
		getApplicantStatus: (state) => state.applicantStatus,
		getAssessment: (state) => state.assessment,
		getSubmittedTime: (state) => state.submittedTime,
	},
	mutations: {
		setToken: (state, payload) => state.token = payload,
		setApplicantId: (state, payload) => state.applicantId = payload,
		setBatchId: (state, payload) => state.batchId = payload,
		setDaysToAssessment: (state, payload) => state.daysToAssessment = payload,
		setApplicantStatus: (state, payload) => state.applicantStatus = payload,
		setAssessment: (state, payload) => state.assessment = payload,
		setSubmittedTime: (state, payload) => state.submittedTime = payload
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
		},
		saveApplicantStatus({commit}, status) {
			commit('setDaysToAssessment', status.daysToAssessment),
			commit('setApplicantStatus', status.applicantStatus)
		},
		saveAssessment({commit}, assessment) {
			commit('setAssessment', assessment)
		},
		saveSubmittedTime({commit}, submittedTime) {
			commit('setSubmittedTime', submittedTime)
		}
	},
	modules: {
	}
})
