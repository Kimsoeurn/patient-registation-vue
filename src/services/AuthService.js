import http from './HttpConfig'

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

  register(user) {
    return http.post('register', user)
  }
}

export default new AuthService()
