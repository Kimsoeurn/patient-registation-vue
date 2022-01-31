import http from '../http-common'

class AuthService {
  login(data) {
    return http.post('login', data)
  }

  logout() {
    return http.post('logout')
  }

  profile() {
    return http.get('user')
  }
}

export default new AuthService()
