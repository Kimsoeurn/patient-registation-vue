<template>
  <div class="container-fluid my-3">
    <h2>
      {{ $t('patients.patient_registration') }}
      <router-link to="/patients" class="btn btn-secondary float-right">
        <b-icon icon="arrow90deg-left"></b-icon> {{ $t('app.go_back') }}
      </router-link>
    </h2>
    <div class="form-patient">
      <b-form>
        <fieldset>
          <legend>{{ $t('patients.patient_info') }}</legend>
          <div class="row">
            <div class="form-group col-lg-4">
              <label for="health_id_card">
                {{ $t('patients.health_id_card') }}
                <span class="text-danger">*</span>
              </label>
              <b-input type="text" id="health_id_card" />
            </div>
            <div class="form-group col-lg-4">
              <label for="name_khmer">
                {{ $t('patients.name_khmer') }}
                <span class="text-danger">*</span>
              </label>
              <b-input type="text" id="name_khmer" />
            </div>
            <div class="form-group col-lg-4">
              <label for="name_english">
                {{ $t('patients.name_english') }}
                <span class="text-danger">*</span>
              </label>
              <b-input type="text" id="name_english" />
            </div>
          </div>
          <div class="row">
            <div class="form-group col-lg-4">
              <label for="gender">
                {{ $t('patients.gender') }}
                <span class="text-danger">*</span>
              </label>
              <b-form-select
                v-model="gender"
                :options="genderOptions"
                id="gender"
              >
              </b-form-select>
            </div>
            <div class="form-group col-lg-4">
              <label for="nationality">
                {{ $t('patients.nationalilty') }}
                <span class="text-danger">*</span>
              </label>
              <b-form-select
                v-model="nationality"
                :options="nationalities"
                id="nationality"
              >
              </b-form-select>
            </div>
            <div class="form-group col-lg-4">
              <label for="occupation">
                {{ $t('patients.occupation') }}
                <span class="text-danger">*</span>
              </label>
              <b-form-select
                v-model="occupation"
                :options="occupations"
                id="occupation"
              >
              </b-form-select>
            </div>
          </div>
          <div class="row">
            <div class="form-group col-lg-4">
              <label for="other_id_card">
                {{ $t('patients.other_id_card') }}
              </label>
              <input type="text" class="form-control" id="other_id_card" />
            </div>
            <div class="form-group col-lg-4">
              <label for="phone_number">
                {{ $t('patients.phone_number') }}
              </label>
              <input type="text" class="form-control" id="phone_number" />
            </div>
            <div class="form-group col-lg-4">
              <label for="is_disabled">{{ $t('patients.is_disabled') }}</label>
              <b-form-select
                v-model="is_disabled"
                :options="disables"
                id="is_disabled"
              >
              </b-form-select>
            </div>
          </div>
          <div class="row">
            <div class="form-group col-lg-12">
              <label for="remark">{{ $t('patients.remark') }}</label>
              <textarea name="remark" id="remark" rows="2" class="form-control">
              </textarea>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>{{ $t('patients.address') }}</legend>
          <div class="row">
            <div class="form-group col-lg-6">
              <label for="province_id">{{ $t('patients.province') }}</label>
              <select name="province_id" id="province_id" class="form-control">
                <option value="">Select Province</option>
              </select>
            </div>
            <div class="form-group col-lg-6">
              <label for="district_id">{{ $t('patients.district') }}</label>
              <select name="district_id" id="district_id" class="form-control">
                <option value="">Select District</option>
              </select>
            </div>
            <div class="form-group col-lg-6">
              <label for="commune_id">{{ $t('patients.commune') }}</label>
              <select name="commune_id" id="commune_id" class="form-control">
                <option value="">Select Commune</option>
              </select>
            </div>
            <div class="form-group col-lg-6">
              <label for="village_id">{{ $t('patients.village') }}</label>
              <select name="village_id" id="village_id" class="form-control">
                <option value="">Select Village</option>
              </select>
            </div>
          </div>
        </fieldset>
        <b-button variant="primary" :class="['mr-1']">
          <b-icon icon="check-circle"></b-icon> {{ $t('app.save') }}
        </b-button>
        <b-button variant="danger">
          <b-icon icon="x-circle"></b-icon> {{ $t('app.cancel') }}
        </b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PatientCreate',
  data() {
    return {
      gender: null,
      nationality: null,
      occupation: null,
      is_disabled: 0,
      genderOptions: [
        { value: null, text: 'Select Gender' },
        { value: 'male', text: 'Male' },
        { value: 'female', text: 'Female' },
      ],
      nationalities: [
        { value: null, text: 'Select Nationality' },
        { value: 'khmer', text: 'Khmer' },
        { value: 'other', text: 'Other' },
      ],
      occupations: [
        { value: null, text: 'Select Occupation' },
        { value: 'job_title', text: 'Job Title' },
        { value: 'job_title_2', text: 'Job Title 2' },
      ],
      disables: [
        { value: 0, text: 'No' },
        { value: 1, text: 'Yes' },
      ],
    }
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
