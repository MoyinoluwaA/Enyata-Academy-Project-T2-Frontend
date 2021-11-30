import Cookies from 'js-cookie'
import { authenticatedUser } from '../helpers/variables'

const TokenService = () => {
    const getToken = () => {
        if (Cookies.get(authenticatedUser)) {
            const user = JSON.parse(Cookies.get(authenticatedUser))
            return user.token
        }
        return false
    }

    return {
        getToken
    }
} 

export default TokenService()
