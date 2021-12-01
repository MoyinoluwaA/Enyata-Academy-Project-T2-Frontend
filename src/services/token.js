import Cookies from 'js-cookie'
import { token } from '../helpers/variables'

const TokenService = () => {
    const getToken = () => {
        Cookies.get(token)
    }

    const setToken = (userToken) => {
        Cookies.set(token, JSON.stringify(userToken))
    }

    const removeToken = () => {
        Cookies.remove(token)
    }

    return {
        getToken,
        setToken,
        removeToken
    }
}

export default TokenService()
