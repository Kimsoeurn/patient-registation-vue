<template>
  <div>
    <fieldset>
      <legend>{{ $t('patients.address') }}</legend>
      <div class="row">
        <div class="form-group col-lg-6">
          <label for="province_id">{{ $t('patients.province') }}</label>
          <b-form-select v-model="province_id" @change="getDistricts">
            <b-form-select-option :value="null">
              {{ $t('patients.province') }}
            </b-form-select-option>
            <b-form-select-option
              id="province_id"
              v-for="province in provinces"
              :key="province.id"
              :value="province.id"
            >
              {{ province.name_kh }}
            </b-form-select-option>
          </b-form-select>
        </div>
        <div class="form-group col-lg-6">
          <label for="district_id">{{ $t('patients.district') }}</label>
          <b-form-select v-model="district_id" @change="getCommunes">
            <b-form-select-option :value="null">
              {{ $t('patients.district') }}
            </b-form-select-option>
            <b-form-select-option
              id="district_id"
              v-for="district in districts"
              :key="district.id"
              :value="district.id"
            >
              {{ district.name_kh }}
            </b-form-select-option>
          </b-form-select>
        </div>
        <div class="form-group col-lg-6">
          <label for="district_id">{{ $t('patients.commune') }}</label>
          <b-form-select v-model="commune_id" @change="getVillages">
            <b-form-select-option :value="null">
              {{ $t('patients.commune') }}
            </b-form-select-option>
            <b-form-select-option
              id="commune_id"
              v-for="commune in communes"
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
              v-for="village in villages"
              :key="village.id"
              :value="village.id"
            >
              {{ village.name_kh }}
            </b-form-select-option>
          </b-form-select>
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script>
import ProvinceService from '../services/ProvinceService'

export default {
  name: 'Provinces',
  data() {
    return {
      province_id: null,
      district_id: null,
      commune_id: null,
      village_id: null,
      provinces: [],
      districts: [],
      communes: [],
      villages: [],
    }
  },
  methods: {
    getDistricts() {
      ProvinceService.districts(this.province_id)
        .then((response) => {
          this.districts = response.data['data']
        })
        .catch((e) => {
          console.log(e)
        })
      this.district_id = null
      this.commune_id = null
      this.village_id = null
    },

    getCommunes() {
      ProvinceService.communes(this.district_id)
        .then((response) => {
          this.communes = response.data['data']
          console.log(this.districts)
        })
        .catch((e) => {
          console.log(e)
        })
      this.commune_id = null
    },
    getVillages() {
      ProvinceService.villages(this.commune_id)
        .then((response) => {
          this.villages = response.data['data']
          console.log(this.districts)
        })
        .catch((e) => {
          console.log(e)
        })
      this.village_id = null
    },
  },
  mounted() {
    ProvinceService.getAll()
      .then((response) => {
        this.provinces = response.data['data']
        console.log(this.provinces)
      })
      .catch((e) => {
        console.log(e)
      })
  },
}
</script>
