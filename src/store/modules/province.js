import ProvinceService from '../../services/ProvinceService'

const state = {
  province_id: null,
  district_id: null,
  commune_id: null,
  village_id: null,
  provinces: [],
  districts: [],
  communes: [],
  villages: [],
}

const getters = {
  allProvinces: (state) => state.provinces,
  allDistricts: (state) => state.districts,
  allCommunes: (state) => state.communes,
  allVillages: (state) => state.villages,
  province_id: (state) => state.province_id,
  district_id: (state) => state.district_id,
  commune_id: (state) => state.commune_id,
  village_id: (state) => state.village_id,
}

const actions = {
  async fetchProvinces({ commit }) {
    const response = await ProvinceService.getAll()
    commit('SET_PROVINCES', response.data['data'])
  },
  async fetchDistricts({ commit, state }) {
    const response = await ProvinceService.districts(state.province_id)
    commit('SET_DISTRICTS', response.data['data'])
  },
  async fetchCommunes({ commit, state }) {
    const response = await ProvinceService.communes(state.district_id)
    commit('SET_COMMUNES', response.data['data'])
  },
  async fetchVillages({ commit, state }) {
    const response = await ProvinceService.villages(state.commune_id)
    commit('SET_VILLAGES', response.data['data'])
  },
  resetForm({ commit }) {
    commit('SET_DISTRICTS', [])
    commit('SET_COMMUNES', [])
    commit('SET_VILLAGES', [])
  },

  resetAddress({ commit }) {
    commit('SET_DISTRICTS', [])
    commit('SET_COMMUNES', [])
    commit('SET_VILLAGES', [])
    commit('UPDATE_PROVINCE_ID', null)
    commit('UPDATE_DISTRICT_ID', null)
    commit('UPDATE_COMMUNE_ID', null)
    commit('UPDATE_VILLAGE_ID', null)
  },
  async setDefaultAddress({ commit }, data) {
    commit('UPDATE_PROVINCE_ID', data.province_id)
    commit('UPDATE_DISTRICT_ID', data.district_id)
    commit('UPDATE_COMMUNE_ID', data.commune_id)
    commit('UPDATE_VILLAGE_ID', data.village_id)
  },
}

const mutations = {
  SET_PROVINCES: (state, provinces) => {
    state.provinces = provinces
  },
  SET_DISTRICTS: (state, districts) => {
    state.districts = districts
  },
  SET_COMMUNES: (state, communes) => {
    state.communes = communes
  },
  SET_VILLAGES: (state, villages) => {
    state.villages = villages
  },
  UPDATE_PROVINCE_ID: (state, id) => {
    state.province_id = id
  },
  UPDATE_DISTRICT_ID: (state, id) => {
    state.district_id = id
  },
  UPDATE_COMMUNE_ID: (state, id) => {
    state.commune_id = id
  },
  UPDATE_VILLAGE_ID: (state, id) => {
    state.village_id = id
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
