import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost/api',
  headers: {
    'Content-type': 'application/json',
  },
})

instance.defaults.headers.common['Authorization'] =
  'Bearer ' + localStorage.getItem('access_token')

export default instance
