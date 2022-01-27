import PatientService from '../../services/PatientService'

const state = {
  error: null,
  patient: {},
}

const getters = {
  getPatient: (state) => state.patient,
  getError: (state) => state.error,
}
const mutations = {
  SET_PATIENT: (state, value) => {
    state.patient = value
  },
  SET_ERROR: (state, value) => {
    state.error = value
  },
}

const actions = {
  fetchPatient({ commit }, id) {
    PatientService.get(id)
      .then((response) => {
        let data = response.data
        commit('SET_PATIENT', data.data)
        commit('SET_ERROR', false)
      })
      .catch((e) => {
        let data = e.response
        if (data !== null) {
          commit('SET_ERROR', true)
        }
      })
  },

  async fetchAsyncPatient({ commit }, id) {
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
