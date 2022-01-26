import Vue from 'vue'
import Vuex from 'vuex'
import province from './modules/province'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    province,
  },
})
