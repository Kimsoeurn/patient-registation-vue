import PatientService from '../../services/PatientService'

const state = {
  error: null,
  patient: {},
}

const getters = {
  patient: (state) => state.patient,
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
}

export default {
  state,
  getters,
  mutations,
  actions,
}
