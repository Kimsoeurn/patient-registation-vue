<template>
  <div class="container my-3">
    <h2>
      Patient Registration
      <router-link to="/patients" class="btn btn-secondary float-right">
        <b-icon icon="arrow90deg-left"></b-icon> Go Back
      </router-link>
    </h2>
    <div class="form-patient">
      <b-form>
        <fieldset>
          <legend>Patient Info</legend>
          <div class="row">
            <div class="form-group col-lg-4">
              <label for="health_id_card">
                Health ID Card <span class="text-danger">*</span>
              </label>
              <b-input type="text" id="health_id_card" />
            </div>
            <div class="form-group col-lg-4">
              <label for="name_khmer">
                Name Khmer <span class="text-danger">*</span>
              </label>
              <b-input type="text" id="name_khmer" />
            </div>
            <div class="form-group col-lg-4">
              <label for="name_english">
                Name English <span class="text-danger">*</span>
              </label>
              <b-input type="text" id="name_english" />
            </div>
          </div>
          <div class="row">
            <div class="form-group col-lg-4">
              <label for="gender">
                Gender <span class="text-danger">*</span>
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
                Nationality <span class="text-danger">*</span>
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
                Occupation <span class="text-danger">*</span>
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
              <label for="other_id_card">Other ID Card</label>
              <input type="text" class="form-control" id="other_id_card" />
            </div>
            <div class="form-group col-lg-4">
              <label for="phone_number">Phone Number</label>
              <input type="text" class="form-control" id="phone_number" />
            </div>
            <div class="form-group col-lg-4">
              <label for="is_disabled">Is Disabled?</label>
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
              <label for="remark">Remark</label>
              <textarea name="remark" id="remark" rows="2" class="form-control">
              </textarea>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>Address</legend>
          <div class="row">
            <div class="form-group col-lg-6">
              <label for="province_id">Province</label>
              <select name="province_id" id="province_id" class="form-control">
                <option value="">Select Province</option>
              </select>
            </div>
            <div class="form-group col-lg-6">
              <label for="district_id">District</label>
              <select name="district_id" id="district_id" class="form-control">
                <option value="">Select District</option>
              </select>
            </div>
            <div class="form-group col-lg-6">
              <label for="commune_id">Commune</label>
              <select name="commune_id" id="commune_id" class="form-control">
                <option value="">Select Commune</option>
              </select>
            </div>
            <div class="form-group col-lg-6">
              <label for="village_id">Village</label>
              <select name="village_id" id="village_id" class="form-control">
                <option value="">Select Village</option>
              </select>
            </div>
          </div>
        </fieldset>
        <b-button variant="primary" :class="['mr-1']">
          <b-icon icon="check-circle"></b-icon> Save
        </b-button>
        <b-button variant="danger">
          <b-icon icon="x-circle"></b-icon> Cancel
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
