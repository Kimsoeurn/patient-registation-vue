<template>
  <div class="container-fluid my-3">
    <div class="row">
      <div class="col-lg-12">
        <go-back></go-back>
      </div>
    </div>
    <patient-form></patient-form>
  </div>
</template>

<script>
import PatientForm from './PatientForm.vue'
import GoBack from '../../components/GoBack'

export default {
  name: 'PatientCreate',
  components: {
    GoBack,
    PatientForm,
  },
}
</script>

<style>
fieldset {
  border: 1px solid #e3e6f0 !important;
  padding: 1em 1.4em 1.4em 1.4em !important;
  margin: 0 0 1.5em 0 !important;
  -webkit-box-shadow: 0px 0px 0px 0px #000;
  box-shadow: 0px 0px 0px 0px #000;
  border-radius: 5px;
}

fieldset legend {
  border-radius: 5px;
  font-size: 1rem !important;
  font-weight: normal !important;
  text-align: left !important;
  width: auto;
  padding: 5px 20px;
  border: 1px solid #e3e6f0;
}
</style>
