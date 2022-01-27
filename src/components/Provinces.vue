<template>
  <div class="row">
    <div class="form-group col-lg-6">
      <label for="province_id">{{ $t('patients.province') }}</label>
      <b-form-select v-model="province_id" @change="changeProvince">
        <b-form-select-option :value="null">
          {{ $t('patients.province') }}
        </b-form-select-option>
        <b-form-select-option
          id="province_id"
          v-for="province in allProvinces"
          :key="province.id"
          :value="province.id"
        >
          {{ province.name_kh }}
        </b-form-select-option>
      </b-form-select>
    </div>
    <div class="form-group col-lg-6">
      <label for="district_id">{{ $t('patients.district') }}</label>
      <b-form-select v-model="district_id" @change="changeDistrict">
        <b-form-select-option :value="null">
          {{ $t('patients.district') }}
        </b-form-select-option>
        <b-form-select-option
          id="district_id"
          v-for="district in allDistricts"
          :key="district.id"
          :value="district.id"
        >
          {{ district.name_kh }}
        </b-form-select-option>
      </b-form-select>
    </div>
    <div class="form-group col-lg-6">
      <label for="district_id">{{ $t('patients.commune') }}</label>
      <b-form-select v-model="commune_id" @change="changeCommune">
        <b-form-select-option :value="null">
          {{ $t('patients.commune') }}
        </b-form-select-option>
        <b-form-select-option
          id="commune_id"
          v-for="commune in allCommunes"
          :key="commune.id"
          :value="commune.id"
        >
          {{ commune.name_kh }}
        </b-form-select-option>
      </b-form-select>
    </div>
    <div class="form-group col-lg-6">
      <label for="village_id">{{ $t('patients.village') }}</label>
      <b-form-select v-model="village_id">
        <b-form-select-option :value="null">
          {{ $t('patients.village') }}
        </b-form-select-option>
        <b-form-select-option
          id="village_id"
          v-for="village in allVillages"
          :key="village.id"
          :value="village.id"
        >
          {{ village.name_kh }}
        </b-form-select-option>
      </b-form-select>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Provinces',
  computed: {
    province_id: {
      get() {
        return this.$store.state.province.province_id
      },
      set(value) {
        this.$store.commit('UPDATE_PROVINCE_ID', value)
        if (value) {
          this.fetchDistricts()
        }
      },
    },
    district_id: {
      get() {
        return this.$store.state.province.district_id
      },
      set(value) {
        this.$store.commit('UPDATE_DISTRICT_ID', value)
        if (value) {
          this.fetchCommunes()
        }
      },
    },
    commune_id: {
      get() {
        return this.$store.state.province.commune_id
      },
      set(value) {
        this.$store.commit('UPDATE_COMMUNE_ID', value)
        if (value) {
          this.fetchVillages()
        }
      },
    },
    village_id: {
      get() {
        return this.$store.state.province.village_id
      },
      set(value) {
        this.$store.commit('UPDATE_VILLAGE_ID', value)
      },
    },
    ...mapGetters([
      'allProvinces',
      'allDistricts',
      'allCommunes',
      'allVillages',
    ]),
  },
  methods: {
    ...mapActions([
      'fetchProvinces',
      'fetchDistricts',
      'fetchCommunes',
      'fetchVillages',
      'resetForm',
    ]),
    changeProvince() {
      this.$store.commit('UPDATE_DISTRICT_ID', null)
      this.$store.commit('UPDATE_VILLAGE_ID', null)
      this.$store.commit('UPDATE_COMMUNE_ID', null)
      this.resetForm()
    },
    changeDistrict() {
      this.$store.commit('UPDATE_COMMUNE_ID', null)
      this.$store.commit('UPDATE_VILLAGE_ID', null)
      this.$store.commit('SET_COMMUNES', [])
      this.$store.commit('SET_VILLAGES', [])
    },
    changeCommune() {
      this.$store.commit('UPDATE_VILLAGE_ID', null)
      this.$store.commit('SET_VILLAGES', [])
    },
  },
  async created() {
    await this.fetchProvinces()
  },
}
</script>
