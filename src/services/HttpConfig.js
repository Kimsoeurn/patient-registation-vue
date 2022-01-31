import axios from 'axios'
import TokenService from './TokenService'

const instance = axios.create({
  baseURL: 'http://localhost/api',
  withCredentials: true,
  headers: {
    'Content-type': 'application/json',
  },
})

instance.defaults.headers.common['Authorization'] =
  'Bearer ' + TokenService.getToken()

export default instance
