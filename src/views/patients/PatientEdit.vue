<template>
  <div class="container-fluid my-3">
    <div class="row">
      <div class="col-lg-12">
        <go-back></go-back>
      </div>
    </div>
    <patient-form :id="id"></patient-form>
  </div>
</template>

<script>
import GoBack from '../../components/GoBack'
import PatientForm from './PatientForm'
export default {
  name: 'PatientEdit',
  data() {
    return {
      id: Number.parseInt(this.$route.params.id),
    }
  },
  components: {
    PatientForm,
    GoBack,
  },
}
</script>

<style scoped></style>
