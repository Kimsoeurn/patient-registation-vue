import TokenService from '../../services/TokenService'
import http from '../../http-common'
import AuthService from '../../services/AuthService'

const state = {
  token: TokenService.getToken() || null,
  userId: null,
  isAuthenticated: false,
}

const getters = {
  currentUser(state) {
    return state.userId
  },
  isAuthenticated(state) {
    return !!state.token
  },
  getToken(state) {
    return state.token
  },
}

const mutations = {
  SET_USER(state, data) {
    state.isAuthenticated = true
    state.userId = null
    state.token = data.access_token
    TokenService.setToken(data.access_token)
  },
  UNSET_USER(state) {
    state.token = null
    state.userId = null
    state.isAuthenticated = false
    TokenService.removeToken()
  },
}

const actions = {
  async login(context, data) {
    let response = await AuthService.login(data)
    if (response.status === 200) {
      context.commit('SET_USER', response.data)
      http.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${response.data.access_token}`
    } else {
      console.log('Login fail')
    }
  },

  async logout(context) {
    let response = await AuthService.logout()
    if (response.status === 200) {
      context.commit('UNSET_USER')
    } else {
      console.log('Error Logout')
    }
  },
}

export default {
  getters,
  actions,
  mutations,
  state,
}
