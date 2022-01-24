<template>
  <div class="container-fluid my-3">
    <h2>
      {{ $t('patients.patient_registration') }}
      <router-link to="/patients" class="btn btn-secondary float-right">
        <b-icon icon="arrow90deg-left"></b-icon> {{ $t('app.go_back') }}
      </router-link>
    </h2>
    <form-patient></form-patient>
  </div>
</template>

<script>
import FormPatient from '../../components/Patients/FormPatient.vue'

export default {
  name: 'PatientCreate',
  components: {
    FormPatient,
  },
}
</script>

<style scoped></style>
