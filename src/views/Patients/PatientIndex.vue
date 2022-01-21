<template>
  <div class="container-fluid mt-3">
    <h2>
      {{ $t('navbar.patients') }}
      <router-link to="/patients/create" class="btn btn-primary float-right">
        <b-icon icon="plus"></b-icon> {{ $t('app.add') }}
      </router-link>
    </h2>
    <div>
      <table-patient></table-patient>
    </div>
  </div>
</template>

<script>
import TablePatient from '../../components/Patients/TablePatient.vue'
export default {
  name: 'PatientIndex',
  components: {
    TablePatient,
  },
}
</script>
