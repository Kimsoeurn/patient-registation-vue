import TokenService from '../../services/TokenService'
import AuthService from '../../services/AuthService'

const state = {
  token: TokenService.getToken() || null,
  user: TokenService.getCurrentUser() || {},
  isAuthenticated: false,
  authError: false,
}

const getters = {
  currentUser(state) {
    return state.user
  },
  isAuthenticated(state) {
    return !!state.token
  },
  getToken(state) {
    return state.token
  },
  authError: (state) => state.authError,
}

const mutations = {
  SET_TOKEN(state, data) {
    state.isAuthenticated = true
    state.token = data.access_token
    TokenService.setToken(data.access_token)
  },

  UNSET_TOKEN(state) {
    state.token = null
    state.isAuthenticated = false
    TokenService.removeToken()
  },

  SET_USER(state, data) {
    state.user = data
    TokenService.setCurrentUser(data)
  },

  SET_AUTH_ERROR(state, data) {
    state.authError = data
  },

  UNSET_USER(state) {
    state.user = {}
    TokenService.removeCurrentUser()
  },
}

const actions = {
  async login({ commit }, data) {
    let response = await AuthService.login(data)
    if (response.status === 200) {
      commit('SET_TOKEN', response.data)
    } else {
      console.log('Login fail')
    }
  },

  async profile({ commit }) {
    let response = await AuthService.profile()
    commit('SET_USER', response.data)
  },

  async logout({ commit }) {
    let response = await AuthService.logout()
    if (response.status === 200) {
      commit('UNSET_TOKEN')
      commit('SET_AUTH_ERROR', false)
      commit('UNSET_USER')
    } else {
      console.log('Error Logout')
    }
  },
}

export default {
  namespaced: true,
  getters,
  actions,
  mutations,
  state,
}
