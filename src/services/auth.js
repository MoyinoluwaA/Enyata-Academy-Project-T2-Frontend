import axios from 'axios'
import Cookies from 'js-cookie'
import { authenticatedUser, baseUrl } from '../helpers/variables'

const AuthService = () => {
    const createUser  =  async userDetails => {
        const userData = await axios.post(`${ baseUrl }/users/register`, userDetails)
        return userData.data
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
        getAuthUser,
        setAuthUser,
        removeUser
    }
}

export default AuthService()
