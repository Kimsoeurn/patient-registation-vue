const API_ACCESS_TOKEN = 'access_token'

class TokenService {
  getToken() {
    return window.localStorage.getItem(API_ACCESS_TOKEN)
  }
  setToken(token) {
    window.localStorage.setItem(API_ACCESS_TOKEN, token)
  }
  removeToken() {
    window.localStorage.removeItem(API_ACCESS_TOKEN)
  }
}

export default new TokenService()
