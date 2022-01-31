<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <go-back></go-back>
      </div>
    </div>
    <patient-detail></patient-detail>
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
