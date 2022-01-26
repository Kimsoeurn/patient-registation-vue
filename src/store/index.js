import Vue from 'vue'
import Vuex from 'vuex'
import province from './modules/province'
import patient from './modules/patient'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    province,
    patient,
  },
})
