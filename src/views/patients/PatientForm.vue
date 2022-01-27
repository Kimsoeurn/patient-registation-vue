<template>
  <div class="card">
    <div class="card-header">
      <i class="fa fa-plus"></i> {{ $t('patients.patient_registration') }}
    </div>
    <b-form method="POST" @submit.prevent="savePatient" id="form-patient">
      <div class="card-body">
        <div class="form-patient">
          <ul>
            <li
              v-for="error in errorMessages"
              :key="error.message"
              class="text-danger"
            >
              {{ error[0] }}
            </li>
          </ul>

          <fieldset>
            <legend>{{ $t('patients.patient_info') }}</legend>
            <div class="row">
              <div class="form-group col-lg-4">
                <label for="health_id_card">
                  {{ $t('patients.health_id_card') }}
                  <span class="text-danger">*</span>
                </label>
                <b-input
                  v-model.trim="$v.form.health_id_card.$model"
                  type="text"
                  id="health_id_card"
                  :class="{ 'is-invalid': $v.form.health_id_card.$error }"
                />
                <div
                  class="invalid-feedback"
                  v-if="!$v.form.health_id_card.required"
                >
                  {{ $t('validations.health_id_card_required') }}
                </div>
              </div>
              <div class="form-group col-lg-4">
                <label for="name_khmer">
                  {{ $t('patients.name_khmer') }}
                  <span class="text-danger">*</span>
                </label>
                <b-input
                  v-model.trim="$v.form.name_kh.$model"
                  type="text"
                  id="name_khmer"
                  :class="{ 'is-invalid': $v.form.name_kh.$error }"
                />
                <div class="invalid-feedback" v-if="!$v.form.name_kh.required">
                  {{ $t('validations.name_khmer_required') }}
                </div>
              </div>
              <div class="form-group col-lg-4">
                <label for="name_english">
                  {{ $t('patients.name_english') }}
                  <span class="text-danger">*</span>
                </label>
                <b-input
                  v-model.trim="$v.form.name_en.$model"
                  type="text"
                  id="name_english"
                  :class="{ 'is-invalid': $v.form.name_en.$error }"
                />
                <div class="invalid-feedback" v-if="!$v.form.name_en.required">
                  {{ $t('validations.name_english_required') }}
                </div>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-lg-4">
                <label for="gender">
                  {{ $t('patients.gender') }}
                  <span class="text-danger">*</span>
                </label>
                <b-form-select
                  v-model="form.gender"
                  :options="genderOptions"
                  id="gender"
                  :class="{ 'is-invalid': $v.form.gender.$error }"
                >
                </b-form-select>
                <div class="invalid-feedback" v-if="!$v.form.gender.required">
                  {{ $t('validations.gender_required') }}
                </div>
              </div>
              <div class="form-group col-lg-4">
                <label for="nationality">
                  {{ $t('patients.nationality') }}
                  <span class="text-danger">*</span>
                </label>
                <b-form-select
                  v-model="form.nationality"
                  :options="nationalities"
                  id="nationality"
                  :class="{ 'is-invalid': $v.form.nationality.$error }"
                >
                </b-form-select>
                <div
                  class="invalid-feedback"
                  v-if="!$v.form.nationality.required"
                >
                  {{ $t('validations.nationality_required') }}
                </div>
              </div>
              <div class="form-group col-lg-4">
                <label for="date_of_birth">
                  {{ $t('patients.date_of_birth') }}
                  <span class="text-danger">*</span>
                </label>
                <input
                  v-model="form.date_of_birth"
                  type="date"
                  class="form-control"
                  id="date_of_birth"
                  :class="{ 'is-invalid': $v.form.date_of_birth.$error }"
                />
                <div
                  class="invalid-feedback"
                  v-if="!$v.form.date_of_birth.required"
                >
                  {{ $t('validations.date_of_birth_required') }}
                </div>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-lg-4">
                <label for="occupation">
                  {{ $t('patients.occupation') }}
                  <span class="text-danger">*</span>
                </label>
                <b-form-select
                  v-model="form.occupation"
                  :options="occupations"
                  id="occupation"
                  :class="{ 'is-invalid': $v.form.occupation.$error }"
                >
                </b-form-select>
                <div
                  class="invalid-feedback"
                  v-if="!$v.form.occupation.required"
                >
                  {{ $t('validations.occupation_required') }}
                </div>
              </div>
              <div class="form-group col-lg-4">
                <label for="other_id_card">
                  {{ $t('patients.other_id_card') }}
                </label>
                <input
                  v-model="form.other_id_card"
                  type="text"
                  class="form-control"
                  id="other_id_card"
                />
              </div>
              <div class="form-group col-lg-4">
                <label for="phone_number">
                  {{ $t('patients.phone_number') }}
                </label>
                <input
                  v-model="form.phone_number"
                  type="text"
                  class="form-control"
                  id="phone_number"
                />
              </div>
            </div>
            <div class="row">
              <div class="form-group col-lg-4">
                <label for="is_disabled">{{
                  $t('patients.is_disabled')
                }}</label>
                <b-form-select
                  v-model="form.is_disabled"
                  :options="disables"
                  id="is_disabled"
                >
                </b-form-select>
              </div>
              <div class="form-group col-lg-8">
                <label for="remark">{{ $t('patients.remark') }}</label>
                <textarea
                  v-model="form.remark"
                  name="remark"
                  id="remark"
                  rows="2"
                  class="form-control"
                >
                </textarea>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend>{{ $t('patients.address') }}</legend>
            <Provinces></Provinces>
          </fieldset>
        </div>
      </div>
      <div class="card-footer">
        <b-button variant="danger" :class="['mr-1']">
          <b-icon icon="x-circle"></b-icon> {{ $t('app.cancel') }}
        </b-button>
        <b-button type="submit" variant="primary">
          <b-icon icon="check-circle"></b-icon> {{ $t('app.save') }}
        </b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import Provinces from '../../components/Provinces.vue'
