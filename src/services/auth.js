import axios from 'axios'
import { baseUrl } from '../helpers/variables'

const AuthService = () => {
    const createUser  =  async userDetails => {
        const response = await axios.post(`${ baseUrl }/users/register`, userDetails)
        return response.data
    }

    const verifyUser = async verifyToken => {
        const response = await axios.put(`${ baseUrl }/users/verify?verifyToken=${verifyToken}`)
        return response.data
    }

    const loginUser = async user => {
        const response = await axios.post(`${ baseUrl }/users/login`, user)
        return response.data
    }

    const forgotPassword = async email => {
        const response = await axios.post(`${ baseUrl }/users/forgot_password`, email)
        return response.data
    }

    const resetPassword = async (resetToken, password) => {
        const response = await axios.put(`${ baseUrl }/users/reset_password?resetToken=${resetToken}`, password)
        return response.data
    }

    const prefillForm = async() => {
        const response = await axios.get(`${ baseUrl }/users/details`)
        return response.data
    }


    return {
        createUser,
        verifyUser,
        loginUser,
        forgotPassword,
        resetPassword,
        prefillForm
    }
}

export default AuthService()
