const API_ACCESS_TOKEN = 'access_token'
const CURRENT_USER = 'user'

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
  getCurrentUser() {
    return JSON.parse(window.localStorage.getItem(CURRENT_USER))
  }
  setCurrentUser(user) {
    window.localStorage.setItem(CURRENT_USER, JSON.stringify(user))
  }
  removeCurrentUser() {
    window.localStorage.removeItem(CURRENT_USER)
  }
}

export default new TokenService()
