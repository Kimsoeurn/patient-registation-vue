import PatientService from '../../services/PatientService'

const state = {
  error: null,
  error404: null,
  errorMessages: [],
  patient: {},
}

const getters = {
  getPatient: (state) => state.patient,
  getError: (state) => state.error,
  errorMessages: (state) => state.errorMessages,
  error404: (state) => state.error404,
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
  SET_ERROR_404: (state, error) => {
    state.error404 = error
  },
}

const actions = {
  async fetchPatients() {
    return await PatientService.getAll()
  },

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
    await PatientService.get(id)
      .then((response) => {
        let data = response.data
        if (data.errors) {
          commit('SET_ERROR', true)
          commit('SET_ERROR_404', true)
        } else {
          commit('SET_PATIENT', data.data)
          commit('SET_ERROR', false)
        }
      })
      .catch((e) => {
        let data = e.response
        if (data !== null) {
          commit('SET_ERROR', true)
          commit('SET_ERROR_404', true)
        }
      })
  },

  async deletePatient({ commit }, id) {
    await PatientService.delete(id)
      .then((response) => {
        console.log(response.data)
        commit('SET_ERROR', false)
      })
      .catch((e) => {
        console.log(e)
      })
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
