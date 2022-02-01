import axios from 'axios'
import TokenService from './TokenService'

const instance = axios.create({
  baseURL: 'http://localhost/api',
  withCredentials: true,
  headers: {
    'Content-type': 'application/json',
  },
})

instance.interceptors.request.use(function (config) {
  config.headers.common['Authorization'] = 'Bearer ' + TokenService.getToken()
  return config
})

export default instance
