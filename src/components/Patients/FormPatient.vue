<template>
  <div>
    <div class="form-patient">
      <ul>
        <li
          v-for="error in validationErrors"
          :key="error.message"
          class="text-danger"
        >
          {{ error[0] }}
        </li>
      </ul>
      <b-form method="POST" @submit.prevent="save()" id="form-patient">
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
                {{ $t('patients.nationalilty') }}
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
              <div class="invalid-feedback" v-if="!$v.form.occupation.required">
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
              <label for="is_disabled">{{ $t('patients.is_disabled') }}</label>
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
          <div class="row">
            <div class="form-group col-lg-6">
              <label for="province_id">{{ $t('patients.province') }}</label>
              <b-form-select
                v-model="province_id"
                :options="provinces"
                id="province_id"
              >
              </b-form-select>
            </div>
            <div class="form-group col-lg-6">
              <label for="district_id">{{ $t('patients.district') }}</label>
              <select
                v-model="district_id"
                name="district_id"
                id="district_id"
                class="form-control"
              >
                <option value="">Select District</option>
              </select>
            </div>
            <div class="form-group col-lg-6">
              <label for="commune_id">{{ $t('patients.commune') }}</label>
              <select
                v-model="commune_id"
                name="commune_id"
                id="commune_id"
                class="form-control"
              >
                <option value="">Select Commune</option>
              </select>
            </div>
            <div class="form-group col-lg-6">
              <label for="village_id">{{ $t('patients.village') }}</label>
              <select
                v-model="village_id"
                name="village_id"
                id="village_id"
                class="form-control"
              >
                <option value="">Select Village</option>
              </select>
            </div>
          </div>
        </fieldset>
        <b-button variant="danger" :class="['mr-1']">
          <b-icon icon="x-circle"></b-icon> {{ $t('app.cancel') }}
        </b-button>
        <b-button type="submit" variant="primary">
          <b-icon icon="check-circle"></b-icon> {{ $t('app.save') }}
        </b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import PatientService from '../../services/PatientService'

export default {
  name: 'FormPatient',
  data() {
    return {
      validationErrors: null,
      provinces: [],
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
      genderOptions: [
        { value: null, text: this.$t('patients.gender') },
        { value: 'male', text: this.$t('patients.genders.male') },
        { value: 'female', text: this.$t('patients.genders.female') },
      ],
      nationalities: [
        { value: null, text: this.$t('patients.nationalilty') },
        { value: 'khmer', text: this.$t('nation.khmer') },
        { value: 'cham', text: this.$t('nation.cham') },
        { value: 'other', text: this.$t('nation.other') },
      ],
      occupations: [
        { value: null, text: this.$t('patients.occupation') },
        { value: 'employee_in', text: this.$t('occupations.employee_in') },
        { value: 'employee_out', text: this.$t('occupations.employee_out') },
        { value: 'other', text: this.$t('occupations.other') },
      ],
      disables: [
        { value: 0, text: this.$t('app.no') },
        { value: 1, text: this.$t('app.yes') },
      ],

      province_id: null,
      district_id: null,
      commune_id: null,
      village_id: null,
    }
  },
  validations: {
    form: {
      health_id_card: {
        required,
      },
      name_kh: {
        required,
      },
      name_en: {
        required,
      },
      gender: {
        required,
      },
      nationality: {
        required,
      },
      date_of_birth: {
        required,
      },
      occupation: {
        required,
      },
    },
  },
  methods: {
    save() {
      let Toast = this.$swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
      })

      this.$v.$touch()

      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        PatientService.create(this.form)
          .then((response) => {
            if (response.data.error) {
              Toast.fire({
                icon: 'success',
                title: 'Fail Create',
              })
            } else {
              Toast.fire({
                icon: 'success',
                title: 'Created',
              })
              this.reset()
            }
          })
          .catch((e) => {
            let errors = e.response.data['errors']
            if (errors) {
              this.validationErrors = errors
            }
          })
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
    },
  },
}
</script>

<style scoped>
fieldset {
  border: 1px solid #e3e6f0 !important;
  padding: 1em 1.4em 1.4em 1.4em !important;
  margin: 0 0 1.5em 0 !important;
  -webkit-box-shadow: 0px 0px 0px 0px #000;
  box-shadow: 0px 0px 0px 0px #000;
  border-radius: 5px;
}

legend {
  border-radius: 5px;
  font-size: 1rem !important;
  font-weight: normal !important;
  text-align: left !important;
  width: auto;
  padding: 0 20px;
  border-bottom: none;
}
</style>