import LookupSelect from './inc/LookupSelect'
import Validation from './inc/Validation'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'PatientForm',
  props: {
    id: Number,
  },
  components: {
    Provinces,
  },
  computed: {
    ...mapGetters([
      'getError',
      'errorMessages',
      'province_id',
      'district_id',
      'commune_id',
      'village_id',
      'getPatient',
    ]),
  },
  data() {
    return {
      form: {
        health_id_card: '',
        name_kh: '',
        name_en: '',
        other_id_card: '',
        phone_number: '',
        remark: '',
        gender: null,
        nationality: null,
        date_of_birth: null,
        occupation: null,
        is_disabled: 0,
      },
      ...LookupSelect(this.$i18n),
    }
  },
  validations: { ...Validation },
  methods: {
    ...mapActions(['createPatient', 'fetchPatient', 'updatePatient']),
    async savePatient() {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        let data = {
          ...this.form,
          province_id: this.province_id,
          district_id: this.district_id,
          commune_id: this.commune_id,
          village_id: this.village_id,
        }
        if (this.id) {
          await this.updatePatient({ id: this.id, data: data })
          if (!this.getError) {
            this.toastMessage('Updated')
          } else {
            this.toastMessage('Something went wrong', 'error')
          }
        } else {
          await this.createPatient(data)
          if (!this.getError) {
            this.reset()
            this.toastMessage('Created')
          } else {
            this.toastMessage('Something went wrong', 'error')
          }
        }
      } else {
        this.toastMessage('Something went wrong', 'error')
      }
    },
    reset() {
      this.form = {
        health_id_card: '',
        name_kh: '',
        name_en: '',
        other_id_card: '',
        phone_number: '',
        remark: '',
        gender: null,
        nationality: null,
        date_of_birth: null,
        occupation: null,
        is_disabled: 0,
      }
      this.$v.$reset()
      this.$store.dispatch('resetAddress')
    },
    toastMessage(message, type = 'success') {
      let Toast = this.$swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
      })
      Toast.fire({
        icon: type,
        title: message,
      })
    },
  },
  async created() {
    if (this.id) {
      await this.fetchPatient(this.id)
      this.form = { ...this.getPatient }
      await this.$store.dispatch('setDefaultAddress', {
        province_id: this.getPatient.province_id,
        district_id: this.getPatient.district_id,
        commune_id: this.getPatient.commune_id,
        village_id: this.getPatient.village_id,
      })
    } else {
      await this.$store.dispatch('resetAddress')
    }
  },
}
</script>

<style scoped></style>
