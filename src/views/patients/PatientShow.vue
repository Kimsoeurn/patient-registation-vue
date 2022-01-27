<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <go-back></go-back>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <i class="fa fa-th-list"></i> {{ $t('patients.detail') }}
      </div>
      <div class="card-body p-0">
        <patient-detail></patient-detail>
      </div>
    </div>
  </div>
</template>

<script>
import PatientDetail from './PatientDetail'
import GoBack from '../../components/GoBack'
export default {
  name: 'PatientShow',
  components: { GoBack, PatientDetail },
}
</script>

<style scoped></style>
