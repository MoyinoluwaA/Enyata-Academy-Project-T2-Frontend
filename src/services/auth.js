import axios from 'axios'
import Cookies from 'js-cookie'
import { authenticatedUser, baseUrl } from '../helpers/variables'

const AuthService = () => {
    const createUser  =  async userDetails => {
        const response = await axios.post(`${ baseUrl }/users/register`, userDetails)
        return response.data
    }

    const verifyUser = async verifyToken => {
        const response = await axios.put(`${ baseUrl }/users/verify?verifyToken=${verifyToken}`)
        return response.data
    }

    const getAuthUser = () => {
        Cookies.get(authenticatedUser)
    }

    const setAuthUser = (user) => {
        Cookies.set(authenticatedUser, JSON.stringify(user))
    }

    const removeUser = () => {
        Cookies.remove(authenticatedUser)
    }

    return {
        createUser,
        verifyUser,
        getAuthUser,
        setAuthUser,
        removeUser
    }
}

export default AuthService()
