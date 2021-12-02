import axios from 'axios'
import TokenService from './token'
import { baseUrl } from '../helpers/variables'

const instance = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": "application/json",
    },
})

instance.interceptors.request.use(
    async(config) => {
        const token = TokenService.getToken()

        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token
        }

        return config
    },
    (err) => {
        return Promise.reject(err)
    }
)

instance.interceptors.response.use(
    (res) => {
        return res.data
    },
    (err) => {
        return Promise.reject(err)
    }
)

export default instance
