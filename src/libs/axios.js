import axios from 'axios'
import Qs from 'qs'
import { showError } from '../utils/appNotification'

// Set config defaults when creating the instance
const Axios = axios.create({
    baseURL: 'https://localhost:5001/api/',
    timeout: 30000,
    paramsSerializer: function (params) {
        return Qs.stringify(params, { arrayFormat: 'brackets' })
    },
})

// Add a request interceptor
Axios.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        global.Loading.setLoading(true)
        return config
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error)
    }
)

// Add a response interceptor
Axios.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        global.Loading.setLoading(false)
        return response.data
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        global.Loading.setLoading(false)
        showError(error)
        return Promise.reject(error)
    }
)

export default Axios
