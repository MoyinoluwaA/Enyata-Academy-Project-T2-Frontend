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

    return {
        createUser,
        verifyUser,
        loginUser
    }
}

export default AuthService()
