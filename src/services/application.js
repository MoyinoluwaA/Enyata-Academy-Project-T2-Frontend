import api from './access'
import axios from 'axios'

const ApplicationService = () => {
    const getUserStatus = async () => {
        return api.get('/applications/status')
    }
    const prefillForm = async () => {
        return api.get('/users/details')
    }
    const createApplication = async (applicantDetails, batchId) => {
        return api.put(`/applications/apply?batchId=${ batchId }`, applicantDetails)
    }
    const getApplicantStatus = async () => {
        return api.get(`/applications/status`)
    }
    const getAssessmentQuestions = async (batchId, applicantId) => {
        return api.get(`/assessment/questions/${ batchId }?applicantId=${ applicantId }`)
    }
    const submitAssessment = async (batchId, applicantId, answers) => {
        return api.post(`/assessment/submit/${ batchId }?applicantId=${ applicantId }`, answers)
    }
    const getApplicationStatus = async () => {
        return axios.get('https://enyata-academy.herokuapp.com/api/applications/status/applications')
    }

    return {
        getUserStatus,
        prefillForm,
        createApplication,
        getApplicantStatus,
        getAssessmentQuestions,
        submitAssessment,
        getApplicationStatus
    }
}

export default ApplicationService()
