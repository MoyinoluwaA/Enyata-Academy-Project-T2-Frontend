import api from './access'

const ApplicationService = () => {
    const getUserStatus = async () => {
        return api.get('/applications/status')
    }

    return {
        getUserStatus
    }
}

export default ApplicationService()
