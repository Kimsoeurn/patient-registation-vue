class AuthService {
  constructor(http) {
    this.http = http
  }

  login(data) {
    return this.http.post('login', data)
  }

  logout() {
    return this.http.post('logout')
  }

  profile() {
    return this.http.get('user')
  }
}

export default AuthService
