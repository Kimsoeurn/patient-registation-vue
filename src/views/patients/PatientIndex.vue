<template>
  <div class="container-fluid mt-3">
    <div class="row">
      <div class="col-lg-12">
        <router-link
          to="/patients/create"
          class="btn btn-primary float-right mb-3"
        >
          <b-icon icon="plus"></b-icon> {{ $t('app.add') }}
        </router-link>
      </div>
    </div>
    <div class="card mb-3">
      <div class="card-header">
        <i class="fa fa-th-list"></i> {{ $t('patients.table_patients') }}
      </div>
      <div class="card-body p-0">
        <table-patient></table-patient>
      </div>
    </div>
  </div>
</template>

<script>
import TablePatient from './PatientTable.vue'
export default {
  name: 'PatientIndex',
  components: {
    TablePatient,
  },
}
</script>
