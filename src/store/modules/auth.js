import AuthService from '../../services/AuthService'
import router from '../../router'

const state = {
  token: localStorage.getItem('access_token') || null,
}
const getters = {
  token: (state) => state.token,
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
}
const actions = {
  async login({ commit }, data) {
    await AuthService.login(data)
      .then((response) => {
        const token = response.data.access_token
        localStorage.setItem('access_token', token)
        commit('SET_TOKEN', token)
        router.push('/')
      })
      .catch((error) => {
        console.log(error)
      })
  },
  doLogout(context) {
    if (context.getters.token) {
      AuthService.logout()
        .then((response) => {
          console.log(response)
          context.commit('SET_TOKEN', null)
          localStorage.removeItem('access_token')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
