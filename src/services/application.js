import api from './access'

const ApplicationService = () => {
    const getUserStatus = async () => {
        return api.get('/applications/status')
    }
    const prefillForm = async () => {
        return api.get('/users/details')
    }

    return {
        getUserStatus,
        prefillForm
    }
}

export default ApplicationService()
