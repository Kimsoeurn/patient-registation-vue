import PatientService from '../../services/PatientService'

const state = {
  error: null,
  errorMessages: [],
  patient: {},
}

const getters = {
  getPatient: (state) => state.patient,
  getError: (state) => state.error,
  errorMessages: (state) => state.errorMessages,
}
const mutations = {
  SET_PATIENT: (state, value) => {
    state.patient = value
  },
  SET_ERROR: (state, value) => {
    state.error = value
  },
  SET_ERROR_MESSAGE: (state, errors) => {
    state.errorMessages = errors
  },
}

const actions = {
  async createPatient({ commit }, data) {
    await PatientService.create(data)
      .then((response) => {
        let data = response.data
        if (data.errors) {
          commit('SET_ERROR', true)
        } else {
          commit('SET_PATIENT', data.data)
          commit('SET_ERROR', false)
          commit('SET_ERROR_MESSAGE', [])
        }
      })
      .catch((e) => {
        let data = e.response
        if (data !== null) {
          commit('SET_ERROR', true)
          commit('SET_ERROR_MESSAGE', data.data['errors'])
        }
      })
  },
  async updatePatient({ commit }, data) {
    await PatientService.update(data.id, data.data)
      .then((response) => {
        let data = response.data
        if (data.errors) {
          commit('SET_ERROR', true)
        } else {
          commit('SET_PATIENT', data.data)
          commit('SET_ERROR', false)
          commit('SET_ERROR_MESSAGE', [])
        }
      })
      .catch((e) => {
        let data = e.response
        if (data !== null) {
          commit('SET_ERROR', true)
          commit('SET_ERROR_MESSAGE', data.data['errors'])
        }
      })
  },
  async fetchPatient({ commit }, id) {
    let response = await PatientService.get(id)
    commit('SET_PATIENT', response.data.data)
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
