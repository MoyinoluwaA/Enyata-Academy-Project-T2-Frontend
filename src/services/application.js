import api from './access'

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

    return {
        getUserStatus,
        prefillForm,
        createApplication,
        getApplicantStatus
    }
}

export default ApplicationService()
